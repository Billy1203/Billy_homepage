(function() {
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  var icon = document.getElementById('theme-icon');
  var toggleLink = toggle ? toggle.querySelector('a') : null;
  var mediaQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  var preloadedImages = {};

  function getCurrentLanguage() {
    return root.getAttribute('data-language') === 'zh' ? 'zh' : 'en';
  }

  function getLocalizedThemeName(theme, language) {
    var languageCode = language === 'zh' ? 'zh' : 'en';
    var names = {
      en: {
        light: 'light',
        dark: 'dark',
        system: 'System'
      },
      zh: {
        light: '浅色',
        dark: '深色',
        system: '跟随系统'
      }
    };

    return names[languageCode][theme];
  }

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
    var language = getCurrentLanguage();
    var themeLabel = currentTheme === 'system'
      ? (
        language === 'zh'
          ? getLocalizedThemeName('system', language) + '（当前' + getLocalizedThemeName(effectiveTheme, language) + '）'
          : getLocalizedThemeName('system', language) + ' (' + getLocalizedThemeName(effectiveTheme, language) + ')'
      )
      : getLocalizedThemeName(currentTheme, language);
    var title = language === 'zh'
      ? '主题：' + themeLabel + '；点击切换到' + getLocalizedThemeName(nextTheme, language) + '模式'
      : 'Theme: ' + themeLabel + '; click to switch to ' + getLocalizedThemeName(nextTheme, language) + ' mode';

    toggleLink.setAttribute('title', title);
    toggleLink.setAttribute('aria-label', title);
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

  window.addEventListener('site-language-change', function() {
    updateToggleMetadata(getStoredTheme());
  });

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
