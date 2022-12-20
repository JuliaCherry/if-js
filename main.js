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
  if (arrow2[i] % 2 == 0) {
    console.log(arrow2[i]);
  }
}
