// let promise = new Promise(function(resolve, reject) {
//     reject("I am hh done");
// });
// promise.then(
//     function(value) {
//         console.log(value);
//     },
//     function(error) {
//         console.log(error+"pgfjty");
//     }
// );

// let myPromise = new Promise(function(myResolve, myReject) {
//     setTimeout(function() {
//         myResolve("I love You !!");
//     }, 3000);
// });

// myPromise.then(function(value) {
//     console.log(value);
// });

// const promiseA = new Promise((resolve, reject) => {
//     resolve(777);
//   });
//   promiseA.then((val) => console.log("asynchronous logging has val:", val));
//   console.log("immediate logging");

// const myFirstPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Success!");
//       console.log("fjgrfklnb");
//     }, 250);
//   });
//   myFirstPromise.then((successMessage) => {
//     console.log(`Yay! ${successMessage}`);
//   });


// const THRESHOLD_A = 8;
// function tetheredGetNumber(resolve, reject) {
//   setTimeout(() => {
//     const randomInt = Date.now();
//     const value = randomInt % 10;
//     if (value < THRESHOLD_A) {
//       resolve(value);
//     } else {
//       reject(`Too large: ${value}`);
//     }
//   }, 500);
// }
// function determineParity(value) {
//   const isOdd = value % 2 === 1;
//   return { value, isOdd };
// }
// function troubleWithGetNumber(reason) {
//   const err = new Error("Trouble getting number", { cause: reason });
//   console.error(err);
//   throw err;
// }
// function promiseGetWord(parityInfo) {
//   return new Promise((resolve, reject) => {
//     const { value, isOdd } = parityInfo;
//     if (value >= THRESHOLD_A - 1) {
//       reject(`Still too large: ${value}`);
//     } else {
//       parityInfo.wordEvenOdd = isOdd ? "odd" : "even";
//       resolve(parityInfo);
//     }
//   });
// }
// new Promise(tetheredGetNumber)
//   .then(determineParity, troubleWithGetNumber)
//   .then(promiseGetWord)
//   .then((info) => {
//     console.log(`Got: ${info.value}, ${info.wordEvenOdd}`);
//     return info;

//   })
//   .catch((reason) => {
//     if (reason.cause) {
//       console.error("Had previously handled error");
//     } else {
//       console.error(`Trouble with promiseGetWord(): ${reason}`);
//     }
//   })
//   .finally((info) => console.log("All done"));


// const promise = new Promise(function (resolve, reject) {
// 	const string1 = "geeksforgeeks";
// 	const string2 = "geeksforgeeks";
// 	if (string1 === string2) {
// 	resolve();
// 	} else {
// 	reject();
// 	}
// });

// promise
// 	.then(function () {
// 	console.log("Promise resolved successfully");
// 	})
// 	.catch(function () {
// 	console.log("Promise is rejected");
// 	});


// const helperPromise = function () {
// 	const promise = new Promise(function (resolve, reject) {
// 	const x = "geeksforgeeks";
// 	const y = "geeksforgeeks";
// 	if (x === y) {
// 		resolve("Strings are same");
// 	} else {
// 		reject("Strings are not same");
// 	}
// 	});

// 	return promise;
// };

// async function demoPromise() {
// 	try {
// 	let message = await helperPromise();
// 	console.log(message);
// 	} catch (error) {
// 	console.log("Error: " + error);
// 	}
// }

// demoPromise();

