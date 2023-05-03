const formEl = document.getElementById('form');
const addFileButton = document.getElementById('add-file');
const fileEl = document.getElementById('file');
const url = 'https://if-student-api.onrender.com/api/file';

addFileButton.addEventListener('click', () => {
  fileEl.click();
});

formEl.addEventListener('submit', async (event) => {
  event.preventDefault();

  const result = await fetch(url, {
    method: 'POST',
    body: new FormData(formEl),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${result.status}`);
      }
      return response.json();
    })

    .then((result) => console.log(result))
    .catch((error) => console.log(error.message));
});

const imgEl = document.createElement('img');
imgEl.setAttribute('src', '');
imgEl.setAttribute('alt', '');

document.body.appendChild(imgEl);

fileEl.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.addEventListener('load', (event) => {
    imgEl.setAttribute('src', event.target.result);
    imgEl.setAttribute('alt', file.name);
  });

  reader.readAsDataURL(file);
});
