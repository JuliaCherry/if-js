import { sum } from 'module.js';

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
  array.join(',').replaceAll('0', 'zero').split(',');

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

const date = '2022-01-17';
const reverseResult = date.split('-').reverse().join('.');
console.log(reverseResult);

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

const search = (str) => {
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
};

console.log(search('Ger'));

//lesson-5

const palindrome2 = (str) => str === str.split('').reverse().join('');

console.log(palindrome2('123321'));
console.log(palindrome2('привет'));

console.log(/-------/);

const hotels = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa Cruz de Tenerife',
    country: 'Spain',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Virgin Hotel',
    city: 'Chicago',
    country: 'USA',
  },
  {
    name: 'Grand Beach Resort',
    city: 'Dubai',
    country: 'United Arab Emirates',
  },
  {
    name: 'Shilla Stay',
    city: 'Seoul',
    country: 'South Korea',
  },
  {
    name: 'San Firenze Suites',
    city: 'Florence',
    country: 'Italy',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Black Penny Villas',
    city: 'BTDC, Nuca Dua',
    country: 'Indonesia',
  },
  {
    name: 'Koko Hotel',
    city: 'Tokyo',
    country: 'Japan',
  },
  {
    name: 'Ramada Plaza',
    city: 'Istanbul',
    country: 'Turkey',
  },
  {
    name: 'Waikiki Resort Hotel',
    city: 'Hawaii',
    country: 'USA',
  },
  {
    name: 'Puro Hotel',
    city: 'Krakow',
    country: 'Poland',
  },
  {
    name: 'Asma Suites',
    city: 'Santorini',
    country: 'Greece',
  },
  {
    name: 'Cityden Apartments',
    city: 'Amsterdam',
    country: 'Netherlands',
  },
  {
    name: 'Mandarin Oriental',
    city: 'Miami',
    country: 'USA',
  },
  {
    name: 'Concept Terrace Hotel',
    city: 'Rome',
    country: 'Italy',
  },
  {
    name: 'Ponta Mar Hotel',
    city: 'Fortaleza',
    country: 'Brazil',
  },
  {
    name: 'Four Seasons Hotel',
    city: 'Sydney',
    country: 'Australia',
  },
  {
    name: 'Le Meridien',
    city: 'Nice',
    country: 'France',
  },
  {
    name: 'Apart Neptun',
    city: 'Gdansk',
    country: 'Poland',
  },
  {
    name: 'Lux Isla',
    city: 'Ibiza',
    country: 'Spain',
  },
  {
    name: 'Nox Hostel',
    city: 'London',
    country: 'UK',
  },
  {
    name: 'Leonardo Vienna',
    city: 'Vienna',
    country: 'Austria',
  },
  {
    name: 'Adagio Aparthotel',
    city: 'Edinburgh',
    country: 'UK',
  },
  {
    name: 'Steigenberger Hotel',
    city: 'Hamburg',
    country: 'Germany',
  },
];

const searching = (place) => {
  const result = [];

  hotels.forEach((location) => {
    if (Object.values(location).join().includes(place)) {
      result.push(Object.values(location).join(', '));
    }
  });

  return result;
};

console.log(searching('er'));

const uniqueCountries = (data) =>
  data.reduce((result, hotels) => {
    if (!Object.hasOwn(hotels.country)) {
      result[hotels.country] = [];
    }

    result[hotels.country].push(hotels.city);

    return result;
  }, {});

console.log(uniqueCountries(hotels));

const searchUnique = (data) =>
  data.reduce((result, hotels) => {
    result[hotels.country]
      ? result[hotels.country].push(hotels.city)
      : (result[hotels.country] = [hotels.city]);

    return result;
  }, {});

console.log(searchUnique(hotels));

//--7---//

const obj1 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
    },
  },
};
const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: 'b',
    a: 'a',
  },
  a: 'a',
};
const obj3 = {
  a: {
    c: {
      a: 'a',
    },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};

const deepEqual = (object1, object2) => {
  const props1 = Object.getOwnPropertyNames(object1);
  const props2 = Object.getOwnPropertyNames(object2);
  if (props1.length !== props2.length) {
    return false;
  }

  for (let i = 0; i < props1.length; i++) {
    const prop = props1[i];
    const bothAreObjects =
      typeof object1[prop] === 'object' && typeof object2[prop] === 'object';

    if (
      (!bothAreObjects && object1[prop] !== object2[prop]) ||
      (bothAreObjects && !deepEqual(object1[prop], object2[prop]))
    ) {
      return false;
    }
  }

  return true;
};

console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));

//----8----//

const studentsData = [
  {
    firstName: 'Василий',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Java',
  },
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    admissionYear: 2018,
    courseName: 'JavaScript',
  },
  {
    firstName: 'Александр',
    lastName: 'Федоров',
    admissionYear: 2017,
    courseName: 'Python',
  },
  {
    firstName: 'Николай',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Android',
  },
];

class User {
  constructor({ firstName, lastName }) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Student extends User {
  constructor({ admissionYear, courseName, ...props }) {
    super(props);
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }
  get course() {
    return new Date().getFullYear() - this.admissionYear;
  }
}

class Students {
  constructor(studentsData) {
    this.studentsData = studentsData;
  }

  getInfo() {
    return this.studentsData
      .sort((one, two) => new Student(one).course - new Student(two).course)
      .map(
        (value) =>
          new User(value).fullName +
          ' - ' +
          new Student(value).courseName +
          ', ' +
          new Student(value).course +
          ' курс',
      );
  }
}
const students = new Students(studentsData);
console.log(students.getInfo());

//------9------//

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

const colors = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
  currentColor: 0,

  [Symbol.iterator]() {
    return this;
  },

  next() {
    if (this.currentColor < this.data.length) {
      return {
        done: false,
        value: this.data[this.currentColor++],
      };
    }

    if (this.currentColor <= this.data.length) {
      this.currentColor = 0;

      return {
        done: false,
        value: this.data[this.currentColor],
      };
    }
  },
};

const changeStyle = (colors) =>
  function (event) {
    event.target.style.color = colors.next().value;
    return event;
  };

text1.addEventListener('click', changeStyle({ ...colors }));
text2.addEventListener('click', changeStyle({ ...colors }));
text3.addEventListener('click', changeStyle({ ...colors }));
