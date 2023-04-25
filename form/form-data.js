const formEl = document.getElementById('form');
const imageButton = document.getElementById('image-button');
const fileEl = document.getElementById('file');

imageButton.addEventListener('click', () => {
  fileEl.click();
});

fileEl.addEventListener('change', (event) => {
  const file = event.target.files[0];
  console.log(file);
});

formEl.addEventListener('submit', async (event) => {
  event.preventDefault();

  const fetchOptions = {
    method: 'POST',
    body: new FormData(formEl),
  };

  const result = await fetch(
    'https://if-student-api.onrender.com/api/file',
    fetchOptions,
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((result) => result)
    .catch((error) => console.log(error.message));

  console.log(result);
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
