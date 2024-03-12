const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');
const input = form.querySelector('input');

const localStorageKey = 'feedback-form-state';

form.addEventListener('input', evt => {
  const text = textarea.value.trim();
  const email = input.value.trim();
  const data = JSON.stringify({ text, email });
  localStorage.setItem(localStorageKey, data);
});

const jsn = localStorage.getItem(localStorageKey);
const data = JSON.parse(jsn);
if (data !== null) {
  textarea.value = data.text;
  input.value = data.email;
}

form.addEventListener('submit', evt => {
  evt.preventDefault();
  const text = textarea.value.trim();
  const email = input.value.trim();
  if ((text.length > 0) & (email.length > 0)) {
    console.log(data);
    localStorage.removeItem(localStorageKey);
    form.reset();
  } else {
    console.log('please fill all field');
  }
});
