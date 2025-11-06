## JavaScript Intro part 2

Arrays are lists of items. You can instavtiate an array with the `[]` syntax.

```js
const myArray = [];
```

Arrays are index based, meaning that the first item is at index 0, the second at index1, and so on.

```js
const myArray = ["one", "two", "three"];
console.log(myArray[0]); // "one"
console.log(myArray[1]); // "two"
console.log(myArray[2]); // "three"
```

The for loop consists of three parts: the initialization, the condition, and the increment.

```js
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

Let's say we have an array of colors and want to iterate over it, logging "The color is: " and the name of the color for each, we could do the following:

```js
const colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log("The color is: " + colors[i]);
}
```

We can use if to check if something evaluates to true, and if so then do something. For example:

```js
const x = 5;
if (x > 0) {
  console.log("x is positive");
}
```

We can add a default or fall through case with else.

```js
const x = 5;
if (x > 0) {
  console.log("x is positive");
} else {
  console.log("x is not positive");
}
```

Additionally, we can check multiple conditions with else if.

```js
const x = 5;
if (x > 0) {
  console.log("x is positive");
} else if (x < 0) {
  console.log("x is negative");
} else {
  console.log("x is zero");
}
```
