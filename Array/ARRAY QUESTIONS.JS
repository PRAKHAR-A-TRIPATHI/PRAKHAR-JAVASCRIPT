//1
// const names = [
//     { first_name: "Asndnm", last_name: "L demo" },
//     { first_name: "Qpweui", last_name: "Alxezx" },
//     { first_name: "Pqwern", last_name: "Ruse" },
//     { first_name: "Wiruyn", last_name: "Ruby" },
//     { first_name: "Erpso", last_name: "Loal" },
//     { first_name: "Demors", last_name: "Poet" },
//     { first_name: "Aleos", last_name: "Lkeu" },
//   ];
  
//   names.map((name)=>{
//     name.full_name = name.first_name+" "+name.last_name;
//   })

    // names.forEach((name) => {
    //   name.full_name = name.first_name + ' ' + name.last_name;
    // });
  
//   for (let i = 0; i < names.length; i++) {
//       const fullName = names[i].first_name + " " + names[i].last_name;
//       names[i].full_name = fullName;
//     }
  
    // console.log(names);


//2
const users  = [
    {first_name: "Handnm", last_name: "L demo", age: 17},
    {first_name: "Q Wei", last_name: "Alxezx", age: 30},
    {first_name: "Pdeq Twern", last_name: "Ruse", age: 22},
    {first_name: "Widfruyn", last_name: "Ruby", age: 11},
    {first_name: "Erdfg Pso", last_name: "Loal", age: 34},
    {first_name: "Dedfgmors", last_name: "Poet", age: 60},
    {first_name: "Ale4tos", last_name: "Lkeu", age: 16},
   ]
//    Write a code that adds new key in each object named : isMature

// for (const user of users) {
//     user.isMature = user.age>=18;
// }


// users.forEach((name)=>{
//     name.isMature = users.age>=18;
// })

users.map((name)=>{
    name.isMature = users.age>=18;
    // return users.age>=18;
    console.log(users);
})



//3
// let arr = [1,2,3,5]
// console.log(arr[-1]); //undefine


//4
// const nestedArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
// console.log(nestedArray[1][2]);  
// console.log(nestedArray);
// for (const item of nestedArray) {
//     console.log(item);
//   }
// nestedArray.map((item)=>{
//     console.log(item);
// })


//5
const nestedObject = {
    name: "Vishal Kukreja",
    age: 32,
    address: {
      street: "123 Mumbai fashion St",
      city: "Midtown",
      state: "MH",
    },
    hobbies: ["reading", "drawing", "gardening"],
  };
//  => print all items of this object in line
// const{name,age,address:{street,city,state},hobbies}=nestedObject;

// console.log(name,age,street,city,state,hobbies[0],hobbies[1],hobbies[2]);

// for (const key in nestedObject) {
//     console.log(`${key}: ${nestedObject[key]}`);
//   }
// console.log(nestedObject);




//5
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
//  => print all items of this object in line 
 //Output:
//  Vishal Kukreja
//  32
//  123 Mumbai fashion St
//  Midtown
//  MH
//  reading
//  drawing
//  gardening

// function printItems(obj) {
//     for (let key in obj) {
//       if (typeof obj[key] === "object") {
//         printItems(obj[key]); // Recursively call the function for nested objects and arrays
//       } else {
//         console.log(obj[key]);
//       }
//     }
//   }
  
//   printItems(nestedObject);


//6.
// Write a program to check if an array contains any number (strictly) or not.
// Input:  [1,2,3] => true
// [“1”, “a”, “h”] => false
// [“a”, 3, “gh”] => true
// [“a”, ‘3df’, “gh”] => false



// 6
// function containsNumber(array) {
//     for (let i = 0; i < array.length; i++) {
//       if (typeof array[i] === "number") {
//         return true;
//       }
//     }
//     return false;
//   }
  
// //   // Test cases
//   console.log(containsNumber([1, 2, 3])); // true
//   console.log(containsNumber(["1", "a", "h"])); // false
//   console.log(containsNumber(["a", 3, "gh"])); // true
//   console.log(containsNumber(["a", '3df', "gh"])); // false

