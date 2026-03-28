(function() {
  var buttons = document.querySelectorAll('.js-copy-link');

  if (!buttons.length) {
    return;
  }

  function fallbackCopy(text) {
    var helper = document.createElement('textarea');
    helper.value = text;
    helper.setAttribute('readonly', '');
    helper.style.position = 'absolute';
    helper.style.left = '-9999px';
    document.body.appendChild(helper);
    helper.select();
    document.execCommand('copy');
    document.body.removeChild(helper);
  }

  function copyCurrentUrl() {
    var url = window.location.href;

    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(url);
    }

    return new Promise(function(resolve, reject) {
      try {
        fallbackCopy(url);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  buttons.forEach(function(button) {
    var container = button.closest('.page__share--copy');
    var status = container && container.querySelector('.page__share-status');
    var label = button.querySelector('span');
    var resetTimer = null;

    button.addEventListener('click', function() {
      copyCurrentUrl().then(function() {
        if (label) {
          label.textContent = 'Copied';
        }
        if (status) {
          status.textContent = 'Link copied to clipboard.';
        }

        window.clearTimeout(resetTimer);
        resetTimer = window.setTimeout(function() {
          if (label) {
            label.textContent = 'Copy Page Link';
          }
          if (status) {
            status.textContent = '';
          }
        }, 2200);
      }).catch(function() {
        if (status) {
          status.textContent = 'Copy failed. Please copy the URL manually.';
        }
      });
    });
  });
})();
