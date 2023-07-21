// let a = new Array(1,2,3,45,5,6,7,8,);
// console.log(a);

// push
// a.push(10);
// console.log(a);

// pop
// a.pop()
// console.log(a);

// unshift
// a.unshift(8)
// console.log(a);

// shift
// a.shift()
// console.log(a);

// include
// console.log(a.includes(9));

// indexof
// console.log(a.indexOf(2));

// join
// console.log(a.join("-")); \\return string

// slice
// console.log("a",a);
// console.log(a.slice(1,3)); return new array to slice does not change original array

// splice
// console.log(a.splice(1,3)); //maniplue original array

// const marvel  = ["thor","ironman","spinderman"];
// const dc= ["superman","batman","flash"];

// marvel.push(dc)
// console.log(marvel);

// concat  //return new array
// let concat = marvel.concat(dc);
// console.log(concat);

// spread opretor
// const allhero =[...marvel,...dc];
// console.log(allhero);

// flat
// const hero  = [1,2,3,[4,5,6],7,9,[6,7,[4,5]]]
// const real = hero.flat(Infinity);
// console.log(real);

// ARRAY.ISARRAY     cheack value sis array or note
// console.log (Array.isArray("prakhar"))

// Array.form convert value of array
// console.log(Array.from("prakhar"));
// console.log(Array.from({name:"prakhe"})); //  main

// let b = 100;
// let c = 200;
// let d  = 300;
// console.log(Array.of(b,c,d));

// for each loop
// const a= ["js","c++","java","python","ruby"];

// const value = a.forEach((a)=>{
//     return a;
// })

// console.log(value);

// filter method
// const num  = [1,2,34,5,67,88,3]

// let a= num.filter((item)=>item>4)
// console.log(a);

// const a = [];
// num.forEach((num)=>{
//     if(num>4){
//         a.push(num)
//     }
// })
// console.log(a);

// const num = [1,2,3,4,5,6,7,8,90];

// map method
// let a=num.map((item)=>item+10);
// console.log(a);

// chaing
// let a = num.map((a)=>a*10).map((a)=>a*10).filter((b)=> b>500);
// console.log(a);

// reduce mehod

// let total = num.reduce((acc,carr)=>acc)
// let total = num.reduce((acc,carr)=>{
//     console.log(`acc:${acc} and current value:${carr}`);
//     return acc+carr;
// },0)

// console.log(total);

// 1 -----------------------------------------------------------------------------------------------------
// const names  = [
//     {first_name: "Handnm", last_name: "L demo"},
//     {first_name: "Q Wei", last_name: "Alxezx"},
//     {first_name: "Pqwern", last_name: "Ruse"},
//     {first_name: "Wiruyn", last_name: "Ruby"},
//     {first_name: "Erpso", last_name: "Loal"},
//     {first_name: "Demors", last_name: "Poet"},
//     {first_name: "Aleos", last_name: "Lkeu"},
//     ]
//     // Write a code that adds new key in each object named
//     // full_name: first_name + last_name

// function fullName(arr){
//      arr.map((value)=>{
//         return value.fullName=value.first_name+" "+value.last_name;
//     })
//     return arr;
// }
// console.log(fullName(names));

// 2 -----------------------------------------------------------------------------------------------------
// const users  = [
//     {first_name: "Handnm", last_name: "L demo", age: 17},
//     {first_name: "Q Wei", last_name: "Alxezx", age: 30},
//     {first_name: "Pdeq Twern", last_name: "Ruse", age: 22},
//     {first_name: "Widfruyn", last_name: "Ruby", age: 11},
//     {first_name: "Erdfg Pso", last_name: "Loal", age: 34},
//     {first_name: "Dedfgmors", last_name: "Poet", age: 60},
//     {first_name: "Ale4tos", last_name: "Lkeu", age: 16},
//    ]
// //    Write a code that adds new key in each object named : isMature

// function isMature(arr){
//     arr.map((value)=>{
//         return value.isMature=value.age>=18;
//     })
//     return arr;
// }

// console.log(isMature(users));

// 3 -----------------------------------------------------------------------------------------------------
// let arr = [1,2,3,5]
// console.log(arr[-1]); //undefine

// 4 -----------------------------------------------------------------------------------------------------
// const nestedArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 7],
//   ];
//   let arr = nestedArray.flat(Infinity)
// // for(let i of arr){
// //     console.log(i);
// // }
// // for(let i in arr){
// //     console.log(arr[i]);
// // }

// 5 -----------------------------------------------------------------------------------------------------
// const nestedObject = {
//     name: "Vishal Kukreja",
//     age: 32,
//     address: {
//       street: "123 Mumbai fashion St",
//       city: "Midtown",
//       state: "MH",
//     },
//     hobbies: ["reading", "drawing", "gardening"],
//   };
// //  => print all items of this object in line

//  function getValue(obj){
//     for(let key in obj){
//                if(typeof obj[key] === "object"){
//                 getValue(obj[key]);
//                }else{
//                 console.log(obj[key]);
//                }
//             }
//             return obj;
//  }

//  getValue(nestedObject);

// 6 -----------------------------------------------------------------------------------------------------
// Write a program to check if an array contains any number (strictly) or not.
// Input:  [1,2,3] => true
// [“1”, “a”, “h”] => false
// [“a”, 3, “gh”] => true
// [“a”, ‘3df’, “gh”] => false

// function isNumber(arr){
//     let a=arr.some((value)=> typeof value === "number");
//     return a;
// }
// console.log(isNumber( [1,2,3]));
// console.log(isNumber( ['1','a','h']));
// console.log(isNumber( ['a',3,'gh']));
// console.log(isNumber( ['a',"3df",'gh']));
// console.log(isNumber( ['a',"3df",'gh',7]));

// 7 -----------------------------------------------------------------------------------------------------
// const numbers = [1, 2, 3, 4];
// 	// => convert all number to string in given array

// function convertString(arr){
//     let string = arr.toString()
//     return string;
// }
// console.log(convertString(numbers));

// 8 -----------------------------------------------------------------------------------------------------
// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map((num, index, array) => {
//   array.push(num * 2);
//   return num * 2;
// });
// console.log(numbers, doubled);

// 9 -----------------------------------------------------------------------------------------------------
const dount = [
  {
    id: "0001",
    type: "donut",
    name: "Cake",
    ppu: 0.55,
    batters: {
      batter: [
        { id: "1001", type: "Regular" },
        { id: "1002", type: "Chocolate" },
        { id: "1003", type: "Blueberry" },
        { id: "1004", type: "Devil's Food" },
      ],
    },
    topping: [
      { id: "5001", type: "None" },
      { id: "5002", type: "Glazed" },
      { id: "5005", type: "Sugar" },
      { id: "5007", type: "Powdered Sugar" },
      { id: "5006", type: "Chocolate with Sprinkles" },
      { id: "5003", type: "Chocolate" },
      { id: "5004", type: "Maple" },
    ],
  },
  {
    id: "0002",
    type: "donut2",
    name: "Raised",
    ppu: 0.55,
    batters: {
      batter: [{ id: "1001", type: "Regular" }],
    },
    topping: [
      { id: "5001", type: "None" },
      { id: "5002", type: "Glazed" },
      { id: "5005", type: "Sugar" },
      { id: "5003", type: "Chocolate" },
      { id: "5004", type: "Maple" },
    ],
  },
  {
    id: "0003",
    type: "donut3",
    name: "Old Fashioned",
    ppu: 0.55,
    batters: {
      batter: [
        { id: "1001", type: "Regular" },
        { id: "1002", type: "Chocolate" },
      ],
    },
    topping: [
      { id: "5001", type: "None" },
      { id: "5002", type: "Glazed" },
      { id: "5003", type: "Chocolate" },
      { id: "5004", type: "Maple" },
    ],
  },
  {
    id: "0004",
    type: "donut1",
    name: "Old Fashioned",
    ppu: 0.55,
    batters: {
      batter: [{ id: "1001", type: "Regular" }],
    },
    topping: [
      { id: "5001", type: "None" },
      { id: "5002", type: "Glazed" },
      { id: "5003", type: "Chocolate" },
      { id: "5004", type: "Maple" },
    ],
  },
];

//   filter donuts based on which have topping  Chocolate
// function getToppingChocolate(arr){
//     let choco=arr.filter((value)=>value.topping.some(topping =>topping.type === "Chocolate"));
//     return choco;
// }
// console.log(getToppingChocolate(dount));

// filter donuts based which have batter type is regular and topping have Chocolate
// function getregularToppingChoclate(dount) {
//     const filteredDonuts = dount.filter(donut => donut.batters.batter.some(batter => batter.type === "Regular") && donut.topping.some(topping => topping.type === "Chocolate"));
//   return filteredDonuts;
// }
// console.log(getregularToppingChoclate(dount));

// filter donuts based on which have topping chocolate and Sugar
// function getToppingChocolateandSugar(arr){
//     let filter = arr.filter((value)=>value.topping.some(topping => topping.type==="Chocolate")&&value.topping.some(topping => topping.type==="Sugar"));
//     return filter;
// }
// console.log(getToppingChocolateandSugar(dount));

// filter donuts based on ppu > 0.5
// function getPPU(arr){
//     return arr.filter((val)=>val.ppu>0.5);
// }
// console.log(getPPU(dount));

// bring all batters for all donuts in single array
// function bringAll(arr) {
//  let a = arr.map((item) => item.batters)
//  return a;
// }
// console.log(bringAll(dount))

// ilter donuts based on which have 2 and more than 2 batter in it
// function battermoreTwo(Arr){
//   return  Arr.filter(val => val.batters.batter.length>=2)
// }
// console.log(battermoreTwo(dount));

// 10 -----------------------------------------------------------------------------------------------------
// Get name initials
// input = "George Raymond Richard Martin"; Output: “GRRM”
// input = “george raymond Richard Martin”; Output: “ GRRM”

// function getShortForm(string){
//     let a = string.split(" ").map((value)=>value.charAt(0).toUpperCase()).join("");
//     return a;
// }
// console.log(getShortForm("George Raymond Richard Martin"));

// 11 -----------------------------------------------------------------------------------------------------
// Get output like example
// input = "Every developer likes to mix kubernetes and javascript";
// output = "E3y d7r l3s to mix k8s and j8t"

// function short(value){
//      let a =value.split(" ").map(value => {
//         if(value.length>3){
//             return value.at(0)+(value.length-2)+value.at(-1);
//         }else{
//             return value;
//         }
//      }).join(" ");

//      return a;
// }
// console.log(short("Every developer likes to mix kubernetes and javascript"));

// 12 -----------------------------------------------------------------------------------------------------

const products = [
    { name: "Product 1", price: 20, category: "Electronics" },
    { name: "Product 2", price: 30, category: "Clothes" },
    { name: "Product 3", price: 40, category: "Electronics" },
    { name: "Product 4", price: 50, category: "Clothes" },
    { name: "Product 5", price: 60, category: "Clothes" },
    { name: "Product 6", price: 70, category: "Electronics" },
    { name: "Product 7", price: 80, category: "Clothes" },
    { name: "Product 8", price: 90, category: "Electronics" },
  ];
//   Note: 2 questions
//   Que1 => output: 
//       {
//      Clothes: 4,
//      Electronics: 4
//       }
//   Que 2 => count the total average of each category price.

// function filterCaregory(arr){
//   let categrory = arr.reduce((acc,value)=>{
//      acc[value.category]=(acc[value.category]||0)+1;
//      return acc;
//   },{ })
//   return categrory;
// }
// console.log(filterCaregory(products));

// function averagePrice(arr){
//   let average=arr.reduce((acc,value)=>{
//     acc[value.category]=(acc[value.category]||0);
//     acc[value.category]+=value.price;
//     return acc;
//   },{})  

//   return average;
// }
// console.log(averagePrice(products));




// 14 ----------------------------------------------------------------------------------------------------------
// Make a function that returns the grouped data based on first letter of the string.
// For Example: [“Jeel” , “Prakhar” , “Bhakti”, “Vansh”, “Meghna”, “Bhaumik”, “Pujan”, “Rudra”, “Sachin” , “Dhruval”]
// Output: {
// 		J: [“Jeel”],
// 		P: [“Pakhar”, “Pujan”],
// 		B: [“Bhakti”, “Bhaumik”],
// 		…….. And so on
// 	    }

// 23--------------------------------------------------------------------------------------
// let arr = [1, 2, 3, 4, 5];
// let sumOfSquares = arr.reduce((sum, num) => sum + Math.pow(num, 2), 0);
// console.log(sumOfSquares); // Output: 55

// 24-------------------------------------------------------------------------------------------------
// const students = [
//   { name: 'Alice', age: 20, grade: 'A' },
//   { name: 'Bob', age: 18, grade: 'B' },
//   { name: 'Charlie', age: 19, grade: 'A' },
//   { name: 'David', age: 20, grade: 'C' },
// ];
	// => sort by age
	// => sort by grade
	// => sort by name
	// => average of ages
	// => sum of ages

  // 35-----------------------------------------------
  // function difference(arr1, arr2) {
  //   // Flattening the arrays
  //   arr1 = arr1.flat(Infinity);
  //   arr2 = arr2.flat(Infinity);
  
  //   // Finding the symmetric difference
  //   let result = arr1
  //     .filter((x) => !arr2.includes(x))
  //     .concat(arr2.filter((x) => !arr1.includes(x)));
  
  //   // Sorting the result
  //   result.sort((a, b) => a - b);
  
  //   return result;
  // }
  
  // // Test Data
  // console.log(difference([1, 2, 3], [100, 2, 1, 10])); // Output: [3, 10, 100]
  // console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]])); // Output: [6]
  // console.log(difference([1, 2, 3], [100, 2, 1, 10])); // Output: [3, 10, 100]
  