(function() {
  var STORAGE_KEY = "site-plogs-list-state";
  var RESTORE_KEY = "site-plogs-restore-pending";
  var MAX_STATE_AGE = 6 * 60 * 60 * 1000;

  function getStorage() {
    try {
      return window.sessionStorage;
    } catch (error) {
      return null;
    }
  }

  function normalizePath(path) {
    if (!path) {
      return "/";
    }

    return path.length > 1 ? path.replace(/\/+$/, "") : path;
  }

  function readState(storage) {
    if (!storage) {
      return null;
    }

    var raw = storage.getItem(STORAGE_KEY);
    if (!raw) {
      return null;
    }

    try {
      var parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") {
        return null;
      }

      if (!parsed.savedAt || Date.now() - parsed.savedAt > MAX_STATE_AGE) {
        storage.removeItem(STORAGE_KEY);
        storage.removeItem(RESTORE_KEY);
        return null;
      }

      return parsed;
    } catch (error) {
      storage.removeItem(STORAGE_KEY);
      storage.removeItem(RESTORE_KEY);
      return null;
    }
  }

  function writeState(storage, state) {
    if (!storage) {
      return;
    }

    storage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function setRestorePending(storage, isPending) {
    if (!storage) {
      return;
    }

    if (isPending) {
      storage.setItem(RESTORE_KEY, "1");
      return;
    }

    storage.removeItem(RESTORE_KEY);
  }

  function getActiveFilters() {
    return Array.prototype.slice.call(
      document.querySelectorAll("[data-plog-filter][aria-pressed='true']")
    ).map(function(button) {
      return button.getAttribute("data-plog-filter");
    });
  }

  function saveListState(selectedUrl) {
    var storage = getStorage();
    if (!storage) {
      return;
    }

    writeState(storage, {
      path: normalizePath(window.location.pathname),
      scrollY: Math.max(window.pageYOffset, document.documentElement.scrollTop || 0),
      filters: getActiveFilters(),
      activePostUrl: selectedUrl || "",
      savedAt: Date.now()
    });
  }

  function isModifiedClick(event, link) {
    return event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      (link.target && link.target !== "_self");
  }

  function getRestoreTop(feed, state) {
    if (typeof state.scrollY === "number" && !isNaN(state.scrollY)) {
      return state.scrollY;
    }

    if (!state.activePostUrl) {
      return null;
    }

    var links = feed.querySelectorAll("[data-plog-item] a[href]");
    for (var i = 0; i < links.length; i += 1) {
      if (links[i].href !== state.activePostUrl) {
        continue;
      }

      var card = links[i].closest("[data-plog-item]");
      if (!card) {
        continue;
      }

      return Math.max(card.getBoundingClientRect().top + window.pageYOffset - 120, 0);
    }

    return null;
  }

  function applyFilterState(filters) {
    var activeFilters = Array.isArray(filters) ? filters : [];
    var buttons = document.querySelectorAll("[data-plog-filter]");

    Array.prototype.forEach.call(buttons, function(button) {
      var key = button.getAttribute("data-plog-filter");
      var isActive = button.getAttribute("aria-pressed") === "true";
      var shouldBeActive = activeFilters.indexOf(key) !== -1;

      if (isActive !== shouldBeActive) {
        button.click();
      }
    });
  }

  function restoreListState(feed) {
    var storage = getStorage();
    var state = readState(storage);
    if (!storage || !state || storage.getItem(RESTORE_KEY) !== "1") {
      return;
    }

    if (normalizePath(state.path) !== normalizePath(window.location.pathname)) {
      setRestorePending(storage, false);
      return;
    }

    applyFilterState(state.filters);

    window.requestAnimationFrame(function() {
      window.requestAnimationFrame(function() {
        var top = getRestoreTop(feed, state);
        if (typeof top === "number" && !isNaN(top)) {
          window.scrollTo(0, top);
        }
        setRestorePending(storage, false);
      });
    });
  }

  function initFootprintsList() {
    var feed = document.querySelector("[data-plogs-feed]");
    if (!feed) {
      return;
    }

    restoreListState(feed);

    feed.addEventListener("click", function(event) {
      var link = event.target.closest("[data-plog-item] a[href]");
      if (!link || isModifiedClick(event, link)) {
        return;
      }

      saveListState(link.href);
      setRestorePending(getStorage(), true);
    });

    var filters = document.querySelector("[data-plog-filters]");
    if (filters) {
      filters.addEventListener("click", function() {
        saveListState("");
      });
    }

    window.addEventListener("pagehide", function() {
      var storage = getStorage();
      if (storage && storage.getItem(RESTORE_KEY) === "1") {
        return;
      }

      saveListState("");
    });
  }

  function initBackButtons() {
    var buttons = document.querySelectorAll(".js-plogs-back");
    if (!buttons.length) {
      return;
    }

    var storage = getStorage();
    if (!storage) {
      return;
    }

    Array.prototype.forEach.call(buttons, function(button) {
      button.addEventListener("click", function() {
        if (readState(storage)) {
          setRestorePending(storage, true);
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function() {
    initFootprintsList();
    initBackButtons();
  });
})();
