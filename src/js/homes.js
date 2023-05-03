const hotelUrl = 'https://if-student-api.onrender.com/api/hotels/popular';
const divContent = document.getElementById('homes__container-content');

const guestData = (data) => {
  divContent.innerHTML = data
    .map(
      ({id, name, city, country, imageUrl }) =>
        `<div>
    <img class="homes__container-img"  src="${imageUrl}" id="${id}" alt="hotel-image">
    <div class="homes__container-text">
    <p class="homes__container-name">${name}</p>
    <p class="homes__container-country">${city}, ${country}</p>
    </div>
     </div>`,
    )
    .join('');

  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < data.length - 1; i++) {
      if (data[i].name.length > data[i + 1].name.length) {
        [data[i], data[i + 1]] = [data[i + 1], data[i]];
        isSorted = false;
      }
    }
  }
};

if (sessionStorage.getItem('favoriteHotels')) {
  const data = JSON.parse(sessionStorage.getItem('favoriteHotels'));
  guestData(data);
} else {
  fetch(hotelUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      sessionStorage.setItem('favoriteHotels', JSON.stringify(data));
      guestData(data);
    })
    .catch((err) => {
      console.log(err.message);
    });
}
