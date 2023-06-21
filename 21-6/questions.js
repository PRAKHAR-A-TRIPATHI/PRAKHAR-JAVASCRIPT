// #1
// function sayhello(){
//     console.log("hello");
// }
// sayhello();

// #2
//with argument , with return
// function calculateSum(a, b) {    
//     return a + b;
// }
// console.log(calculateSum(2.5,300));

// without argument, without return
// function calculateSum(){    
//     let a = 222, b =333;
//     console.log(a + b);
// }
// calculateSum();


//with argument , without return
// function calculateSum(a, b) {        
//     console.log(a + b);
// }
// calculateSum(20,17);

// without argument, with return
// function calculateSum(){                 
//     let a = 2, b =3;
//     return a + b;
// }
// console.log(calculateSum());

// #3
// function printArray(arr){
//     console.log(arr);
//   }
//   const arr = [1, 2,3,4,5,6];
// printArray(arr);

// #4
// const multiple = function(a, b) {
//     return a * b;
//   };
//   console.log(multiple(5, 7));  

// const multiple2 = (a, b) => a * b;
// console.log(multiple2(5,9));

// #5
// function myfunctions(){
//     console.log("hello");
// }
// myfunctions();

// //#6
// let square=(a) => a*a;
// console.log(square(8));

// // #7
// function getFullname(firstname,lastname){
//        return firstname+lastname;
// }
// let fullname = getFullname("Prakhar","Tripathi");
// console.log(fullname);

// #8
// function calculateArea(legnth,widht){
//    var area = legnth*widht;
//    return area;
// }
// let areaofrectangel=calculateArea(20,50);
// console.log(areaofrectangel);

// #9
// function isEven(num){
//     return num % 2===0;
// }
// console.log(isEven(2));

// #10
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


// #11
// a 
// function calculatePrice(price, discount = 0.1) {
//     return price - (price * discount);
//   }
// let value = calculatePrice(500)  ;
// console.log(value);
// b 
// const calculatePrice = (price, discount = 0.1) => {
//     return price - (price * discount);
//   }
//   let value = calculatePrice(500,0.5)
//   console.log(value);
  
// #14
// function greet(name) {
//     if(name) {
//       console.log("Hello");
//     } else {
//       console.log("Anonymous" );
//     }
//   }
//   greet(); 

// #15
// function exponent(base, power = 2) {
//     return Math.pow(base, power);
//   }
// console.log(exponent(5));  
function exponent(a,b=2){
     return a**b;
}
console.log(exponent(9));
  
  
  