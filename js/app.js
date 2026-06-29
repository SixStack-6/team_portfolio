const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const revealItems = document.querySelectorAll('.hero, .section, .about-card, .member-card, .project-card, .contact-card, .contact-form, .site-footer');

menuToggle?.addEventListener('click', () => {
  mainNav?.classList.toggle('active');
});

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
