console.log("======= Practice Loops =======");

let a = [1, 2, 3, 4, 5];

for (let i = 0; i < a.length; i++) {
  console.log(`The value is: ${i}`);
}

let fruits = ["apple", "banana", "cherry", "strawberry", "blueberry"];

if (5 < 10) {
  console.log("Yes, it is!");
}

if (5 > 10) {
  console.log("Yes, it is!");
} else {
  console.log("No, it is not!");
}

//Exercise 1
// Use loops, variables, and data stuructures however you would like to create a list of items:
// a) Contained in both arrays
//b) Contained in fruit plus the other list

let fruit = ["apples", "grapes", "pineapples", "mangos"];
let items = [
  "black",
  "gravy",
  "t-shirts",
  "pineapples",
  "spaghetti",
  "spinach",
];
let res = [];

for (let i = 0; i < items.length; i++) {
  for (let j = 0; j < fruit.length; j++) {
    if (items[i] == fruit[j]) {
      res = [items[i]];
    }
  }
}
console.log(`${res} is a fruit`);

//Exercise: Solve it on your own
function findMin(num1, num2) {
  if (num1 < num2) {
    return `The minimum number is: ${num1}`;
  } else if (num1 > num2) {
    return `The minimum number is: ${num2}`;
  } else {
    return "They are equal";
  }
}
console.log(findMin(10, 20));

//Ternary Operator
let result = 3 > 5 ? "Yes" : "No";
console.log(`result: ${result}`);

function evenNum() {
  let num = parseInt(document.getElementById("num").value);
  if (num % 2 == 0) {
    alert(`${num} is even number.`);
  } else {
    alert(`${num} is odd number.`);
  }
}

function cntEvenNum() {
  let cnt = 0;
  for (let i = 0; i < 4; i++) {
    let num = parseInt(prompt("number:  "));
    if (num % 2 == 0) {
      cnt++;
    }
  }
  document.getElementById("details4").innerHTML = `Even number counter: ${cnt}`;
}

function avgSumAbv() {
  let sum = 0;
  let cnt = 0;
  let avg = sum / 5;

  for (let i = 0; i < 5; i++) {
    // get salaries
    let sal = parseInt(prompt("salary:  "));

    //sum
    sum = sum + sal;

    //count above 1000
    if (sal > 1000) {
      cnt++;
    }
  }

  document.getElementById("sum").innerHTML = `sum: ${sum}`;
  document.getElementById("average").innerHTML = `avg: ${avg}`;
  document.getElementById("above1000").innerHTML = `cnt: ${cnt}`;
}
