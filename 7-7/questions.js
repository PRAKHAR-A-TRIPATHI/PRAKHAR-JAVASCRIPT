//  1
//  const names  = [
// {first_name: "Handnm", last_name: "L demo"},
// {first_name: "Q Wei", last_name: "Alxezx"},
// {first_name: "Pqwern", last_name: "Ruse"},
// {first_name: "Wiruyn", last_name: "Ruby"},
// {first_name: "Erpso", last_name: "Loal"},
// {first_name: "Demors", last_name: "Poet"},
// {first_name: "Aleos", last_name: "Lkeu"},
// ]
// function full_name(arr){
//     arr.forEach(element => {
//         element.full_name=element.first_name+" "+element.last_name;
//     });
//     return arr;
// }
// console.log(full_name(names));

// // 2
// const users  = [
//     {first_name: "Handnm", last_name: "L demo", age: 17},
//     {first_name: "Q Wei", last_name: "Alxezx", age: 30},
//     {first_name: "Pdeq Twern", last_name: "Ruse", age: 22},
//     {first_name: "Widfruyn", last_name: "Ruby", age: 11},
//     {first_name: "Erdfg Pso", last_name: "Loal", age: 34},
//     {first_name: "Dedfgmors", last_name: "Poet", age: 60},
//     {first_name: "Ale4tos", last_name: "Lkeu", age: 16},
//    ]
// function isMature (array){
//     array.forEach(element => {
//         element.isMature=element.age>18
//     });
//     return array;
// }   
// console.log(isMature(users));

// 3
// let arr = [1,2,3,5]
// console.log(arr[-1]);  
// output : undefined;

// 4
// const nestedArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];

// let arr = nestedArray.flat();
// for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index]);   
// }

// 5
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
// function printObject(obj){
//     for(let key in obj){
//        if(typeof obj[key] === "object"){
//         printObject(obj[key]);
//        }else{
//         console.log(obj[key]);
//        }
//     }
//     return obj;
// }
// printObject(nestedObject);


// 6
// function printArray(arr) {
//     for (const i of arr) {
//       if (typeof i === "number") {
//         return true;
//       }
//     }
//     return false;
//   }
//   console.log(printArray(["1","r","h"]));

// 7
// const numbers = [1, 2, 3, 4];

// let tostring = numbers.toString();
// console.log(tostring);

// const result = numbers.map(n => String(n));
// console.log(result);

// 8
// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map((num, index, array) => {
//   array.push(num * 2);
//   return num * 2;
// });
// console.log(numbers, doubled);

// 9


// 10
