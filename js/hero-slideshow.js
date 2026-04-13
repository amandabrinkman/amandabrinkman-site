(function () {
  'use strict';

  var slides   = document.querySelectorAll('.slide-bg');
  var dots     = document.querySelectorAll('.slide-dot');
  var current  = 0;
  var INTERVAL = 5000; // ms per slide

  if (!slides.length) return;

  // Activate first slide
  slides[0].classList.add('active');

  function goTo(idx) {
    slides[current].classList.remove('active');
    if (dots[current]) dots[current].classList.remove('active');
    current = ((idx % slides.length) + slides.length) % slides.length;
    slides[current].classList.add('active');
    if (dots[current]) dots[current].classList.add('active');
  }

  var timer = setInterval(function () { goTo(current + 1); }, INTERVAL);

  // Click on dot to jump to slide, reset timer
  dots.forEach(function (dot, i) {
    dot.addEventListener('click', function () {
      clearInterval(timer);
      goTo(i);
      timer = setInterval(function () { goTo(current + 1); }, INTERVAL);
    });
  });

}());
