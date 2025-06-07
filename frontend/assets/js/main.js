// Function to fetch and load partial HTML files into the page
async function loadPartial(id, url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to load ${url}`);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;

    // If header is loaded, setup hamburger logic
    if (id === 'header') setupHamburger();
  } catch (error) {
    console.error(error);
  }
}

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

// Setup hamburger menu logic after header is loaded
function setupHamburger() {
  const hamburger = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('translate-x-0');

    if (isOpen) {
      mobileMenu.classList.remove('translate-x-0');
      mobileMenu.classList.add('translate-x-full');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
    } else {
      mobileMenu.classList.remove('translate-x-full');
      mobileMenu.classList.add('translate-x-0');
      hamburger.setAttribute('aria-expanded', 'true');
      mobileMenu.setAttribute('aria-hidden', 'false');
    }
  });

  document.addEventListener('click', (event) => {
    const clickedInsideMenu = mobileMenu.contains(event.target);
    const clickedHamburger = hamburger.contains(event.target);
    const isOpen = mobileMenu.classList.contains('translate-x-0');

    if (!clickedInsideMenu && !clickedHamburger && isOpen) {
      mobileMenu.classList.remove('translate-x-0');
      mobileMenu.classList.add('translate-x-full');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
    }
  });
}