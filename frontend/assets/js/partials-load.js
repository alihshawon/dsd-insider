// Load all partials on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  loadPartial('header', 'partials/header.html');
  loadPartial('section-featured', 'partials/section-featured.html');
  loadPartial('section-1', 'partials/section-1.html');
  loadPartial('section-2', 'partials/section-2.html');
  loadPartial('section-3', 'partials/section-3.html');
  loadPartial('section-4', 'partials/section-4.html');
  loadPartial('section-cta', 'partials/section-cta.html');
  loadPartial('footer', 'partials/footer.html');
});
