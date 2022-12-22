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
console.log(/-----------/);

const arrow = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arrow.length; i++) {
  if (arrow[i] > 5 && arrow[i] < 10) {
    console.log(arrow[i]);
  }
}
console.log(/-----------/);

const arrow2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arrow2.length; i++) {
  if (arrow2[i] % 2 === 0) {
    console.log(arrow2[i]);
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
  } else {
    return b;
  }
};

console.log(min1(1, 7));

const min2 = (a, b) => {
  return a < b ? a : b;
};
console.log(min2(1, 7));
console.log(/-----------/);

const max1 = (a, y) => {
  if (a > y) {
    return a;
  } else {
    return y;
  }
};

console.log(max1(100, 5));

const max2 = (a, y) => {
  return a > y ? a : y;
};

console.log(max2(100, 5));
console.log(/-----------/);

const arrow3 = [2, 15, 80, 0, 13, 100, 9, 7, 23, 60];
const changeZero = (number) => String(number).replaceAll('0', 'zero');

console.log(changeZero(arrow3));
