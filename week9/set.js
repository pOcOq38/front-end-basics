function logSetElements(val1, val2, val) {
  console.log(`s[${val1}] = ${val2} :: ${val}`);
}

new Set(["foo", "bar", undefined]).forEach(logSetElements);

let myNumArr = [1, 2, 3, 4, 5];

function myFunction(arr) {
  arr.forEach(function (item) {
    console.log(item * item);
  });
}

myFunction(myNumArr);
