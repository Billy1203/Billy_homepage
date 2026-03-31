(function() {
  var root = document.documentElement;
  var storageKey = 'site-color-preset';
  var validPalettes = ['paper', 'celadon', 'lotus', 'inkstone', 'cinnabar'];

  function normalizePalette(palette) {
    return validPalettes.indexOf(palette) > -1 ? palette : 'paper';
  }

  function getStoredPalette() {
    try {
      return normalizePalette(localStorage.getItem(storageKey));
    } catch (error) {
      return normalizePalette(root.getAttribute('data-color-preset'));
    }
  }

  function setStoredPalette(palette) {
    var nextPalette = normalizePalette(palette);

    try {
      if (nextPalette === 'paper') {
        localStorage.removeItem(storageKey);
        return;
      }

      localStorage.setItem(storageKey, nextPalette);
    } catch (error) {
      return;
    }
  }

  function applyPalette(palette) {
    var nextPalette = normalizePalette(palette || getStoredPalette());

    if (nextPalette === 'paper') {
      root.removeAttribute('data-color-preset');
    } else {
      root.setAttribute('data-color-preset', nextPalette);
    }

    return nextPalette;
  }

  function hashString(value) {
    var hash = 0;

    for (var index = 0; index < value.length; index += 1) {
      hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
    }

    return hash;
  }

  function getCurrentPalette() {
    return normalizePalette(root.getAttribute('data-color-preset') || getStoredPalette());
  }

  function getPaletteForAvatar(source, avatarSources) {
    if (!source) {
      return getCurrentPalette();
    }

    if (Array.isArray(avatarSources) && avatarSources.length) {
      var avatarIndex = avatarSources.indexOf(source);

      if (avatarIndex > -1) {
        return validPalettes[avatarIndex % validPalettes.length];
      }
    }

    return validPalettes[hashString(source) % validPalettes.length];
  }

  function syncFromAvatar(source, avatarSources) {
    var nextPalette = getPaletteForAvatar(source, avatarSources);
    setStoredPalette(nextPalette);
    return applyPalette(nextPalette);
  }

  function randomize(excludedPalette) {
    var currentPalette = normalizePalette(excludedPalette || getCurrentPalette());
    var availablePalettes = validPalettes.filter(function(palette) {
      return palette !== currentPalette;
    });
    var nextPalette = availablePalettes[Math.floor(Math.random() * availablePalettes.length)] || 'paper';

    setStoredPalette(nextPalette);
    return applyPalette(nextPalette);
  }

  applyPalette();

  window.SitePalette = {
    apply: function(palette) {
      setStoredPalette(palette);
      return applyPalette(palette);
    },
    getAvailablePalettes: function() {
      return validPalettes.slice();
    },
    getCurrentPalette: getCurrentPalette,
    getPaletteForAvatar: getPaletteForAvatar,
    randomize: randomize,
    syncFromAvatar: syncFromAvatar
  };
})();
