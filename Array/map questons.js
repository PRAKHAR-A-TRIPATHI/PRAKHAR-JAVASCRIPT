// Example 1:
// const numbers = [4, 9, 16, 25];
// const newArr = numbers.map((Math)=>{
//     return Math/2;
// });
// console.log(newArr); // [2, 4.5, 8, 12.5]

// // Example 2:
// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(myFunction);
// function myFunction(num) {
//     return num * 10;
// }
// console.log(newArr); // [650, 440, 120, 40]

// // Example 3:
// const persons = [
//     {firstname : "Malcom", lastname: "Reynolds"},
//     {firstname : "Kaylee", lastname: "Frye"},
//     {firstname : "Jayne", lastname: "Cobb"}
// ];
// console.log(persons.map(getFullName));
// function getFullName(item) {
//     return [item.firstname,item.lastname].join(" ");
// }
// // ["Malcom Reynolds", "Kaylee Frye", "Jayne Cobb"]

// // Example 4:
// let arr = [2, 5, 6, 3, 8, 9];
// let newArr = arr.map(function(val, index) {
//     return {key: index, value: val * val};
// });
// console.log(newArr);
// // [{key: 0, value: 4}, {key: 1, value: 25}, {key: 2, value: 36}, {key: 3, value: 9}, {key: 4, value: 64}, {key: 5, value: 81}]

// // Example 5:
// let employees = [
//     {id:001,name:"Tommy",age:23,city:"New York"},
//     {id:002,name:"Mike",age:27,city:"Detroit"},
//     {id:003,name:"Lisa",age:25,city:"Chicago"}
// ];
// console.log(employees.map(employee => employee.name));
// // ["Tommy", "Mike", "Lisa"]

// // Example 6:
// let arr = [1.5,2.56,5.1,12.33];
// let newArr = arr.map(Math.round);
// console.log(newArr); // [2,3,5,12]

// // Example 7:
// let arr = ["apple","banana","cherry"];
// let newArr = arr.map(fruit => fruit.toUpperCase());
// console.log(newArr); // ["APPLE","BANANA","CHERRY"]

// // Example 8:
// let arr = ["apple","banana","cherry"];
// let newArr = arr.map(fruit => fruit.length);
// console.log(newArr); // [5,6,6]

// // Example 9:
// let arr = ["apple","banana","cherry"];
// let newArr = arr.map((fruit,index) => `Fruit ${index+1}: ${fruit}`);
// console.log(newArr); // ["Fruit 1: apple","Fruit 2: banana","Fruit 3: cherry"]

// // Example 10:
// let arr = ["apple","banana","cherry"];
// let newArr = arr.map((fruit,index,arr) => `Fruit ${index+1} of ${arr.length}: ${fruit}`);
// console.log(newArr); // ["Fruit 1 of 3: apple","Fruit 2 of 3: banana","Fruit 3 of 3: cherry"]

// // Example 11:
// let arr = [1.5,-2.56,-5.1,-12.33];
// let newArr = arr.map(Math.abs);
// console.log(newArr); // [1.5,2.56,5.1,12.33]

// // Example 12:
// let arr = [1.5,-2.56,-5.1,-12.33];
// let newArr = arr.map(num => num <0 ? -num : num);
// console.log(newArr); // [1.5,2.56,5.1,12.33]

// // Example13:
// let persons = [
//     {name:"Tommy",age:23},
//     {name:"Mike",age:27},
//     {name:"Lisa",age:25}
// ];
// let newPersons = persons.map(person => ({...person,salary:(person.age-18)*1000}));
// console.log(newPersons);
/*
[
    {name:"Tommy",age:23,salary:5000},
    {name:"Mike",age:27,salary:9000},
    {name:"Lisa",age:25,salary:7000}
]
*/

// // Example14:
// let persons = [
//     {name:"Tommy",age:23},
//     {name:"Mike",age:27},
//     {name:"Lisa",age:25}
// ];
// let newPersons = persons.map(person => ({...person,salary:(person.age-18)*1000,adult:person.age>=18}));
// console.log(newPersons);
// /*
// [
//     {name:"Tommy",age:23,salary:5000,adult:true},
//     {name:"Mike",age:27,salary:9000,adult:true},
//     {name:"Lisa",age:25,salary:7000,adult:true}
// ]
// */

// Example15:
// let persons = [
//     {name:"Tommy",age:23},
//     {name:"Mike",age:27},
//     {name:"Lisa",age:25}
// ];
// let newPersons = persons.map(person => ({...person,surname:patel,adult:person.age>=18}));
// console.log(newPersons);

// // Example16:
// let arr = [1.5,-2.56,-5.1,-12.33];
// let newArr = arr.map(num => num.toFixed(2));
// console.log(newArr); // ["1.50","-2.56","-5.10","-12.33"]

// // Example17:
// let arr = [1.5,-2.56,-5.1,-12.33];
// let newArr = arr.map(num => num.toString());
// console.log(newArr); // ["1.5","-2.56","-5.1","-12.33"]

// // Example18:
// let arr = [1,2,3,4];
// let newArr = arr.map(num => num*num);
// console.log(newArr); // [1,4,9,16]

// // Example19:
// let arr = [1,2,3,4];
// let newArr = arr.map(num => num*num*num);
// console.log(newArr); // [1,8,27,64]

// // Example20:
// let arr = [1,2,3,4];
// let newArr = arr.map(num => Math.pow(num,4));
// console.log(newArr); // [1,16,81,256]

// // Example21:
// let persons = [
//     {name:"Tommy",age:23},
//     {name:"Mike",age:27},
//     {name:"Lisa",age:25}
// ];
// let newPersons = persons.map(person => ({...person,salary:(person.age-18)*1000}));
// newPersons.forEach(person => console.log(`${person.name} earns $${person.salary} per year`));
// /*
// Tommy earns $5000 per year
// Mike earns $9000 per year
// Lisa earns $7000 per year
// */

// // Example22:
// let persons = [
//     {name:"Tommy",age:23},
//     {name:"Mike",age:27},
//     {name:"Lisa",age:25}
// ];
// let newPersons = persons.map(person => ({...person,salary:(person.age-18)*1000}));
// newPersons.forEach(person => console.log(`${person.name} is ${person.age>18 ? "an adult" : "not an adult"}`));
// /*
// Tommy is an adult
// Mike is an adult
// Lisa is an adult
// */

// // Example23:
// let persons = [
//     {name:"Tommy",age:23},
//     {name:"Mike",age:27},
//     {name:"Lisa",age:25}
// ];
// let newPersons = persons.map(person => console.log(`${person.name} is ${person.age} years old`));

// /*
// Tommy is 23 years old
// Mike is 27 years old
// Lisa is 25 years old
// */



// Example24:
// const numbers = [4, 9, 16, 25];
// const newArr = numbers.map(Math.sqrt).map(Math.round);
// console.log(newArr); // [2, 3, 4, 5]


