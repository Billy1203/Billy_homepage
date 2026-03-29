(function() {
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  var icon = document.getElementById('theme-icon');
  var toggleLink = toggle ? toggle.querySelector('a') : null;
  var mediaQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  var preloadedImages = {};

  function normalizeTheme(theme) {
    return theme === 'dark' || theme === 'light' ? theme : 'system';
  }

  function getStoredTheme() {
    try {
      return normalizeTheme(localStorage.getItem('theme'));
    } catch (error) {
      return 'system';
    }
  }

  function setStoredTheme(theme) {
    var nextTheme = normalizeTheme(theme);
    try {
      if (nextTheme === 'system') {
        localStorage.removeItem('theme');
        return;
      }
      localStorage.setItem('theme', nextTheme);
    } catch (error) {
      return;
    }
  }

  function resolveTheme(preferredTheme) {
    var nextTheme = normalizeTheme(preferredTheme);
    if (nextTheme === 'dark' || nextTheme === 'light') {
      return nextTheme;
    }

    return mediaQuery && mediaQuery.matches ? 'dark' : 'light';
  }

  function getEffectiveTheme(themePreference) {
    return resolveTheme(themePreference || getStoredTheme());
  }

  function getNextTheme(themePreference) {
    var currentPreference = normalizeTheme(themePreference);

    if (currentPreference === 'system') {
      return getEffectiveTheme('system') === 'dark' ? 'light' : 'dark';
    }

    return currentPreference === 'dark' ? 'light' : 'dark';
  }

  function updateToggleMetadata(themePreference) {
    if (!toggleLink) {
      return;
    }

    var currentTheme = normalizeTheme(themePreference);
    var nextTheme = getNextTheme(currentTheme);
    var effectiveTheme = getEffectiveTheme(currentTheme);
    var themeLabel = currentTheme === 'system'
      ? ('System (' + effectiveTheme + ')')
      : currentTheme.charAt(0).toUpperCase() + currentTheme.slice(1);
    var nextLabel = 'switch to ' + nextTheme + ' mode';

    toggleLink.setAttribute('title', 'Theme: ' + themeLabel + '; click to ' + nextLabel);
    toggleLink.setAttribute('aria-label', 'Theme: ' + themeLabel + '; click to ' + nextLabel);
    toggle.setAttribute('data-theme-mode', currentTheme);
  }

  function preloadThemeImages() {
    var themeImages = document.querySelectorAll('.js-theme-image');
    themeImages.forEach(function(image) {
      var lightSrc = image.getAttribute('data-light-src');
      var darkSrc = image.getAttribute('data-dark-src');
      [lightSrc, darkSrc].forEach(function(src) {
        if (!src || preloadedImages[src]) {
          return;
        }
        var preloadImage = new Image();
        preloadImage.decoding = 'async';
        preloadImage.src = src;
        preloadedImages[src] = preloadImage;
      });
    });
  }

  function applyTheme(theme, themePreference) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
    root.style.colorScheme = theme;

    if (!icon) {
      updateToggleMetadata(themePreference);
      return;
    }

    icon.classList.remove('fa-sun', 'fa-moon');
    icon.classList.add(theme === 'dark' ? 'fa-moon' : 'fa-sun');
    updateToggleMetadata(themePreference);

    var themeImages = document.querySelectorAll('.js-theme-image');
    themeImages.forEach(function(image) {
      var lightSrc = image.getAttribute('data-light-src');
      var darkSrc = image.getAttribute('data-dark-src');
      if (!lightSrc || !darkSrc) {
        return;
      }
      image.setAttribute('src', theme === 'dark' ? darkSrc : lightSrc);
    });
  }

  function syncTheme(themePreference) {
    var nextPreference = normalizeTheme(themePreference || getStoredTheme());
    applyTheme(resolveTheme(nextPreference), nextPreference);
  }

  preloadThemeImages();
  syncTheme();

  function handleSystemThemeChange() {
    if (getStoredTheme() === 'system') {
      syncTheme('system');
    }
  }

  if (mediaQuery && mediaQuery.addEventListener) {
    mediaQuery.addEventListener('change', handleSystemThemeChange);
  } else if (mediaQuery && mediaQuery.addListener) {
    mediaQuery.addListener(handleSystemThemeChange);
  }

  if (!toggleLink) {
    return;
  }

  toggleLink.addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    var nextTheme = getNextTheme(getStoredTheme());
    setStoredTheme(nextTheme);
    syncTheme(nextTheme);
  });
})();
