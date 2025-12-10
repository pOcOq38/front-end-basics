const arr = [1, 2, 3];
console.log(arr);
arr.push(4); //adds an item to the stack
console.log("push: ", arr);
arr.pop(); //removes an item
console.log("pop: ", arr);
console.log("size: ", arr.length);
arr.push(5);
console.log("enqueue: ", arr);
arr.shift();
console.log("dequeue: ", arr);

class stack {
  constructor() {
    this.items = [];
  }

  //add to the stack
  push(element) {
    this.items.push(element);
  }

  //remove from the stack
  pop() {
    let lastItem = this.items.pop();
    return lastItem;
  }

  //show the last item added
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items);
  }
}
