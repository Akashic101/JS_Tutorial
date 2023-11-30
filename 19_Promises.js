/*
"Produzierender Code" ist Code, der einige Zeit in Anspruch nehmen kann.
"Konsumierender Code" ist Code, der auf das Ergebnis warten muss
Ein Promise ist ein JavaScript-Objekt, das produzierenden und konsumierenden Code miteinander verbindet.
*/

/*
Syntax:

let myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value) { console.log("Code if successful") },
  function(error) { console.log("Code if some error") },
);

*/

let myPromise = new Promise(function (myResolve, myReject) {
  // Simulating an asynchronous operation with setTimeout
  setTimeout(function () {
    const success = true; // Set this to true or false to simulate success or failure
    if (success) {
      myResolve("Operation succeeded!");
    } else {
      myReject("Operation failed!");
    }
  }, 2000); // Simulating a 2-second asynchronous operation
});

myPromise.then(
  function (value) {
    console.log(value);
  },
  function (error) {
    console.log(error);
  }
);

console.log("Promise example started!");
