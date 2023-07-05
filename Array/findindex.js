const donut = [
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
//1

// let chocolateDonuts = [];

// donut.forEach((donut) => {
//   if (donut.topping.findIndex((topping) => topping.type === "Chocolate") !== -1) {
//     chocolateDonuts.push(donut);
//   }
// });

// console.log(chocolateDonuts);

//2

// let index = donut.findIndex((donut) => {
//   return (
//     donut.batters.batter.findIndex((batter) => batter.type === "Regular") !==
//       -1 &&
//     donut.topping.findIndex((topping) => topping.type === "Chocolate") !== -1
//   );
// });

// console.log(index);

//3

// let index = donut.findIndex((donut) => {
//   return donut.topping.findIndex((topping) => topping.type === "Chocolate") !== -1 &&
//          donut.topping.findIndex((topping) => topping.type === "Sugar") !== -1;
// });

// console.log(index);
