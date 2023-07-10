//  1 ------------------------------------------------------------------------------------------------
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

// // 2 ------------------------------------------------------------------------------------------------
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

// 3 ------------------------------------------------------------------------------------------------
// let arr = [1,2,3,5]
// console.log(arr[-1]);
// output : undefined;

// 4 ------------------------------------------------------------------------------------------------
// const nestedArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];

// let arr = nestedArray.flat();
// for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index]);
// }

// 5 ------------------------------------------------------------------------------------------------
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

// 6 ------------------------------------------------------------------------------------------------
// function containsNumber(arr) {
//   return arr.find(element => typeof element === 'number') !== undefined;
// }
// console.log(containsNumber([1,2,3])); // true
// console.log(containsNumber(["1", "a", "h"])); // false
// console.log(containsNumber(["a", 3, "gh"])); // true
// console.log(containsNumber(["a", '3df', "gh"])); // false

// 7 ------------------------------------------------------------------------------------------------
// const numbers = [1, 2, 3, 4];

// let tostring = numbers.toString();
// console.log(tostring);

// const result = numbers.map(n => String(n));
// console.log(result);

// 8 ------------------------------------------------------------------------------------------------
// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map((num, index, array) => {
//   array.push(num * 2);
//   return num * 2;
// });
// console.log(numbers, doubled);

// 9 ------------------------------------------------------------------------------------------------
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

// filter donuts based on which have topping  Chocolate
// const filteredDonuts = dount.filter(donut => donut.topping.some(topping => topping.type === "Chocolate"));
// console.log(filteredDonuts);

// filter donuts based which have batter type is regular and topping have Chocolate
// const filteredDonuts = dount.filter(donut => donut.batters.batter.some(batter => batter.type === "Regular") && donut.topping.some(topping => topping.type === "Chocolate"));
// console.log(filteredDonuts);

// filter donuts based on which have topping chocolate and Sugar
// const filteredDonuts = dount.filter(donut => donut.topping.some(topping => topping.type === "Chocolate") && donut.topping.some(topping => topping.type === "Sugar"));
// console.log(filteredDonuts);

// filter donuts based on ppu > 0.5
// const filteredDonuts = dount.filter(donut => donut.ppu > 0.5);

// bring all batters for all donuts in single array
// const allBatters = dount.flatMap(donut => donut.batters.batter);
// console.log(allBatters);

// filter donuts based on which have 2 and more than 2 batter in it
// const filteredDonuts = dount.filter(donut => donut.batters.batter.length >= 2);
// console.log(filteredDonuts);

// // 10 ------------------------------------------------------------------------------------------------
// function getInitials(name) {
//     return name.split(' ').map(word => word.charAt(0).toUpperCase()).join('');
// }
// console.log(getInitials("George Raymond Richard Martin"));

// 11 ------------------------------------------------------------------------------------------------
// Get output like example
// input = "Every developer likes to mix kubernetes and javascript";
// output = "E3y d7r l3s to mix k8s and j8t"
// function shortenSentence(sentence) {
//     return sentence.split(' ').map(word => {
//         if (word.length > 3) {
//             return word[0] + (word.length - 2) + word[word.length - 1];
//         } else {
//             return word;
//         }
//     }).join(' ');
// }
// console.log(shortenSentence("Every developer likes to mix kubernetes and javascript"));

// 12 ------------------------------------------------------------------------------------------------
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
//1
//   const categoryCounts = products.reduce((counts, product) => {
//     counts[product.category] = (counts[product.category] || 0) + 1;
//     return counts;
// }, {});
// console.log(categoryCounts);

// 2
// const categoryAverages = products.reduce((averages, product) => {
//     averages[product.category] = (averages[product.category] || { sum: 0, count: 0 });
//     averages[product.category].sum += product.price;
//     averages[product.category].count += 1;
//     return averages;
// }, {});

// const result = Object.entries(categoryAverages).reduce((acc, [category, { sum, count }]) => {
//     acc[category] = sum / count;
//     return acc;
// }, {});
// console.log(result);

// const employees = [
//   { name: "John", salary: 50000, department: "IT" },
//   { name: "Jane", salary: 60000, department: "HR" },
//   { name: "Bob", salary: 55000, department: "IT" },
//   { name: "Sophie", salary: 75000, department: "HR" },
//   { name: "Mike", salary: 65000, department: "IT" },
//   { name: "Emily", salary: 80000, department: "HR" },
//   { name: "David", salary: 70000, department: "IT" },
// ];
//   1
//   const departmentAverages = employees.reduce((averages, employee) => {
//     averages[employee.department] = (averages[employee.department] || { sum: 0, count: 0 });
//     averages[employee.department].sum += employee.salary;
//     averages[employee.department].count += 1;
//     return averages;
// }, {});

// Object.keys(departmentAverages).forEach(department => {
//     departmentAverages[department] = departmentAverages[department].sum / departmentAverages[department].count;
// });
//   console.log(departmentAverages);

// 2
// const departmentSalaries = employees.reduce((salaries, employee) => {
//     salaries[employee.department] = (salaries[employee.department] || []);
//     salaries[employee.department].push(employee.salary);
//     return salaries;
// }, {});
// console.log(departmentSalaries);

// 14 ------------------------------------------------------------------------------------------------
// function groupByFirstLetter(strings) {
//     return strings.reduce((groups, string) => {
//         const firstLetter = string[0];
//         groups[firstLetter] = (groups[firstLetter] || []);
//         groups[firstLetter].push(string);
//         return groups;
//     }, {});
// }
// let data =["jeel","prakhar","bhakti","mehgna","vansh","bhaumik","pujan","rudhra","sachin","Dhurval","new"];
// console.log(groupByFirstLetter(data));

// 15 ------------------------------------------------------------------------------------------------
// //depth
// function flattenDepth(arr, depth) {
//     if (depth === 0) {
//       return arr;
//     }

//     let arr2 = [];

//     for (let i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i])) {
//         const nested = flattenDepth(arr[i], depth - 1);
//         arr2 = arr2.concat(nested);
//       } else {
//         arr2.push(arr[i]);
//       }
//     }

//     return arr2;
//   }

//   const nestedArray = [1, [2, [3, [4]]]];
//   const flattenedArray = flattenDepth(nestedArray, Infinity);
//   console.log(flattenedArray);

// without dept

// function flat(arr) {
//     let flattened = [];

//     arr.forEach((element) => {
//       if (Array.isArray(element)) {
//         flattened = flattened.concat(flat(element));
//       } else {
//         flattened.push(element);
//       }
//     });

//     return flattened;
//   }

// 16 ------------------------------------------------------------------------------------------------
// function filter(arr, callback) {
//     let filtered = [];

//     for (let i = 0; i < arr.length; i++) {
//       if (callback(arr[i], i, arr)) {
//         filtered.push(arr[i]);
//       }
//     }

//     return filtered;
//   }
//   let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function isEven(number,index,arr) {
//   return number % 2 === 0;
// }

// let filteredNumbers = filter(numbers, isEven);
// console.log(filteredNumbers); // Output: [2, 4, 6, 8, 10]

// 17 ------------------------------------------------------------------------------------------------
// function map(arr, callback) {
//     let arr1 = [];

//     for (let i = 0; i < arr.length; i++) {
//       arr1.push(callback(arr[i], i, arr));
//     }

//     return arr1;
//   }
//   let numbers = [1, 2, 3, 4, 5];

// function double(number) {
//   return number * 2;
// }

// let doubledNumbers = map(numbers, double);
// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// 18 ------------------------------------------------------------------------------------------------
// const input= [
//     { name: "John", salary: 50000, department: "IT" },
//     { name: "Jane", salary: 60000, department: "HR" },
//     { name: "Bob", salary: 55000, department: "IT" },
//     { name: "Sophie", salary: 75000, department: "HR" },
//     { name: "Mike", salary: 65000, department: "IT" },
//     { name: "Emily", salary: 80000, department: "HR" },
//     { name: "David", salary: 70000, department: "IT" },
//   ];
// //   1
//   function newArray(data) {
//     let obj = {};

//     data.forEach((object) => {
//       const firstLetter = object.name[0];

//       if (obj[firstLetter]) {
//         obj[firstLetter].push(object);
//       } else {
//         obj[firstLetter] = [object];
//       }
//     });

//     return obj;
//   }

// console.log(newArray(input));

// 2
// function newArray(data) {
//     let obj = {};

//     data.forEach((object) => {
//       const department = object.department;

//       if (obj[department]) {
//         obj[department].push(object);
//       } else {
//         obj[department] = [object];
//       }
//     });

//     return obj;
//   }

//   let obj = newArray(input);
//   console.log(obj);

// 19 ------------------------------------------------------------------------------------------------
// let arr1 = [{ a: 34 }, { a: 45 }, { a: 12 }, { a: 5 }, { a: 78 }];
// let arr2 = arr1.map((item) => item);
// arr2[2].b = 45;
// console.log(arr1);
// console.log(arr2);

// 20\ ------------------------------------------------------------------------------------------------
// let arr1 = [{ a: 34 }, { a: 45 }, { a: 12 }, { a: 5 }, { a: 78 }];
// let arr2 = arr1.map((item) => item.a * 2);
// console.log(arr1);
// console.log(arr2);

// 21 ------------------------------------------------------------------------------------------------
// let arr = [1,2,3,4,5];
// let arr2 = arr.reduce((a, c) => a + c).map(item => item);
// console.log(arr2);

// 23 ------------------------------------------------------------------------------------------------
// const example = ({ a, b, c }) => {
// 	console.log(a, b, c);  
// 	};
// 	example(0, 1, 2);

// 24 ------------------------------------------------------------------------------------------------
// const students = [
//   { name: 'Alice', age: 20, grade: 'A' },
//   { name: 'Bob', age: 18, grade: 'B' },
//   { name: 'Charlie', age: 19, grade: 'A' },
//   { name: 'David', age: 20, grade: 'C' },
// ];

// => sort by age
// console.log(students.sort((s1, s2) => s1.age - s2.age));	

// => sort by grade
// const byGrade = students.sort((a,b)=>a.grade-b.grade);
// const byGrade = students.sort((a,b)=>{
//     if (a.grade>b.grade){
//         return 1;
//     }else{
//         return -1;
//     }
// });
// console.log(byGrade);

// => sort by name
// const byName = students.sort((a, b) => {
// //   if (a.name.length > b.name.length) {
//   if (a.name > b.name) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(byName);

// => average of ages
// const averageAge = students.reduce((a,b)=>{
//      return a+=b.age
// },0)
// const average1 = averageAge/students.length;
// console.log(average1);

// => sum of ages
  // const sum = students.reduce((a,b)=>{
  //          return a+=b.age
  //     },0)
  //     // const average1 = averageAge/students.length;
  //     console.log(sum);

  // 25 ------------------------------------------------------------------------------------------------
  // const nestedArray = [[1, 2], [3, 4], [5, 6]];

// let flate = nestedArray.reduce((a,b)=>{
//     return a.concat(b);
// });
// console.log(flate);

// 26 ------------------------------------------------------------------------------------------------

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// let squareofEven = numbers.filter((a)=>{
//    return a%2==0;
// }).map((a)=> a*a)

// console.log(squareofEven);

// 27 ------------------------------------------------------------------------------------------------
// const numbers = [1,2, 2, 3, 4, 4, 5];
// let filterArray = numbers.filter((a,b,c)=>{
//     return c.indexOf(a)===b;
// });
// console.log(filterArray);

// 28 ------------------------------------------------------------------------------------------------
// const words = ["apple", "banana", "orange"];

// let find = words.find(value=>value.charAt(0).includes('a'))
// console.log(find);

// 29 ------------------------------------------------------------------------------------------------
// const numbers = [2, 4, 6, 8, 9, 10,];

// let find=numbers.findIndex((a)=>a%2!==0)
// console.log(find);

// 30 ------------------------------------------------------------------------------------------------
// function factorial(n) {
//   if (n === 0) {
//       return 1;
//   } else {
//       return n * factorial(n-1);
//   }
// }
// console.log(factorial(5));

// 31--------------------------------------------------------------------------------------------
// const people = [
//   { name: "Alice", age: 18 },
//   { name: "Bob", age: 20 },
//   { name: "Charlie", age: 19 },
//   { name: "David", age: 21 },
// ];

// function findIndex(arr) {
//     let find = arr.reduce((a,b,c)=>{
//         if (b.name.charAt(0) === "A" && b.age <= 20) {
//             return c;
//         }
//         return a;
//     },"")
//     return find;
// }  
// console.log(findIndex(people));

// 33--------------------------------------------------------------------------------------------
// function fun_name(arrayOfArray, array) {
//   return arrayOfArray.reduce((acc, subArray) => {
//       if (subArray.length === array.length && subArray.every((val, index) => val === array[index])) {
//           return true;
//       }
//       return acc;
//   }, false);
// }

// console.log(fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [1, 2]));
// console.log(fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [2, 1]));

// 32-------------------------------------------------------------------------------------
// function fun_name(arrayOfArray, array) {
//   return arrayOfArray.reduce((acc, subArray) => {
//       if (subArray.length === array.length && subArray.slice().sort().toString() === array.slice().sort().toString()) {
//           return true;
//       }
//       return acc;
//   }, false);
// }
// console.log(fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [2, 1]));
// console.log(fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [1, 2]));

// 34-----------------------------------------------------------------------------------------
// function union(arr1, arr2) {
//     var arr3 = arr1.concat(arr2); // concatenate the two arrays

//     let filterArray = arr3.filter((a,b,c)=>{
//             return c.indexOf(a)===b;
//         });

//     return filterArray;
//   }

//   console.log(union([1, 2, 3], [100, 2, 1, 10]));

// 35------------------------------------------------------------------------------------------------
// function difference1(arr1, arr2) {
//     const flattenedArr1 = arr1.flat(Infinity);
//     const flattenedArr2 = arr2.flat(Infinity);
//     const difference = flattenedArr2.filter((elem) => !flattenedArr1.includes(elem));
//     return difference;
//   }

//   console.log(difference1([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));
//   // Output: ["6"]
// console.log(difference1([1, 2, 3], [100, 2, 1, 10]));
// console.log(difference1([1, 2, 3], [100, 2, 1, 10]));
// 36-----------------------------------------------------------------------------------------


// let arr = [10,20,10,40,50,60,70];
// let sum = 50;
// let output = [];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] + arr[j] === sum) {
//       output.push(arr[i], arr[j]);
//     }
//   }
// }

// console.log(output);

// 37---------------------------------------------------------------------------------------------
// function filterTruthyValues(array) {
//     // filter function always print true value   IN THE NEW ARRAY
//     var result = array.filter((a)=>{
//         return a;
//     });

//     return result;
//   }

//   var array = [NaN, 0, 15, false, -22, '', undefined, 47, null];

//   console.log(filterTruthyValues(array));

// 38
// function num_string_range(start, end, step) {
//     // Determine the type of start and end values
//     const isNumber = typeof start === 'number' && typeof end === 'number';
//     const isString = typeof start === 'string' && typeof end === 'string';
  
//     // Swap start and end values if necessary
//     if (isNumber && start > end) {
//       [start, end] = [end, start];
//     } else if (isString && start.localeCompare(end) > 0) {
//       [start, end] = [end, start];
//     }
  
//     // Initialize the range array
//     const range = [];
  
//     // Generate the range
//     for (let i = start; isNumber ? i <= end : i.localeCompare(end) <= 0; i += step) {
//       range.push(i);
//     }
  
//     return range;
//   }
  
//   // Test cases
//   console.log(num_string_range('a', "z", 2)); // Output: ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
//   console.log(num_string_range("Z", "A", 2)); // Output: ["Z", "X", "V", "T", "R", "P", "N", "L", "J", "H", "F", "D", "B"]
//   console.log(num_string_range(0, -5, 1)); // Output: [0, -1, -2, -3, -4, -5]
//   console.log(num_string_range(0, 25, 5)); // Output: [0, 5, 10, 15, 20, 25]
//     console.log(num_string_range(20, 5, 5)); // Output: [20, 15, 10, 5]
  
// 39---------------------------------------------------------------------------------------------
// function remove_array_element(arr, element) {
//     var result = arr.filter(function(value) {
//       return value !== element;
//     });

//     return result;
//   }

//   console.log(remove_array_element([2, 5, 9, 6], 5)); // Output: [2, 9, 6]

// 40-------------------------------------------------------------------------------------
// function contains(arr, element) {
//     return arr.includes(element);
//   }
//   var arr = [2, 5, 9, 6];

//   console.log(contains(arr, 5));
//   console.log(contains(arr, 10));

// 41---------------------------------------------------------------------------------------
//   function countArrays(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             count++;
//         }
//     }
//     return count;
// }

//   console.log(countArrays([2, 8, [6], 3, 3, 5, 3, 4, [5, 4]])); 
//   console.log(countArrays([2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]]])); 

// 42
// function findMaxLength(arr) {
//     const subarrays = arr.filter(Array.isArray);
//     const lengths = subarrays.map(subarray => subarray.length);
//     const maxLength = lengths.reduce((max, length) => Math.max(max, length), 0);
//     return maxLength;
//   }
  
//   console.log(findMaxLength([2, 8, [6], 3, 3, 5, 3, 4, [5, 4]])); 
//   console.log(findMaxLength([2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]]])); 
//   console.log(findMaxLength([2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]], [23, 56]])); 
//   console.log(findMaxLength([1, 5, 2, 6, 4, 23, 89])); 
  
// 43
function isFactorChain(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] % arr[i - 1] !== 0) {
        return false;
      }
    }
    
    return true;
  }
  
  console.log(isFactorChain([2, 4, 8, 16, 32])); // Output: true
  console.log(isFactorChain([2, 4, 16, 32, 68])); // Output: false
  console.log(isFactorChain([2, 4, 16, 32, 64])); // Output: true
