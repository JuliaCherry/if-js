const formEl = document.getElementById('form');

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

const divPicture = document.getElementById('divPicture');
const file = document.getElementById('fileSecond');

const image = document.createElement('img');
image.setAttribute('src', '');
image.setAttribute('alt', '');

divPicture.addEventListener('click', () => {
  file.click();
});

file.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.addEventListener('load', (event) => {
    image.setAttribute('src', event.target.result);
    image.setAttribute('alt', file.name);
    divPicture.innerHTML = '';
    divPicture.appendChild(image);
  });
  reader.readAsDataURL(file);
});
