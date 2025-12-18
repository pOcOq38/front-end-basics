let myMap = new Map();
myMap.set("keyA", "valueA");
myMap.set("keyB", "valueB");

myMap.forEach(function (val, key) {
  console.log(`key: ${key} value: ${val}`);
});
