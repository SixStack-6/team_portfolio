// Form fields and message containers.
const contactForm = document.getElementById('contactForm');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const formStatus = document.getElementById('formStatus');

// Basic email format check.
function isEmailValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Clear any previous validation messages.
function clearErrors() {
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  formStatus.textContent = '';
}

// Validate required fields and show inline errors.
function checkForm() {
  let valid = true;
  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  clearErrors();

  if (!name) {
    nameError.textContent = 'Please enter your name.';
    valid = false;
  }
  if (!email || !isEmailValid(email)) {
    emailError.textContent = 'Please enter a valid email.';
    valid = false;
  }
  if (!message) {
    messageError.textContent = 'Please type a message.';
    valid = false;
  }

  return valid;
}

// Handle form submission locally without a backend.
contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (checkForm()) {
    formStatus.textContent = 'Message sent successfully. Thank you!';
    contactForm.reset();
  } else {
    formStatus.textContent = 'Please fix the errors and try again.';
  }
});
