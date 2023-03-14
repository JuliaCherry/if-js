const inputPax = document.querySelector('.search__content-pax');
const changePax = document.querySelector('.search__content--btn');
const filterPax = document.querySelector('.filter');

const focusPeople = () => {
  filterPax.classList.toggle('visible_filter');
};
inputPax.addEventListener('click', focusPeople);

const plusChild = document.querySelector('.filter__pax-child button.plus');
const minusChild = document.querySelector('.filter__pax-child button.minus');
const childrenFilter = document.querySelector('.filter__pax-age');

const showChildren = (e) => {
  childrenFilter.style.display = 'block';
  const targetInput = e.target.parentElement.querySelector('input');
  if (targetInput.value >= 1 && targetInput.value <= 9) {
    document.querySelector('select').cloneNode(true);
  }
};
plusChild.addEventListener('click', showChildren);

const hideChildren = (e) => {
  if (e.target.parentElement.querySelector('input').value < 2) {
    childrenFilter.style.display = 'none';
  } else {
    const select = document.querySelector('.filter__pax-age select');
    select.remove();
  }
};
minusChild.addEventListener('click', hideChildren);


