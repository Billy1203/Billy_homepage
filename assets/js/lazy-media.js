(function() {
  document.addEventListener('DOMContentLoaded', function() {
    var embeds = document.querySelectorAll('.js-lazy-embed');

    embeds.forEach(function(embed) {
      var trigger = embed.querySelector('.lazy-embed__trigger');
      var frame = embed.querySelector('.lazy-embed__frame');

      if (!trigger || !frame) {
        return;
      }

      trigger.addEventListener('click', function() {
        var src = frame.getAttribute('data-src');

        if (src && !frame.getAttribute('src')) {
          frame.setAttribute('src', src);
        }

        frame.classList.add('is-loaded');
        trigger.setAttribute('disabled', 'disabled');
        trigger.textContent = 'PDF Preview Loaded';
      }, { once: true });
    });
  });
})();
