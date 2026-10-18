// Discourage casual saving of Nature and Books photos (no faces; watermarked).
// Publicly displayed images cannot be made fully download-proof.
(function () {
  var PROTECTED = /assets\/photos\/(nature|books)\/|assets\/photos\/(forest|book-explanation)\.webp/;
  function isProtected(el) {
    if (!(el instanceof Element)) return false;
    var img = el.closest('img') || (el.closest('a, .tile-photo, .photo-card, figure') || el).querySelector && (el.closest('a, .tile-photo, .photo-card, figure') || el).querySelector('img');
    if (img && PROTECTED.test(img.currentSrc || img.src)) return true;
    var bg = getComputedStyle(el).backgroundImage || '';
    return PROTECTED.test(bg);
  }
  document.querySelectorAll('img').forEach(function (img) {
    if (PROTECTED.test(img.getAttribute('src') || '')) img.setAttribute('draggable', 'false');
  });
  document.addEventListener('contextmenu', function (e) { if (isProtected(e.target)) e.preventDefault(); });
  document.addEventListener('dragstart', function (e) { if (isProtected(e.target)) e.preventDefault(); });
})();
