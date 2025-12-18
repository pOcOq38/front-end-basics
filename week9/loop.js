const copyItems = [];
const items = ["item1", "item2", "item3"];

items.forEach(function (item) {
  copyItems.push(item);
});
console.log(copyItems);

// Notice that index 2 is skipped, since there is no item at
// that position in the array...
[2, 5, , 9].forEach(function (element, index, array) {
  console.log("a[" + index + "] = " + element + " array: " + array);
});

const words = ["one", "two", "three", "four"];

words.forEach(function (word) {
  console.log(word);

  if (word === "two") {
    words.shift(); // 'one' will be removed from array
  }
}); // one // two // four

console.log(words); // ['two', 'three', 'four']
