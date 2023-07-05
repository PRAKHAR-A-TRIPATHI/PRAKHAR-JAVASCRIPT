// let arr = [1,2,3,4,56,7,8,2,45,6,8,9,9,]

// let sum = arr.reduce((accu , curr)=>{
//     debugger;
//     // return accu+curr;
//     return accu*curr;
// },{})
// console.log(sum);

// let arr = [1,2,3,4,5];
// let arr2 = arr.reduce((a, c) => a + c).map(item => item);
// console.log(arr2); // => error 

// const numbers = [5, 2, 8, 1, 9];
// const minNumber = numbers.reduce((min, current) => Math.min(min, current));
// console.log(minNumber); // Output: 1

// const students = [
//     { name: 'Alice', score: 90 },
//     { name: 'Bob', score: 80 },
//     { name: 'Charlie', score: 95 },
//   ];
//   const minScore = students.reduce((min, current) => Math.min(min, current.score), Infinity);
//   console.log(minScore); // Output: 80


// const words = ['apple', 'banana', 'cherry', 'date'];
// const minLength = words.map((min, current) => Math.min(min, current.length), Infinity);
// console.log(minLength); // Output: 4

// const matrix = [[3, 5, 2], [8, 1, 4], [6, 9, 7]];
// const minValue = matrix.reduce((min, current) => Math.min(min, ...current), Infinity);
// console.log(minValue); 

// const mixedArray = [10, 'apple', 5, 'banana', 7, 'cherry'];
// const minNumber = mixedArray.reduce((min, current) => {
//   if (typeof current === 'number') {
//     return Math.min(min, current);
//   }
//   return min;
// }, Infinity);
// console.log(minNumber); // Output: 5



