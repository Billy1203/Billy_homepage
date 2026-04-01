/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function(){
  // Sticky footer
  var bumpIt = function() {
      $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
    },
    didResize = false;

  bumpIt();

  $(window).resize(function() {
    didResize = true;
  });
  setInterval(function() {
    if (didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);
  // FitVids init
  $("#main").fitVids();

  // init sticky sidebar
  $(".sticky").Stickyfill();

  var stickySideBar = function(){
    const MINIMUM_WIDTH = 1024;
    var desktopProfile = $(".author-profile-card--desktop");
    var desktopButton = desktopProfile.find(".author__urls-wrapper button");
    var desktopUrls = desktopProfile.find(".author__urls");

    if (!desktopProfile.length) {
      return;
    }

    // Adjust if the follow button is shown based upon screen size
    var width = $(window).width();
    var show = desktopButton.length === 0 ? width > MINIMUM_WIDTH : !desktopButton.is(":visible");

    // Don't show the follow button if there is no content for it
    var count = desktopProfile.find('.author__urls.social-icons li').length - desktopProfile.find('li.author__desktop').length;
    if (width <= MINIMUM_WIDTH && count === 0) {
      desktopButton.hide();
      show = false;
    }

    if (show) {
      // fix
      Stickyfill.rebuild();
      Stickyfill.init();
      desktopUrls.show();
    } else {
      // unfix
      Stickyfill.stop();
      desktopUrls.hide();
    }
  };

  stickySideBar();

  $(window).resize(function(){
    stickySideBar();
  });

  // Follow menu drop down
  $(".author-profile-card--desktop .author__urls-wrapper button").on("click", function() {
    var desktopProfile = $(this).closest(".author-profile-card--desktop");
    desktopProfile.find(".author__urls").fadeToggle("fast", function() {});
    desktopProfile.find(".author__urls-wrapper button").toggleClass("open");
  });

  // init smooth scroll, this needs to be slightly more than then fixed masthead height
  $("a").smoothScroll({offset: -65});

  // add lightbox class to all image links
  $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

  // Magnific-Popup options
  $(".image-popup").magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 500, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-zoom-in',
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

  var initPlogFilters = function() {
    var filterRoot = document.querySelector("[data-plog-filters]");
    var feed = document.querySelector("[data-plogs-feed]");

    if (!filterRoot || !feed) {
      return;
    }

    var buttons = Array.prototype.slice.call(filterRoot.querySelectorAll("[data-plog-filter]"));
    var items = Array.prototype.slice.call(feed.querySelectorAll("[data-plog-item]"));
    var emptyState = document.querySelector("[data-plogs-empty]");
    var activeFilters = [];
    var emptyFeedbackTimer = null;

    var hasActiveFilter = function(filterKey) {
      return activeFilters.indexOf(filterKey) !== -1;
    };

    var getVisibleCount = function(filters) {
      var hasFilters = filters.length > 0;
      var visibleCount = 0;

      items.forEach(function(item) {
        var itemType = item.getAttribute("data-plog-type") || "";
        var matches = !hasFilters || filters.indexOf(itemType) !== -1;

        if (matches) {
          visibleCount += 1;
        }
      });

      return visibleCount;
    };

    var hideEmptyFeedback = function() {
      if (!emptyState) {
        return;
      }

      window.clearTimeout(emptyFeedbackTimer);
      emptyState.hidden = true;
    };

    var showEmptyFeedback = function() {
      if (!emptyState) {
        return;
      }

      window.clearTimeout(emptyFeedbackTimer);
      emptyState.hidden = false;
      emptyFeedbackTimer = window.setTimeout(function() {
        emptyState.hidden = true;
      }, 2400);
    };

    var syncButtonState = function(button) {
      var filterKey = button.getAttribute("data-plog-filter");
      var isActive = hasActiveFilter(filterKey);

      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    };

    var syncVisibleItems = function() {
      var hasFilters = activeFilters.length > 0;

      items.forEach(function(item) {
        var itemType = item.getAttribute("data-plog-type") || "";
        var matches = !hasFilters || hasActiveFilter(itemType);

        item.hidden = !matches;
        item.classList.toggle("is-filtered-out", !matches);
      });

      filterRoot.classList.toggle("has-active-filters", hasFilters);
    };

    buttons.forEach(function(button) {
      syncButtonState(button);

      button.addEventListener("click", function() {
        var filterKey = button.getAttribute("data-plog-filter");
        var nextFilters = activeFilters.slice();
        var filterIndex = nextFilters.indexOf(filterKey);

        if (filterIndex === -1) {
          nextFilters.push(filterKey);
        } else {
          nextFilters.splice(filterIndex, 1);
        }

        if (nextFilters.length > 0 && getVisibleCount(nextFilters) === 0) {
          showEmptyFeedback();
          return;
        }

        hideEmptyFeedback();
        activeFilters = nextFilters;
        buttons.forEach(syncButtonState);
        syncVisibleItems();
      });
    });

    hideEmptyFeedback();
    syncVisibleItems();
  };

  var initAboutNews = function() {
    var sections = Array.prototype.slice.call(document.querySelectorAll("[data-news-stack]"));
    var reducedMotionQuery = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;

    if (!sections.length) {
      return;
    }

    var prefersReducedMotion = function() {
      return reducedMotionQuery ? reducedMotionQuery.matches : false;
    };

    sections.forEach(function(section) {
      var items = Array.prototype.slice.call(section.querySelectorAll("[data-news-card]"));
      var observer = null;
      var layoutFrame = null;
      var resizeObserver = null;

      if (!items.length) {
        return;
      }

      items.forEach(function(item, index) {
        item.style.setProperty("--news-layer", items.length - index);
        item.setAttribute("data-news-index", index);
      });

      section.classList.add("is-enhanced");

      var markVisible = function(item) {
        item.classList.add("is-visible");
      };

      var clearStickyLayout = function() {
        section.setAttribute("data-news-layout", "flow");

        items.forEach(function(item) {
          item.style.removeProperty("--news-stick-top");

          if (window.Stickyfill && typeof window.Stickyfill.remove === "function") {
            window.Stickyfill.remove(item);
          }
        });
      };

      var primeVisibleItems = function() {
        var viewportHeight = window.innerHeight || document.documentElement.clientHeight || 0;

        items.forEach(function(item) {
          var rect = item.getBoundingClientRect();

          if (rect.top < viewportHeight * 0.94) {
            markVisible(item);
          }
        });
      };

      var computeStickyLayout = function() {
        clearStickyLayout();
        // Prefer a stable flow layout here. The sticky-stacked version looked
        // interesting, but it could under-estimate height on longer timelines
        // and cause lower cards to overlap on wide screens.
      };

      var requestStickyLayout = function() {
        window.cancelAnimationFrame(layoutFrame);
        layoutFrame = window.requestAnimationFrame(computeStickyLayout);
      };

      primeVisibleItems();

      if (!prefersReducedMotion() && "IntersectionObserver" in window) {
        observer = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting || entry.intersectionRatio > 0.18) {
              markVisible(entry.target);
              observer.unobserve(entry.target);
            }
          });
        }, {
          threshold: 0.18,
          rootMargin: "0px 0px -12% 0px"
        });

        items.forEach(function(item) {
          if (!item.classList.contains("is-visible")) {
            observer.observe(item);
          }
        });

        window.requestAnimationFrame(function() {
          section.classList.add("is-motion-ready");
        });
      } else {
        items.forEach(markVisible);
        section.classList.add("is-motion-ready");
      }

      requestStickyLayout();
      window.addEventListener("resize", requestStickyLayout);
      window.addEventListener("orientationchange", requestStickyLayout);
      window.addEventListener("load", requestStickyLayout);

      if ("ResizeObserver" in window) {
        resizeObserver = new ResizeObserver(function() {
          requestStickyLayout();
        });

        resizeObserver.observe(section);
        items.forEach(function(item) {
          var bubble = item.querySelector(".about-news__bubble");
          resizeObserver.observe(bubble || item);
        });
      }

      if (reducedMotionQuery) {
        var handleMotionChange = function() {
          if (prefersReducedMotion()) {
            items.forEach(markVisible);
          }

          requestStickyLayout();
        };

        if (typeof reducedMotionQuery.addEventListener === "function") {
          reducedMotionQuery.addEventListener("change", handleMotionChange);
        } else if (typeof reducedMotionQuery.addListener === "function") {
          reducedMotionQuery.addListener(handleMotionChange);
        }
      }
    });
  };

  initPlogFilters();
  initAboutNews();

});
