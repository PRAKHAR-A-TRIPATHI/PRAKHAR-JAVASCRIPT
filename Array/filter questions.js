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
// let value = donuts.filter((item)=>item.topping.filter((topping)=>topping[i].type == "Chocolate"))
// console.log(value);


function toppingChocolate(array) {
    let a = donuts.filter((value, index, arr) => {
        let topping = value.topping;
        for (let i = 0; i < topping.length; i++) {
            if (topping[i].type == "Chocolate"){
                console.log(value.type+":");
                console.log(value);
                // return value;
            }
        }
    });
    console.log(a);
  }
  toppingChocolate(donuts);

//2
// const result = donuts.filter(donut => donut.batters.batter.some(batter => batter.type === 'Regular') && donut.topping.some(topping => topping.type === 'Chocolate'));

//3

// const result = donuts.filter(donut => donut.topping.some(topping => topping.type === 'Chocolate' || topping.type === 'Sugar'));

//4
// const result = donuts.filter(donut => donut.ppu > 0.5);

//5
// const result = [].concat(...donuts.map(donut => donut.batters.batter));

//6
// const result = donuts.filter(donut => donut.batters.batter.length >= 2);

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

//11
// const products = [
//   { name: "Product 1", price: 20, category: "Electronics" },
//   { name: "Product 2", price: 30, category: "Clothes" },
//   { name: "Product 3", price: 40, category: "Electronics" },
//   { name: "Product 4", price: 50, category: "Clothes" },
//   { name: "Product 5", price: 60, category: "Clothes" },
//   { name: "Product 6", price: 70, category: "Electronics" },
//   { name: "Product 7", price: 80, category: "Clothes" },
//   { name: "Product 8", price: 90, category: "Electronics" },
// ];
// let categoryCounts = {};
// for (let i = 0; i < products.length; i++) {
//   let product = products[i];
//   if (categoryCounts[product.category]) {
//     categoryCounts[product.category]++;
//   } else {
//     categoryCounts[product.category] = 1;
//   }
// }

// console.log(categoryCounts);
// // Output: { Clothes: 4, Electronics: 4 }
