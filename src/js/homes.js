fetch('https://if-student-api.onrender.com/api/hotels/popular')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }
    return response.json();
  })

  .then((data) => {
    console.log(data);

    const sliderItems = document.createElement('div');
    sliderItems.className = 'homes__container-content';

    const imageItems = data
      .slice(0, 4)
      .map(
        (hotel) =>
          `<div class='homes__container-img'>
    <img src=${hotel.imageUrl} alt="hotel-image" />
    <div class='homes__container-text'>
    <p class='homes__container-name'>${hotel.name}</p>
    <p class='homes__container-country'>${hotel.city}, ${hotel.country}</p>
    </div>
  </div>`,
      )
      .join('');

    sliderItems.innerHTML = imageItems;
    document.querySelector('.homes__container-item').appendChild(sliderItems);
  })

  .catch((err) => {
    console.log(err.message);
  });
