//1. Write the syntax for declaring a JavaScript function called sayHello that doesn't take any parameters and doesn't return any value.

// function sayHello(){
//     console.log("hello world");
// }
// sayHello();

// 2.What is the syntax for declaring a JavaScript function called calculateSum that takes two parameters num1 and num2, and returns their sum? (write all four types of functions as we discussed in session)
// 1
// function calculateSum(num1,num2){
//   return num1+num2;
// }

// 2
// function calculateSum(num1,num2){
//     let a =num1+num2;
//     return a;
// }

//3
// function calculateSum(num1,num2){
//     console.log(num1+num2);
// }
// calculateSum(4,6)

// 4
// let a=4;
// let b=5;
// function calculateSum(){
//     return a+b;
// }
// console.log(calculateSum());

// 3
// Create a function called printArray that takes an array called arr as a parameter and prints the array. Write the syntax for this function.
// function printArray(arr){
//     console.log(arr);
// }
// console.log(printArray([1,23,4,567,]));

// 4
// Write the syntax for declaring an anonymous JavaScript function and assigning it to a variable called multiply that takes two parameters a and b, and returns their multiplication.
// let anonymous = function(a,d){
//     return a*d;
// }
// console.log(anonymous(3,4));

// 5
// What is the syntax for calling a function named myFunction that doesn't take any parameters?
// function myFunction(){
//     console.log("hello");
// }
// myFunction()

// 6
// Create a JavaScript arrow function called squareNumber that takes a parameter num and returns the square of that number. Write the syntax for this arrow function.
// const squareNumber=(num)=> num*num;
// console.log(squareNumber(9));
       
// 7Write the syntax for declaring a JavaScript function called getFullName that takes two parameters firstName and lastName, and returns the full name as a string.

// const getFullName= (firstName,lastName)=>{
//     console.log("fullName:",firstName+"  " +lastName);
// }
// getFullName("prakhar","tripathi");

// 8What is the syntax for declaring a JavaScript function called calculateArea that takes two parameters length and width, and returns the area of a rectangle?
// function calculateArea (legnth,widht){
//     let area = legnth*widht;
//     return area;
// }
// console.log(calculateArea(10,20));

// 9Write the syntax for declaring a JavaScript function called isEven that takes a single parameter num and returns true if the number is even, and false otherwise.
// let isEven = (num) =>{
//     if(num%2===0){
//         return  true;
//     }else{
//         return false;
//     }
// }

// console.log(isEven(2));

// 10Write a function that takes three parameters and returns the maximum number of three.(use ternary operator and if..else as well) (Also make all four types of function as we discussed in session) (total: 8 functions definition)
// 1
// function maxOfThree(a, b, c) {
//     return (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
//   }
//   let value=maxOfThree(22,23,24);
//   console.log(value);


//2
// const maxOfThree = function(a, b, c) {
//     return (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
//   }
//   console.log(maxOfThree(22,11,33));
//3
// const maxOfThree = (a, b, c) =>
//   (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
//   console.log(maxOfThree(0,1,2));
//4
// const maxOfThree = (function(a, b, c) {
//     return (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
//   })(3, 5, 1);
// console.log(maxOfThree);  
// 5
// function maxOfThree(a, b, c) {
//     if (a > b) {
//       if (a > c) {
//         return a;
//       } else {
//         return c;
//       }
//     } else {
//       if (b > c) {
//         return b;
//       } else {
//         return c;
//       }
//     }
//   }
//   let value = maxOfThree(9,2,99);
//   console.log(value);

// 6
// const maxOfThree = function(a, b, c) {
//     if (a > b) {
//       if (a > c) {
//         return a;
//       } else {
//         return c;
//       }
//     } else {
//       if (b > c) {
//         return b;
//       } else {
//         return c;
//       }
//     }
//   }
//     let value = maxOfThree(9,200,99);
//   console.log(value);
//7
// const maxOfThree = (a, b, c) => {
//     if (a > b) {
//       if (a > c) {
//         return a;
//       } else {
//         return c;
//       }
//     } else {
//       if (b > c) {
//         return b;
//       } else {
//         return c;
//       }
//     }
//   }
//  let value = maxOfThree(90,200,99);
//   console.log(value);
  
// 8
// const maxOfThree = (function(a, b, c) {
//     if (a > b) {
//       if (a > c) {
//         return a;
//       } else {
//         return c;
//       }
//     } else {
//       if (b > c) {
//         return b;
//       } else {
//         return c;
//       }
//     }
//   })(-30, -95, -1);
// console.log(maxOfThree);  

// 11 Create a JavaScript function called calculatePrice that takes a two parameter price, discount and returns discounted price. 	(defaultDiscount = 10%)
// Write the syntax for this arrow function.
// Write the syntax for normal function.

// function calculatePrice(price,discount=10){
//     return (price-((price*discount)/100));
// }

// const calculatePrice = (price,discount=10)=>{
//     return price-(price*(discount/100)) ;
// }
// console.log(calculatePrice(500));
// console.log(calculatePrice(500,50));

// 13What is the syntax for declaring a JavaScript function called calculateMultiply that takes two parameters num1 and num2, and returns their multiplication? (make sure that never give an error if i passed anything) (if not pass anything then return 1)


// 13.
// a - with normal function

// // with arguments and with return
// function calculateMultiply (num1, num2) {
//     if (typeof num1 === 'number' && typeof num2 === 'number') {
//         return num1 * num2;
//     } else {
//         return 1
//     }
// }
// console.log(calculateMultiply('89',89));


// // without arguments and with return
// function calculateMultiply () {
//     let num1 = 8
//     let num2 = 2
//     if (typeof num1 === 'number' && typeof num2 === 'number') {
//         return num1 * num2;
//     } else {
//         return 1
//     }
// }
// console.log(calculateMultiply());



// // without arguments and without return
// function calculateMultiply () {
//     let num1 = 8
//     let num2 = 2
//     if (typeof num1 === 'number' && typeof num2 === 'number') {
//         console.log(num1 * num2);
//     } else {
//         console.log(1);
//     }
// }
// calculateMultiply()



// // with arguments and without return
// function calculateMultiply (num1, num2) {
//     if (typeof num1 === 'number' && typeof num2 === 'number') {
//         console.log(num1 * num2);
//     } else {
//         console.log(1);
//     }
// }
// calculateMultiply(9,2)



// b - with arrow function

// // with arguments and with return
// const calculateMultiply = (num1, num2) => {
//     if (typeof num1 === 'number' && typeof num2 === 'number') {
//         return num1 * num2;
//     } else {
//         return 1
//     }
// }
// console.log(calculateMultiply('89',89));
// console.log(calculateMultiply());



// // without arguments and with return
// const calculateMultiply =  () => {
//     let num1 = 8
//     let num2 = 2
//     if (typeof num1 === 'number' && typeof num2 === 'number') {
//         return num1 * num2;
//     } else {
//         return 1
//     }
// }
// console.log(calculateMultiply());



// // without arguments and without return
// const  calculateMultiply = () => {
//     let num1 = 8
//     let num2 = 2
//     if (typeof num1 === 'number' && typeof num2 === 'number') {
//         console.log(num1 * num2);
//     } else {
//         console.log(1);
//     }
// }
// calculateMultiply()



// // with arguments and without return
// const calculateMultiply =  (num1, num2) => {
//     if (typeof num1 === 'number' && typeof num2 === 'number') {
//         console.log(num1 * num2);
//     } else {
//         console.log(1);
//     }
// }
// calculateMultiply(9,2)             

// 14Write the syntax for declaring a JavaScript function called greet that takes parameters and doesn't return any value. (if not passed an argument then prints ‘Anonymous’)
// function greet(name) {
//     if(name) {
//       console.log("Hello");
//     } else {
//       console.log("Anonymous" );
//     }
//   }
//   greet(); 

// 15
// function exponent(a,b=2){
//     return a**b;
// }
// console.log(exponent(9));