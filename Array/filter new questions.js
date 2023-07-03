//1
// const numbers = [1, 2, 3, 4, 5, 6,7,8,9];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4, 6]

//2
// const words = ["apple", "banana", "orange", "kiwi"];
// const longWords = words.filter(word => word.length > 5);
// console.log(longWords); // Output: ["banana", "orange"]

//3
// const users = [
//     { name: "John", age: 25 },
//     { name: "Alice", age: 30 },
//     { name: "Bob", age: 20 }
//   ];
//   const adults = users.filter(user => user.age >= 18);
//   console.log(adults); // Output: [{ name: "John", age: 25 }, { name: "Alice", age: 30 }]
  
// 4
// const numbers = [1, 2, 3, 2, 4, 1, 5];
// const uniqueNumbers = numbers.filter((num, index, array) => array.indexOf(num) === index);
// console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]

// //5
// const values = [1, null, 2, undefined, 3];
// const filteredValues = values.filter(value => value !== null && value !== undefined);
// console.log(filteredValues); // Output: [1, 2, 3]

// 6
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(num => num > 2 && num < 5);
// console.log(filteredNumbers); // Output: [3, 4]

// 7
// const words = ["apple", "banana", "orange", "kiwi"];
// const filteredWords = words.filter(word => /an/.test(word));
// console.log(filteredWords); // Output: ["banana", "orange"]

// 8
// const numbers = [1, 2, 3, 4, 5];
// const valuesToFilter = [2, 4];
// const filteredNumbers = numbers.filter(num => !valuesToFilter.includes(num));
// console.log(filteredNumbers); // Output: [1, 3, 5]

// 9
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(num => num >= 2 && num <= 4);
// console.log(filteredNumbers); // Output: [2, 3, 4]

// 10
// const values = [1, "apple", 2, "banana", 3];
// const filteredValues = values.filter(value => typeof value === "number");
// console.log(filteredValues); // Output: [1, 2, 3]

// // 11
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(num => {
//   // Custom condition: filter out odd numbers greater than 3
//   return num % 2 === 0 && num <= 3;
// });
// console.log(filteredNumbers); // Output: [2]

// 12
// const products = [
//     { name: "Apple", category: "Fruit", price: 1 },
//     { name: "Carrot", category: "Vegetable", price: 2 },
//     { name: "Banana", category: "Fruit", price: 3 }
//   ];
//   const filteredProducts = products.filter(product => {
//     // Custom condition: filter out fruits with price less than or equal to 2
//     return product.category === "Fruit" && product.price > 2;
//   });
//   console.log(filteredProducts); // Output: [{ name: "Banana", category: "Fruit", price: 3 }]
  
// 13
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(num => {
//   if (num % 2 === 0) {
//     return num * 2;
//   }
// });
// console.log(filteredNumbers); // Output: [4, 8]

//14
// const products = [
//     { name: "Apple", category: "Fruit" },
//     { name: "Carrot", category: "Vegetable" },
//     { name: "Banana", category: "Fruit" }
//   ];
//   const fruitNames = products.filter(product => product.category === "Fruit").map(fruit => fruit.name);
//   console.log(fruitNames); // Output: ["Apple", "Banana"]
  
// 15
// const numbers = [1, 2, 3, 4, 5];
// let count = 0;
// const filteredNumbers = numbers.filter(num => {
//   if (num % 2 === 0 && count < 2) {
//     count++;
//     return true;
//   }
//   return false;
// });
// console.log(filteredNumbers); // Output: [2, 4]

// 16
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(num => num % 2 === 0).sort((a, b) => b - a);
// console.log(filteredNumbers); // Output: [4, 2]

// 17
// const numbers = [1, 2, 3, 4, 5];
// const firstEvenNumber = numbers.filter(num => num % 2 === 0)[0];
// console.log(firstEvenNumber); // Output: 2

// 18
// const numbers = [1, 2, 3, 4, 5];
// const lastOddNumber = numbers.filter(num => num % 2 !== 0).pop();
// console.log(lastOddNumber); // Output: 5

// // 19
// const numbers = [1, -2, 3, -4, 5];
// const firstNegativeIndex = numbers.findIndex(num => num < 0);
// console.log(firstNegativeIndex); // Output: 1

// 20
// const numbers = [1, 2, 3, 4, 5];
// const countEvenNumbers = numbers.filter(num => num % 2 === 0).length;
// console.log(countEvenNumbers); // Output: 2

// 21
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(num => num % 2 === 0);
// console.log(filteredNumbers); // Output: [2, 4]
// console.log(numbers); // Output: [1, 2, 3, 4, 5]

// // 22
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(num => num % 2 === 0);
// filteredNumbers.forEach(num => {
//   console.log(num * 2); // Output: 4, 8
// });

// 23
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(num => num % 2 !== 0);
// const sum = filteredNumbers.reduce((acc, curr) => acc + curr, 0);
// console.log(sum); // Output: 9 (1 + 3 + 5)

// 24
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(num => num % 2 == 0);
// const result = filteredNumbers.map(num => "Even");
// console.log(result); // Output: ["Even", "Even"]

// 25
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(num => num % 2 === 0).map(num => ({ value: num, isEven: true }));
// console.log(filteredNumbers); // Output: [{ value: 2, isEven: true }, { value: 4, isEven: true }]

// 26
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(num => num > 3).map(num => num.toString());
// console.log(filteredNumbers); // Output: ["4", "5"]

// 27
// const numbers = [5, 2, 4, 1, 3];
// const filteredNumbers = numbers.filter(num => num % 2 === 0).sort((a, b) => a - b);
// console.log(filteredNumbers); // Output: [2, 4]

// 28
// function isPrime(num) {
//     if (num <= 1) {
//       return false;
//     }
    
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
    
//     return true;
//   }
  
//   function filterPrimes(numbers) {
//     return numbers.filter(num => isPrime(num));
//   }
  
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const primeNumbers = filterPrimes(numbers);
  
//   console.log(primeNumbers); // Output: [2, 3, 5, 7]
  