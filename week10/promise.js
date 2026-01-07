function getCountry(name) {
  // phase 1 :pending
  // the promise is settled
  // its fullfilled or rejected state
  // handle fullfilled promise
  const req = fetch(`https://restcountries.com/v2/name/${name}`)
    .then((response) => {
      console.log(response);
      // the data is in the body
      // need to call the json
      return response.json(); // available in all result value.
      // The response.json() its asynchronous function. so its return promise
    })
    .then((data) => console.log(data));
}

getCountry("usa");
