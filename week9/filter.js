const arr = [1, 2, 3, 4, 5];

const filtered = arr.filter((val) => val > 3);
//console.log(filtered);

const arr3 = [1, 2, 3, 4, 5];
// const filteredArr = [];
// for (let i = 0; i < arr3.length; i++) {
//   if (arr3[i] > 3) {
//     filteredArr.push(arr3[i]);
//   }
// }
// console.log(filteredArr);

let filteredArr = arr3.filter((i) => i > 3);
console.log(filteredArr);

arr3.forEach(function (i) {
  console.log(i);
});

let map1 = arr3.map((x) => x * 2);
console.log(map1);

arr3.findIndex;
