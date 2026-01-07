## Array Methods

### .forEach()

Executes a provided function once per each value in the Set object, in insertion order.

```js
const arr1 = [1, 2, 3, 4];

arr1.forEach(function (i) {
  console.log(i);
});

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}
```

### .map()

Returns the elements of an array that meet the condition specified in a callback function.

```js
const arr2 = [1, 2, 3, 4];

let map1 = arr2.map((x) => x * 2);
console.log(map1); // [2, 4, 6, 8]

for (let i = 0; i < arr2.length; i++) {
  console.log(arr1[i]);
}
```

### .filter()

```js
const arr3 = [1, 2, 3, 4, 5];

let arr4 = arr3.filter((i) => i > 3);
console.log(arr4);

const filteredArr = [];
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] > 3) {
    filteredArr.push(arr3[i]);
  }
}
console.log(filteredArr); //[4, 5]
```

### .reduce()

### find()
