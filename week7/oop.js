function Car(model, color) {
  this.model = model;
  this.color = color;
}

let myCar = new Car("hyundai", "black");
console.log(myCar.model);

let myTruck = new Car("BMW", "silver");
console.log(myTruck);
