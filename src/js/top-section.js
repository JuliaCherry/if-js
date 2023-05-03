const optionsData = {
  adults: {
    min: 1,
    max: 30,
    value: 1,
  },
  children: {
    min: 0,
    max: 10,
    value: 0,
  },
  rooms: {
    min: 1,
    max: 30,
    value: 1,
  },
};

const optionsButton = document.getElementById('search-options');
const searchOptions = document.getElementById('search-options-container');
optionsButton.textContent = `${optionsData.adults.value} Adults - ${optionsData.children.value} Children - ${optionsData.rooms.value} Room`;

const createOptionsDiv = () => {
  const optionsDiv = document.createElement('div');
  optionsDiv.classList.add('options');
  optionsDiv.setAttribute('id', 'options');
  optionsDiv.innerHTML = `<div class="options-items" id="options-items"></div>
      <div class="options-text-div" id="options-text-div"></div>
      <div class="options-select-items" id="options-select-items"></div>`;
  searchOptions.appendChild(optionsDiv);
  createOptions();
  optionsButton.removeEventListener('click', createOptionsDiv);
};

optionsButton.addEventListener('click', createOptionsDiv);

const createOptions = () => {
  const optionItems = document.getElementById('options-items');
  Object.keys(optionsData).forEach((option) => {
    const optionItem = document.createElement('div');
    optionItem.classList.add('options-item');
    optionItem.innerHTML = `<div class="options-description-text">
      <span>${capitalFirstLetter(option)}</span>
    </div>
    <div class="options-item-buttons">
      <button class="options-button options-minus-button_js" id="options-minus-button-${option}" disabled type="button" >—</button>
      <span class="options-counter-number" id="options-counter-number-${option}">${
      optionsData[option].value
    }</span>
      <button class="options-button options-plus-button_js" id="options-plus-button-${option}" type="button">+</button>
    </div>
      `;
    optionItems.appendChild(optionItem);
    document
      .getElementById(`options-plus-button-${option}`)
      .addEventListener('click', () => plusOne(option));
    document
      .getElementById(`options-minus-button-${option}`)
      .addEventListener('click', () => minusOne(option));
  });
};

const capitalFirstLetter = (option) =>
  option[0].toUpperCase() + option.slice(1);

const plusOne = (option) => {
  const { min, max } = optionsData[option];

  if (optionsData[option].value < max) {
    optionsData[option].value++;
    if (option === 'children') {
      addChildAge();
    }
  }
  if (option === 'children' && optionsData[option].value === 1) {
    addChildAgeQuestion();
  }
  if (optionsData[option].value > min) {
    const minusButton = document.getElementById(
      `options-minus-button-${option}`,
    );
    minusButton.removeAttribute('disabled');
  }
  if (optionsData[option].value === max) {
    const plusButton = document.getElementById(`options-plus-button-${option}`);
    plusButton.setAttribute('disabled', 'disabled');
  }
  refreshOptionCounter(option);
};

const minusOne = (option) => {
  const { min, max } = optionsData[option];

  if (optionsData[option].value > min) {
    optionsData[option].value--;
    if (option === 'children') {
      removeChildAge();
    }
  }

  if (optionsData[option].value < max) {
    const plusButton = document.getElementById(`options-plus-button-${option}`);
    plusButton.removeAttribute('disabled');
  }
  if (optionsData[option].value === min) {
    const minusButton = document.getElementById(
      `options-minus-button-${option}`,
    );
    minusButton.setAttribute('disabled', 'disabled');
  }

  if (option === 'children' && optionsData[option].value < 1) {
    removeChildAgeQuestion();
  }
  refreshOptionCounter(option);
};

const addChildAge = () => {
  const ageChildrenBlock = document.getElementById('options-select-items');
  const ageOptions = [...Array(18)]
    .map(
      (_, index) =>
        `<option value=${index}>${index} ${
          index === 1 ? 'year old' : 'years old'
        }</option>`,
    )
    .join('');

  ageChildrenBlock.innerHTML += `<div class="options-select-item"><select id="options-child-age" class="options-child-age-select" name="options-child-age">${ageOptions}</select></div>`;
};

const removeChildAge = () => {
  const ageChildrenBlock = document.getElementById('options-select-items');
  const lastSelectItem = document.querySelector(
    '.options-select-item:last-child',
  );
  ageChildrenBlock.removeChild(lastSelectItem);
};

const addChildAgeQuestion = () => {
  const optionsTextDiv = document.getElementById('options-text-div');
  optionsTextDiv.innerHTML = `<span class="options-text" id="options-text">What is the age of the child you’re travelling with?</span>`;
};

const removeChildAgeQuestion = () => {
  const optionsTextDiv = document.getElementById('options-text-div');
  optionsTextDiv.innerHTML = '';
};

const refreshOptionCounter = (option) => {
  const optionNumber = document.getElementById(
    `options-counter-number-${option}`,
  );
  optionNumber.textContent = optionsData[option].value;
  optionsButton.textContent = `${optionsData.adults.value} Adults - ${optionsData.children.value} Children - ${optionsData.rooms.value} Room`;
};

// lesson 13

const availableSection = document.querySelector('.available-hotels');
const availableItems = document.querySelector('.available__hotels-item');
const errorSearch = document.querySelector('.available-hotels-error');
const getRequest = document.getElementById('destination');
const searchForm = document.querySelector('.search');

const showAvailableHotels = () => {
  availableItems.innerHTML = '';
  availableSection.style.display = 'block';

  const url = new URL('https://if-student-api.onrender.com/api/hotels');
  url.searchParams.append('search', `${getRequest.value}`);
  fetch(url, {
    method: 'GET',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      const hotelsItems = data
        .map(({ name, city, country, imageUrl }) => {
          return `<div class="available__hotels-img">
        <img src=${imageUrl} alt="hotel-image"/>
          <div class="available__hotels-text">
          <p class="available__hotels-name"> ${name} </p>
        <p class="available__hotels-country"> ${city}, ${country}</p>
        </div>
      </div>`;
        })
        .join('');
      availableItems.insertAdjacentHTML('afterbegin', hotelsItems);
      if (data.length === 0) {
        errorSearch.classList.add('block');
      } else {
        errorSearch.classList.add('hide');
      }

      document.getElementById('search-btn').addEventListener('click', () => {
        document
          .querySelector('.available__hotels-item')
          .scrollIntoView({ behavior: 'smooth' });
      });
    })
    .catch((err) => console.error(err));
};

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  showAvailableHotels(document.getElementById('destination').value);
});
