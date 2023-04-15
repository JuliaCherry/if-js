const inputPax = document.querySelector('.search__content-pax');
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
    const select = document.querySelector('select').cloneNode(true);
    document.querySelector('select').after(select);
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

const minus = document.querySelector('.filter__pax-count button.minus');
const plus = document.querySelector('.filter__pax-count button.plus');
const minusRoom = document.querySelector('.filter__pax-rooms button.minus');
const plusRoom = document.querySelector('.filter__pax-rooms button.plus');

const targetAdultsInput = document.querySelector('.filter__pax-adult input');

const clickAdults = (e) => {
  if (e.target.classList.contains('plus')) {
    ++targetAdultsInput.value;
  } else if (e.target.classList.contains('minus')) {
    --targetAdultsInput.value;
  }
  if (targetAdultsInput.value <= 0) {
    targetAdultsInput.value = 0;
    minus.style.border = '1px solid #CECECE';
    minus.style.color = '#CECECE';
  } else {
    minus.style.border = '1px solid #3077c6';
    minus.style.color = '#3077c6';
  }
  if (targetAdultsInput.value >= 30) {
    targetAdultsInput.value = 30;
    plus.style.border = '1px solid #CECECE';
    plus.style.color = '#CECECE';
  } else {
    plus.style.border = '1px solid #3077c6';
    plus.style.color = '#3077c6';
  }
  buttonTextChange();
};

plus.addEventListener('click', clickAdults);
minus.addEventListener('click', clickAdults);

const targetChildrenInput = document.querySelector('.filter__pax-child input');

const clickChildBtn = (e) => {
  if (e.target.classList.contains('plus')) {
    ++targetChildrenInput.value;
  } else if (e.target.classList.contains('minus')) {
    --targetChildrenInput.value;
  }
  if (targetChildrenInput.value <= 0) {
    targetChildrenInput.value = 0;
    minusChild.style.border = '1px solid #CECECE';
    minusChild.style.color = '#CECECE';
  } else {
    minusChild.style.border = '1px solid #3077c6';
    minusChild.style.color = '#3077c6';
  }
  if (targetChildrenInput.value >= 10) {
    targetChildrenInput.value = 10;
    plusChild.style.border = '1px solid #CECECE';
    plusChild.style.color = '#CECECE';
  } else {
    plusChild.style.border = '1px solid #3077c6';
    plusChild.style.color = '#3077c6';
  }
  buttonTextChange();
};

minusChild.addEventListener('click', clickChildBtn);
plusChild.addEventListener('click', clickChildBtn);

const targetRoomsInput = document.querySelector('.filter__pax-rooms input');

const clickRoom = (e) => {
  if (e.target.classList.contains('plus')) {
    ++targetRoomsInput.value;
  } else if (e.target.classList.contains('minus')) {
    --targetRoomsInput.value;
  }
  if (targetRoomsInput.value <= 1) {
    targetRoomsInput.value = 1;
    minusRoom.style.border = '1px solid #CECECE';
    minusRoom.style.color = '#CECECE';
  } else {
    minusRoom.style.border = '1px solid #3077c6';
    minusRoom.style.color = '#3077c6';
  }
  if (targetRoomsInput.value >= 30) {
    targetRoomsInput.value = 30;
    plusRoom.style.border = '1px solid #CECECE';
    plusRoom.style.color = '#CECECE';
  } else {
    plusRoom.style.border = '1px solid #3077c6';
    plusRoom.style.color = '#3077c6';
  }
  buttonTextChange();
};

plusRoom.addEventListener('click', clickRoom);
minusRoom.addEventListener('click', clickRoom);

const changePax = document.querySelector('.search__content--btn');
function buttonTextChange() {
  changePax.textContent = `${targetAdultsInput.value} Adults — ${targetChildrenInput.value} Children — ${targetRoomsInput.value}  Room`;
}
