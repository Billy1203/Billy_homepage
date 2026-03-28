(function() {
  var avatar = document.querySelector('.js-random-avatar');
  if (!avatar) {
    return;
  }

  var avatarList = (avatar.getAttribute('data-avatars') || '')
    .split('|')
    .filter(Boolean);

  if (avatarList.length < 2) {
    return;
  }

  function chooseNextAvatar() {
    var current = avatar.getAttribute('src');
    var candidates = avatarList.filter(function(item) {
      return item !== current;
    });
    var pool = candidates.length ? candidates : avatarList;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  function applyRandomAvatar() {
    avatar.setAttribute('src', chooseNextAvatar());
  }

  applyRandomAvatar();

  avatar.addEventListener('click', applyRandomAvatar);
})();
