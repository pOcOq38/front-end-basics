// Ex) 01
// Generates unique IDs for HTML elements using a closure
// to keep the 'count' variable private.
function createIdGenerator(prefix) {
  let count = 0;

  return function () {
    count++;
    return `${prefix}-${count}`;
  };
}

const generateUserId = createIdGenerator("user");
const generateOrderId = createIdGenerator("order");

console.log("====== Example 1 ======");

console.log(generateUserId()); // "user-1"
console.log(generateUserId()); // "user-2"
console.log(generateUserId()); // "user-3"

console.log(generateOrderId()); // "order-1"

// Ex) 02
// Uses a closure to store the timer
// and delay the API request until the last input event.
const debounce = (func, delay) => {
  let timer;

  return (...args) => {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const handleSearch = debounce((text) => {
  console.log("CALL API:", text);
}, 500);
console.log("====== Example 2 ======"); //2

handleSearch("H");
handleSearch("Hel");
handleSearch("Hello");

//Quiz
function createBtn(i) {
  return function () {
    alert(`You clicked button ${i}`);
  };
}

for (var i = 0; i < 5; i++) {
  const button = document.createElement("button");
  button.textContent = `Button ${i}`;
  button.onclick = createBtn(i);
  document.body.appendChild(button);
}
