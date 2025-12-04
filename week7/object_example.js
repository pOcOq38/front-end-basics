let computer = {
  price: 1000,
  color: "silver",
  memory: "1TB",
};
console.log(computer);

function Person(fname, lname, age) {
  this.fname = fname;
  this.lname = lname;
  this.age = age;
}

var firstPerson = new Person("Michael", "Jordan", 49);
var secondPerson = new Person("Lara", "bili", 74);

console.log(firstPerson);
console.log(secondPerson);
