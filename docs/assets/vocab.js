document.addEventListener('click', function (e) {
  var btn = e.target.closest('.vocab-controls button');
  if (!btn) return;
  var block = btn.closest('.vocab-block');
  if (!block) return;
  block.setAttribute('data-mode', btn.getAttribute('data-mode'));
  block.querySelectorAll('.vocab-controls button').forEach(function (b) {
    b.classList.toggle('active', b === btn);
  });
});
