let donuts = [
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

// //1
// function toppingChocolate(arr) {
//   let a = arr.filter((item) => item.topping.filter(topping => topping.type === "Chocolate").length );
//   return a
// }
// console.log(toppingChocolate(donuts));

//2
// function regularToppingChocolate(arr) {
//   let a = arr.filter((item) => item.topping.filter(topping => topping.type === "Chocolate").length);
//   let b = arr.filter((item) => item.batters.batter.filter(batter => batter.type === "Regular").length);
//   return a,b;
// }
// console.log(regularToppingChocolate(donuts));

//3
// function toppingChocolateSugar(arr) {
//   let a = arr.filter((item) => item.topping.filter(top => top.type === "Chocolate").length &&
//    item.topping.filter(top => top.type === "Sugar").length);
//    return a;
// }
// console.log(toppingChocolateSugar(donuts));

//4
// function ppuChecker(arr) {
//    let a = arr.filter((val)=> val.ppu > 0.5)
//    return a
// }
// console.log(ppuChecker(donuts));

//5
// function bringAll(arr) {
//  let a = arr.map((item) => item.batters)
//  return a;
// }
// console.log(bringAll(donuts));

//6
// function batterTwoandmorethan(arr){
//   let a= arr.filter(value => value.batters.batter.length>=2);
//   return a;
// }
// console.log(batterTwoandmorethan(donuts));
// const result = donuts.filter(donut => donut.batters.batter.length >= 2);

// //1
// let value = donuts.filter((item)=>item.topping.filter((topping)=>topping[i].type == "Chocolate"))
// console.log(value);


// function toppingChocolate(array) {
//     let a = donuts.filter((value, index, arr) => {
//         let topping = value.topping;
//         for (let i = 0; i < topping.length; i++) {
//             if (topping[i].type == "Chocolate"){
//                 console.log(value.type+":");
//                 console.log(value);
//                 // return value;
//             }
//         }
//     });
//     console.log(a);
//   }
//   toppingChocolate(donuts);

//2
// const result = donuts.filter(donut => donut.batters.batter.filter(batter => batter.type === 'Regular') && donut.topping.filter(topping => topping.type === 'Chocolate'));

//3

// const result = donuts.filter(donut => donut.topping.some(topping => topping.type === 'Chocolate' || topping.type === 'Sugar'));

//4
// const result = donuts.filter(donut => donut.ppu > 0.5);

//5
// const result = [].concat(...donuts.map(donut => donut.batters));
// console.log(result);
//6
// const result = donuts.filter(donut => donut.batters.batter.length >= 2);

// console.log(result);
// console.log(result);

//10 Get name initials
// input = "George Raymond Richard Martin"; Output: “GRRM”
// input = “george raymond Richard Martin”; Output: “ GRRM”

// function getInitials(name) {
//   let initials = name.split(' ').map(value => value.charAt(0).toUpperCase()).join('');
//   return initials;
// }

// function getInitials(name){
//   let initials = name.split(' ');
//   name.filter(value => value.charAt(0).toUpperCase()).join('');
//   return initials;
// }

// function getInitials(name) {
//   let initials = name.split(' ').filter(word => word).map(word => word.charAt(0).toUpperCase()).join('');
//   return initials;
// }

// let name1 = "George Raymond Richard Martin";
// let initials1 = getInitials(name1);
// console.log(initials1);

// let name2 = "george raymond Richard Martin";
// let initials2 = getInitials(name2);
// console.log(initials2); 

// 11
// Get output like example
// input = "Every developer likes to mix kubernetes and javascript";
// output = "E3y d7r l3s to mix k8s and j8t"

// function shortenWords(sentence) {
//   let words = sentence.split(' ');
//   let result = words.map(word => {
//     if (word.length > 3) {
//       return word.charAt(0) + (word.length - 2) + word.charAt(word.length - 1);
//     } else {
//       return word;
//     }
//   });
//   return result.join(' ');
// }
// let input = "Every developer likes to mix kubernetes and javascript";
// let output = shortenWords(input);
// console.log(output); // Output: "E3y d7r l3s to mix k8s and j8t"

//12
const products = [
  { name: "Product 1", price: 20, category: "Electronics" },
  { name: "Product 2", price: 30, category: "Clothes" },
  { name: "Product 3", price: 40, category: "Electronics" },
  { name: "Product 4", price: 50, category: "Clothes" },
  { name: "Product 5", price: 60, category: "Clothes" },
  { name: "Product 6", price: 70, category: "Electronics" },
  { name: "Product 7", price: 80, category: "Clothes" },
  { name: "Product 8", price: 90, category: "Electronics" },
  // {name:"product 9",price:80,category:"Electronics"}
];


// 1 
function propertyCounter(arrayName) {
    let newObject = {};
    let Clothes = arrayName.filter(value => value.category == "Clothes");
    let Electronics = arrayName.filter(value => value.category == "Electronics");
    let a = Clothes.length;
    let b = Electronics.length;
    newObject.Clothes = a;
    newObject.Electronics = b;
    return newObject 
}
console.log(propertyCounter(products));

//2
// function averagePrice(products) {
//     let a = 0;
//     let b = 0;
//     let c = 0;
//     let d = 0;
//     for (let i = 0; i < products.length; i++) {
//         if (products[i].category == "Clothes") {
//             a += products[i].price;
//             b++;
//             // console.log(a);
//         } else if (products[i].category == "Electronics") {
//             c += products[i].price;
//             d++;
//             // console.log(c);
//         }
//     }
//     return { Clothes: a / b, Electronics: c / d }
// }
// let aveObject = averagePrice(products);
// console.log(aveObject);

// function calculateAveragePriceByCategory(products) {
//   const categoryAverages = {};

//   products.forEach(product => {
//     const { category, price } = product;

//     if (!categoryAverages[category]) {
//       categoryAverages[category] = { total: 0, count: 0 };
//     }

//     categoryAverages[category].total += price;
//     categoryAverages[category].count++;
//   });

//   for (const category in categoryAverages) {
//     const { total, count } = categoryAverages[category];
//     categoryAverages[category] = total / count;
//   }

//   return categoryAverages;
// }

// const averagePrices = calculateAveragePriceByCategory(products);
// console.log(averagePrices);


// 13
// const employees = [
//   { name: "John", salary: 50000, department: "IT" },
//   { name: "Jane", salary: 60000, department: "HR" },
//   { name: "Bob", salary: 55000, department: "IT" },
//   { name: "Sophie", salary: 75000, department: "HR" },
//   { name: "Mike", salary: 65000, department: "IT" },
//   { name: "Emily", salary: 80000, department: "HR" },
//   { name: "David", salary: 70000, department: "IT" },
// ];

// // 2
// function propertyCounter(arrayName) {
//       let newObject = {};
//       let IT = arrayName.filter(value => value.department == "IT");
//       let HR = arrayName.filter(value => value.department == "HR");
//       let a = arrayName.salary;
//       let b = arrayName.salary;
//       newObject.IT = a;
//       newObject.HR = b;
//       return newObject 
//   }
//   console.log(propertyCounter(employees));

// function departWiseSalary(arr) {
//   let a = arr.filter(val => val.department === "IT").map(val => val.salary)
//   let b = arr.filter(val => val.department === "HR").map(val => val.salary)
//   let c = {IT:a,HR:b};
//   return c
// }
// console.log(departWiseSalary(employees));

// count the average salary of each department
// function averagePrice(employees) {
//       let a = 0;
//       let b = 0;
//       let c = 0;
//       let d = 0;
//       for (let i = 0; i < employees.length; i++) {
//           if (employees[i].department == "IT") {
//               a += employees[i].salary;
//               b++;
//               // console.log(a);
//           } else if (employees[i].department == "HR") {
//               c += employees[i].salary;
//               d++;
//               // console.log(c);
//           }
//       }
//       return { IT: a / b, HR: c / d }
//   }
//   let aveObject = averagePrice(employees);
//   console.log(aveObject);


