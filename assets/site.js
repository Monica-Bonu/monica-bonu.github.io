// Shared site script - mobile menu toggle
(function () {
  var header = document.querySelector('header');
  if (!header) return;
  var menu = header.querySelector('.site-nav, .links, .nav');
  if (!menu) return;
  if (!menu.id) menu.id = 'site-menu';
  var button = document.createElement('button');
  button.type = 'button';
  button.className = 'menu-toggle';
  button.setAttribute('aria-controls', menu.id);
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-label', 'Open menu');
  button.innerHTML = '<span class="menu-toggle-bars" aria-hidden="true"></span>';
  menu.parentNode.insertBefore(button, menu);
  function setOpen(open) {
    header.classList.toggle('menu-open', open);
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  button.addEventListener('click', function () { setOpen(!header.classList.contains('menu-open')); });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && header.classList.contains('menu-open')) { setOpen(false); button.focus(); }
  });
  document.addEventListener('click', function (e) { if (!header.contains(e.target)) setOpen(false); });
})();
