(function() {
  var root = document.documentElement;
  var controls = document.querySelectorAll('.font-preview-panel__option');
  var validPresets = ['default', 'system-sans', 'editorial', 'scholar', 'studio'];

  function getStoredPreset() {
    try {
      return localStorage.getItem('font-preset');
    } catch (error) {
      return null;
    }
  }

  function setStoredPreset(preset) {
    try {
      if (preset === 'default') {
        localStorage.removeItem('font-preset');
        return;
      }
      localStorage.setItem('font-preset', preset);
    } catch (error) {
      return;
    }
  }

  function resolvePreset(preset) {
    return validPresets.indexOf(preset) > -1 ? preset : 'default';
  }

  function applyPreset(preset) {
    var nextPreset = resolvePreset(preset || getStoredPreset());
    if (nextPreset === 'default') {
      root.removeAttribute('data-font-preset');
    } else {
      root.setAttribute('data-font-preset', nextPreset);
    }

    controls.forEach(function(control) {
      var isActive = control.getAttribute('data-font-preset') === nextPreset;
      control.classList.toggle('is-active', isActive);
      control.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  applyPreset();

  if (!controls.length) {
    return;
  }

  controls.forEach(function(control) {
    control.addEventListener('click', function() {
      var preset = resolvePreset(control.getAttribute('data-font-preset'));
      setStoredPreset(preset);
      applyPreset(preset);
    });
  });
})();
