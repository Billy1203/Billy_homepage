(function() {
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  var icon = document.getElementById('theme-icon');
  var mediaQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  function getStoredTheme() {
    try {
      return localStorage.getItem('theme');
    } catch (error) {
      return null;
    }
  }

  function setStoredTheme(theme) {
    try {
      localStorage.setItem('theme', theme);
    } catch (error) {
      return;
    }
  }

  function resolveTheme(preferredTheme) {
    if (preferredTheme === 'dark' || preferredTheme === 'light') {
      return preferredTheme;
    }

    return mediaQuery && mediaQuery.matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }

    if (!icon) {
      return;
    }

    icon.classList.remove('fa-sun', 'fa-moon');
    icon.classList.add(theme === 'dark' ? 'fa-moon' : 'fa-sun');

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

  function syncTheme(theme) {
    applyTheme(resolveTheme(theme || getStoredTheme()));
  }

  syncTheme();

  function handleSystemThemeChange() {
    if (!getStoredTheme()) {
      syncTheme();
    }
  }

  if (mediaQuery && mediaQuery.addEventListener) {
    mediaQuery.addEventListener('change', handleSystemThemeChange);
  } else if (mediaQuery && mediaQuery.addListener) {
    mediaQuery.addListener(handleSystemThemeChange);
  }

  if (!toggle) {
    return;
  }

  toggle.addEventListener('click', function(event) {
    event.preventDefault();
    var nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setStoredTheme(nextTheme);
    applyTheme(nextTheme);
  });
})();
