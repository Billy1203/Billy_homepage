(function() {
  var root = document.documentElement;
  var fontControls = document.querySelectorAll('[data-font-preset]');
  var densityControls = document.querySelectorAll('[data-density-preset]');
  var validPresets = ['default', 'comfortaa', 'georgia', 'verdana', 'system-sans', 'editorial', 'scholar', 'studio'];
  var validDensities = ['balanced', 'compact', 'relaxed', 'wide'];

  function getStoredValue(key) {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function setStoredValue(key, value, defaultValue) {
    try {
      if (value === defaultValue) {
        localStorage.removeItem(key);
        return;
      }
      localStorage.setItem(key, value);
    } catch (error) {
      return;
    }
  }

  function closeDisplayMenu(control) {
    var menu = control.closest('details');
    if (!menu) {
      return;
    }

    menu.removeAttribute('open');
  }

  function resolvePreset(preset) {
    return validPresets.indexOf(preset) > -1 ? preset : 'default';
  }

  function resolveDensity(density) {
    return validDensities.indexOf(density) > -1 ? density : 'balanced';
  }

  function applyPreset(preset) {
    var nextPreset = resolvePreset(preset || getStoredValue('font-preset'));
    if (nextPreset === 'default') {
      root.removeAttribute('data-font-preset');
    } else {
      root.setAttribute('data-font-preset', nextPreset);
    }

    fontControls.forEach(function(control) {
      var isActive = control.getAttribute('data-font-preset') === nextPreset;
      control.classList.toggle('is-active', isActive);
      control.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  function applyDensity(density) {
    var nextDensity = resolveDensity(density || getStoredValue('reading-density'));
    if (nextDensity === 'balanced') {
      root.removeAttribute('data-reading-density');
    } else {
      root.setAttribute('data-reading-density', nextDensity);
    }

    densityControls.forEach(function(control) {
      var isActive = control.getAttribute('data-density-preset') === nextDensity;
      control.classList.toggle('is-active', isActive);
      control.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  applyPreset();
  applyDensity();

  fontControls.forEach(function(control) {
    control.addEventListener('click', function() {
      var preset = resolvePreset(control.getAttribute('data-font-preset'));
      setStoredValue('font-preset', preset, 'default');
      applyPreset(preset);
      closeDisplayMenu(control);
    });
  });

  densityControls.forEach(function(control) {
    control.addEventListener('click', function() {
      var density = resolveDensity(control.getAttribute('data-density-preset'));
      setStoredValue('reading-density', density, 'balanced');
      applyDensity(density);
      closeDisplayMenu(control);
    });
  });
})();
