import sum from '/src/module.js';

let user = 'John Doe';
console.log(user);

const student = 'Yuliya Alexandrova';
console.log(student);

user = student; //Yuliya Alexandrova
console.log(user);
console.log(/-----------/);

let test = 1;

test++;
test += '1'; //"21"
console.log(test);

test -= 1; //20
console.log(test);

test = true; //true
console.log(test);
console.log(/-----------/);

const arr = [2, 3, 5, 8];
let result = 1;

for (let i = 0; i < arr.length; i++) {
  result *= arr[i];
}
console.log(result);

const array = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < array.length; i++) {
  if (array[i] > 5 && array[i] < 10) {
    console.log(array[i]);
  }
}

const array2 = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < array2.length; i++) {
  if (array2[i] % 2 === 0) {
    console.log(array2[i]);
  }
}

console.log(/-----------/);
//Lesson-3

const palindrome = (str) => {
  let check = '';

  for (let i = str.length - 1; i >= 0; --i) {
    check += str[i];
  }
  return str === check;
};

console.log(palindrome('home')); // === false
console.log(palindrome('123321')); // === true
console.log(palindrome('madam')); // === true
console.log(/-----------/);

const min1 = (a, b) => {
  if (a < b) {
    return a;
  }
  return b;
};

console.log(min1(1, 7));

const min2 = (a, b) => (a < b ? a : b);

console.log(min2(1, 7));
console.log(/-----------/);

const max1 = (a, y) => {
  if (a > y) {
    return a;
  }
  return y;
};

console.log(max1(100, 5));

const max2 = (a, y) => (a > y ? a : y);

console.log(max2(100, 5));
console.log(/-----------/);

const array3 = [2, 15, 80, 0, 13, 100, 9, 7, 23, 60];

const changeZero = (array) =>
  array.join(', ').replaceAll('0', 'zero').split(', ');

const changeZero2 = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (String(array[i]).includes('0')) {
      array[i] = String(array[i]).replace(/0/g, 'zero');
    }
  }

  return array;
};

console.log(changeZero(array3));
console.log(changeZero2(array3));

//Lesson-4

console.log(sum(5)(2));

const text = document.getElementsByTagName('p');

const getColor = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

const calculateColor = () => {
  let i = 0;

  return (event) => {
    if (i === getColor.length) {
      i = 0;
    }

    event.target.style.color = getColor[i];

    i++;
  };
};

for (let i = 0; i < text.length; i++) {
  text[i].addEventListener('click', calculateColor());
}

console.log(/--lesson-5--/);

function changeDate(date) {
  const re = /(?<year>\d{4})-(?<month>\d{1,2})-(?<day>\d{1,2})/;
  const newDate = date.replace(re, '$3.$2.$1');

  console.log(newDate);
}

const date = '2023-01-17';

changeDate(date);

console.log(/--------/);

const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

function search(str) {
  const array = [];

  for (let i = 0; i < data.length; i++) {
    for (const key in data[i]) {
      const searchResult = data[i][key].match(str);

      if (searchResult !== null) {
        array.push(Object.values(data[i]).join(', '));
      }
    }
  }

  return array;
}

console.log(search('Ger'));
