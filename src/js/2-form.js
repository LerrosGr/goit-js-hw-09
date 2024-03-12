const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');
const input = form.querySelector('input');

const localStorageKey = 'feedback-form-state';

form.addEventListener('input', evt => {
  const text = evt.currentTarget.elements.message.value.trim();
  const email = evt.currentTarget.elements.email.value.trim();
  const objData = JSON.stringify({ text, email });
  localStorage.setItem(localStorageKey, objData);
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  if ((textarea.value.length !== 0) & (input.value.length !== 0)) {
    const jsn = localStorage.getItem(localStorageKey);
    const data = JSON.parse(jsn);
    console.log(data);
    localStorage.removeItem(localStorageKey);
    form.reset();
  } else {
    alert('Please, fill all fields!');
  }
});

const jsn = localStorage.getItem(localStorageKey) ?? '';
try {
  const data = JSON.parse(jsn);
  textarea.value = data.text;
  input.value = data.email;
} catch {
  console.log('No saved data');
}
