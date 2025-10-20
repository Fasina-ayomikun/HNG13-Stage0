const form = document.querySelector('[data-testid="test-contact-form"]');
const errors = document.querySelectorAll(".error");
const name = document.querySelector('[data-testid="test-contact-name"]');
const email = document.querySelector('[data-testid="test-contact-email"]');
const message = document.querySelector('[data-testid="test-contact-message"]');
const subject = document.querySelector('[data-testid="test-contact-subject"]');
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  errors.forEach((element) => {
    console.log(element);
    if (element) element.textContent = "";
  });
  console.log(name, email, subject, message, errors);

  if (name.value.trim() === "") {
    showError("name", "Full name is required");
    valid = false;
  }

  if (!/^[^@]+@[^@]+\.[^@]+$/.test(email.value)) {
    showError("email", "Please enter a valid email address");
    valid = false;
  }
  if (subject.value.trim() === "") {
    showError("subject", "Subject is required");
    valid = false;
  }

  if (message.value.trim().length < 10) {
    showError("message", "Message must be at least 10 characters");
    valid = false;
  }

  if (valid) showSuccess();
});

function showError(field, message) {
  const errorElement = document.querySelector(
    `[data-testid="test-contact-error-${field}"]`
  );
  errorElement.textContent = message;
}
function showSuccess() {
  const successElement = document.querySelector(
    '[data-testid="test-contact-success"]'
  );
  successElement.hidden = false;
  name.value = "";
  email.value = "";
  subject.value = "";
  message.value = "";
  setTimeout(() => {
    successElement.hidden = true;
  }, 3000);
}
