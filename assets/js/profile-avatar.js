(function() {
  var avatars = Array.prototype.slice.call(document.querySelectorAll('.js-random-avatar'));
  if (!avatars.length) {
    return;
  }

  var avatarList = (avatars[0].getAttribute('data-avatars') || '')
    .split('|')
    .filter(Boolean);

  if (avatarList.length < 2) {
    return;
  }

  var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isTransitioning = false;

  function updateAvatarMetadata() {
    avatars.forEach(function(avatar) {
      avatar.setAttribute('role', 'button');
      avatar.setAttribute('tabindex', '0');
      avatar.setAttribute('draggable', 'false');
      avatar.setAttribute('aria-label', 'Shuffle portrait and palette');
      avatar.setAttribute('title', 'Shuffle portrait and palette');
    });
  }

  function hashList(values) {
    return values.join('|').replace(/[^a-z0-9]+/gi, '-').toLowerCase();
  }

  function getStorageKey() {
    return 'profile-avatar-sequence:' + hashList(avatarList);
  }

  function readState() {
    try {
      var storedValue = localStorage.getItem(getStorageKey());
      return storedValue ? JSON.parse(storedValue) : null;
    } catch (error) {
      return null;
    }
  }

  function writeState(state) {
    try {
      localStorage.setItem(getStorageKey(), JSON.stringify(state));
    } catch (error) {
      return;
    }
  }

  function shuffle(values) {
    var nextValues = values.slice();
    for (var index = nextValues.length - 1; index > 0; index -= 1) {
      var swapIndex = Math.floor(Math.random() * (index + 1));
      var current = nextValues[index];
      nextValues[index] = nextValues[swapIndex];
      nextValues[swapIndex] = current;
    }
    return nextValues;
  }

  function buildSequence(previousAvatar) {
    var sequence = shuffle(avatarList);

    if (previousAvatar && sequence.length > 1 && sequence[0] === previousAvatar) {
      var swapIndex = 1 + Math.floor(Math.random() * (sequence.length - 1));
      var current = sequence[0];
      sequence[0] = sequence[swapIndex];
      sequence[swapIndex] = current;
    }

    return sequence;
  }

  function normalizeState(state) {
    var lastShown = state && avatarList.indexOf(state.lastShown) > -1 ? state.lastShown : null;
    var sequence = state && Array.isArray(state.sequence) ? state.sequence.filter(function(item) {
      return avatarList.indexOf(item) > -1;
    }) : [];
    var nextIndex = state && typeof state.nextIndex === 'number' ? state.nextIndex : 0;

    if (sequence.length !== avatarList.length) {
      sequence = buildSequence(lastShown);
      nextIndex = 0;
    }

    if (nextIndex >= sequence.length) {
      sequence = buildSequence(lastShown);
      nextIndex = 0;
    }

    return {
      lastShown: lastShown,
      nextIndex: nextIndex,
      sequence: sequence
    };
  }

  function getNextAvatar() {
    var state = normalizeState(readState());
    var nextAvatar = state.sequence[state.nextIndex];

    state.lastShown = nextAvatar;
    state.nextIndex += 1;

    if (state.nextIndex >= state.sequence.length) {
      state.sequence = buildSequence(state.lastShown);
      state.nextIndex = 0;
    }

    writeState(state);
    return nextAvatar;
  }

  function applyAvatar(source) {
    avatars.forEach(function(avatar) {
      avatar.setAttribute('src', source);
    });

    if (window.SitePalette && typeof window.SitePalette.syncFromAvatar === 'function') {
      window.SitePalette.syncFromAvatar(source, avatarList);
    }
  }

  function preloadAvatar(source, callback) {
    var image = new Image();

    image.onload = function() {
      callback(source);
    };

    image.onerror = function() {
      callback(source);
    };

    image.src = source;
  }

  function applyNextAvatar(options) {
    var nextAvatar = getNextAvatar();
    var shouldAnimate = !(options && options.animate === false) && !prefersReducedMotion;

    if (!shouldAnimate) {
      applyAvatar(nextAvatar);
      return;
    }

    if (isTransitioning) {
      return;
    }

    isTransitioning = true;
    preloadAvatar(nextAvatar, function(readyAvatar) {
      avatars.forEach(function(avatar) {
        avatar.classList.add('is-swapping');
      });

      window.setTimeout(function() {
        applyAvatar(readyAvatar);

        window.requestAnimationFrame(function() {
          avatars.forEach(function(avatar) {
            avatar.classList.remove('is-swapping');
          });

          window.setTimeout(function() {
            isTransitioning = false;
          }, 180);
        });
      }, 90);
    });
  }

  applyNextAvatar({ animate: false });
  updateAvatarMetadata();

  window.addEventListener('site-language-change', function() {
    updateAvatarMetadata();
  });

  avatars.forEach(function(avatar) {
    avatar.addEventListener('click', function() {
      if (isTransitioning) {
        return;
      }
      applyNextAvatar();
    });

    avatar.addEventListener('keydown', function(event) {
      if (event.key !== 'Enter' && event.key !== ' ') {
        return;
      }
      event.preventDefault();
      if (isTransitioning) {
        return;
      }
      applyNextAvatar();
    });
  });
})();
