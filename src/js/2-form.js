const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

const saved = localStorage.getItem('feedback-form-state');

if (saved) {
  const parsed = JSON.parse(saved);
  formData.email = parsed.email;
  formData.message = parsed.message;
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', userInput);
form.addEventListener('submit', userSubmit);

function userInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function userSubmit(event) {
  event.preventDefault();

  const email = formData.email.trim();
  const message = formData.message.trim();

  if (email === '' || message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log({
    email,
    message,
  });

  localStorage.removeItem('feedback-form-state');

  formData.email = '';
  formData.message = '';

  form.reset();
}
