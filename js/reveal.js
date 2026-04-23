(function () {
  'use strict';

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' });

  // Single .reveal elements
  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });

  // Stagger wrappers — observe each child individually
  document.querySelectorAll('.reveal-stagger').forEach(function (wrapper) {
    Array.from(wrapper.children).forEach(function (child) {
      observer.observe(child);
    });
  });

}());
