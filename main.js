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
