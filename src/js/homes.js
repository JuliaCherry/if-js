const hotelUrl = 'https://if-student-api.onrender.com/api/hotels/popular';

const guestData = (data) => {
  document.getElementById('homes__container-content').innerHTML = data
    .map(
      (hotel) =>
        `<div>
    <img class="homes__container-img"  src="${hotel.imageUrl}" id="${hotel.id}" alt="hotel-image">
    <div class="homes__container-text">
    <p class="homes__container-name">${hotel.name}</p>
    <p class="homes__container-country">${hotel.city}, ${hotel.country}</p>
    </div>
     </div>`,
    )
    .join('');
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
