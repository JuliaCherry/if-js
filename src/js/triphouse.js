const data = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa  Cruz de Tenerife',
    country: 'Spain',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
  },
];

const body = document.querySelector('body');

const sectionHomes = document.createElement('section');
sectionHomes.classList.add('homes');
body.prepend(sectionHomes);

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
