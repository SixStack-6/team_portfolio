// Mobile menu button and navigation container.
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
// Elements that reveal as the user scrolls.
const revealItems = document.querySelectorAll('.hero, .section, .about-card, .member-card, .project-card, .contact-card, .contact-form, .site-footer');

// Toggle the mobile navigation.
menuToggle?.addEventListener('click', () => {
  mainNav?.classList.toggle('active');
});

// Add the visible class once items enter the viewport.
function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealItems.forEach((item) => {
    const topPosition = item.getBoundingClientRect().top;
    if (topPosition < windowHeight - 80) {
      item.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
