fetch('https://if-student-api.onrender.com/api/hotels/popular')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);

    const body = document.querySelector('body');
    const sectionHomes = document.createElement('section');
    sectionHomes.classList.add('homes');
    body.append(sectionHomes);

    const container = document.createElement('div');
    container.classList.add('container');
    sectionHomes.prepend(container);

    const homesContainerItem = document.createElement('div');
    homesContainerItem.classList.add('homes__container-item');
    container.prepend(homesContainerItem);

    const homesH2 = document.createElement('h2');
    const nodeH1 = document.createTextNode('Homes guests loves');
    homesH2.prepend(nodeH1);
    homesContainerItem.prepend(homesH2);
    homesH2.classList.add('homes__subtitle');

    const homesSliderDiv = document.createElement('div');
    homesSliderDiv.classList.add('homes__slider');
    homesContainerItem.after(homesSliderDiv);

    data.slice(0, 4).forEach((item) => {
      const div = document.createElement('div');
      homesSliderDiv.prepend(div);

      const a = document.createElement('a');
      a.setAttribute('src', '#');
      div.prepend(a);

      const img = document.createElement('img');
      img.setAttribute('src', `${item.imageUrl}`, 'alt', `${item.name}`);
      a.prepend(img);

      const pHotel = document.createElement('p');
      pHotel.innerHTML = `${item.name}`;
      a.append(pHotel);

      const pCityCountry = document.createElement('p');
      pCityCountry.innerHTML = `${item.city}` + ', ' + `${item.country}`;
      pHotel.after(pCityCountry);
    });
  })

  .catch((err) => {
    console.log(err.message);
  });
