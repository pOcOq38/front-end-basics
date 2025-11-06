console.log("======= Practice Arrays =======");

let myArray = ["a", "b", "c", "d"];

myArray.push("e");
console.log(`push: ${myArray}`);

myArray.pop();
console.log(`pop: ${myArray}`);

myArray.shift();
console.log(`shift: ${myArray}`);

myArray.unshift("f");
console.log(`unshift: ${myArray}`);

let user = { name: "Rach", email: "rach@rach.ra", title: "This is title" };
console.log(`value: ${user.name}`);

let list = [{ name: "aaa" }, { name: "bbb" }, { name: "ccc" }, { name: "ddd" }]; //list of 4 empty objects
console.log(`get value from the object of the list: ${list[0].name}`);

// Exercise 01
// Write a function that will take out list of objs with names and add an email key:value to each
// Email should be in the form of name@example.com

let users = [
  { name: "aaa" },
  { name: "bbb" },
  { name: "ccc" },
  { name: "ddd" },
];

for (let i = 0; i < users.length; i++) {
  let email = `${users[i].name}@example.com}`;
  users[i].email = email;
}

// Exercise 02
function lotto() {
  let num = parseInt(prompt());
  let para = document.getElementById("details");

  if (num == 777) {
    para.innerHTML = "$1,000,000";
    para.style.color = "blue";
    para.style.background = "yellow";
    para.style.border = "1px solid green";
  } else {
    para.innerHTML = "Rach";
    para.style.color = "yellow";
    para.style.background = "black";
    para.style.border = "5px solid red";
  }
}

let size = 0;
let para = document.getElementById("details2");

function enlarge() {
  size = size + 10;
  if (size > 500) {
    document.body.style.background = "brown";
  } else {
    document.body.style.background = "blue";
    para.style.background = "yellow";
    para.style.width = `${size}px`;
  }
}

function reset() {
  size = 10;
  para.style.background = "yellow";
  para.style.width = `${size}px`;
  document.body.style.background = "blue";
}

function sumNum() {
  let num = parseInt(prompt("NUM1")) + parseInt(prompt("NUM2"));

  if (num > 100) {
  }
}
