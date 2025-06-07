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
  loadPartial('header', 'partials/header/header.html');
  loadPartial('section-featured', 'partials/section-featured.html');
  loadPartial('section-1', 'partials/section-1.html');
  loadPartial('section-2', 'partials/section-2.html');
  loadPartial('section-3', 'partials/section-3.html');
  loadPartial('section-4', 'partials/section-4.html');
  loadPartial('section-cta', 'partials/section-cta.html');
  loadPartial('footer', 'partials/footer.html');
});


document.addEventListener("DOMContentLoaded", () => {
  const loadPartial = (id, path) => {
    fetch(path)
      .then((res) => res.text())
      .then((data) => {
        document.getElementById(id).innerHTML = data;
      });
  };

  loadPartial("nav-menu", "partials/header/nav-menu.html");
  loadPartial("utility-menu", "partials/header/utility-menu.html");
  loadPartial("user-menu", "partials/header/user-menu.html");
  loadPartial("mobile-nav-menu", "partials/header/nav-menu.html");
  loadPartial("mobile-user-menu", "partials/header/mobile-menu.html");
});
