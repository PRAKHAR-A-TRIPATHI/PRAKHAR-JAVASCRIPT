// 9
// const donut=[
// 	{
// 		"id": "0001",
// 		"type": "donut",
// 		"name": "Cake",
// 		"ppu": 0.55,
// 		"batters":
// 		{
// 			"batter":
// 				[
// 					{ "id": "1001", "type": "Regular" },
// 					{ "id": "1002", "type": "Chocolate" },
// 					{ "id": "1003", "type": "Blueberry" },
// 					{ "id": "1004", "type": "Devil's Food" }
// 				]
// 		},
// 		"topping":
// 			[
// 				{ "id": "5001", "type": "None" },
// 				{ "id": "5002", "type": "Glazed" },
// 				{ "id": "5005", "type": "Sugar" },
// 				{ "id": "5007", "type": "Powdered Sugar" },
// 				{ "id": "5006", "type": "Chocolate with Sprinkles" },
// 				{ "id": "5003", "type": "Chocolate" },
// 				{ "id": "5004", "type": "Maple" }
// 			]
// 	},
// 	{
// 		"id": "0002",
// 		"type": "donut2",
// 		"name": "Raised",
// 		"ppu": 0.55,
// 		"batters":
// 		{
// 			"batter":
// 				[
// 					{ "id": "1001", "type": "Regular" }
// 				]
// 		},
// 		"topping":
// 			[
// 				{ "id": "5001", "type": "None" },
// 				{ "id": "5002", "type": "Glazed" },
// 				{ "id": "5005", "type": "Sugar" },
// 				{ "id": "5003", "type": "Chocolate" },
// 				{ "id": "5004", "type": "Maple" }
// 			]
// 	},
// 	{
// 		"id": "0003",
// 		"type": "donut3",
// 		"name": "Old Fashioned",
// 		"ppu": 0.55,
// 		"batters":
// 		{
// 			"batter":
// 				[
// 					{ "id": "1001", "type": "Regular" },
// 					{ "id": "1002", "type": "Chocolate" }
// 				]
// 		},
// 		"topping":
// 			[
// 				{ "id": "5001", "type": "None" },
// 				{ "id": "5002", "type": "Glazed" },
// 				{ "id": "5003", "type": "Chocolate" },
// 				{ "id": "5004", "type": "Maple" }
// 			]
// 	},
// 	{
// 		"id": "0004",
// 		"type": "donut1",
// 		"name": "Old Fashioned",
// 		"ppu": 0.55,
// 		"batters":
// 		{
// 			"batter":
// 				[
// 					{ "id": "1001", "type": "Regular" }
// 				]
// 		},
// 		"topping":
// 			[
// 				{ "id": "5001", "type": "None" },
// 				{ "id": "5002", "type": "Glazed" },
// 				{ "id": "5003", "type": "Chocolate" },
// 				{ "id": "5004", "type": "Maple" }
// 			]
// 	}
// ]

//1
// const chocolateDonuts = donut.filter(donut => {
//     return donut.topping.find(topping => topping.type === "Chocolate");
//   });
  
//   console.log(chocolateDonuts);

//2
// const filter = donut.filter(donut => {
//     const a = donut.batters.batter.find(batter => batter.type === "Regular");
//     const b = donut.topping.find(topping => topping.type === "Chocolate");
//     return a && b;
//   });
  
//   console.log(filter)

// 3
// const filter = donut.filter(donut => {
//     const a = donut.topping.find(topping => topping.type === "Chocolate");
//     const b = donut.topping.find(topping => topping.type === "Sugar");
//     return a && b;
//   });
  
//   console.log(filter);

//4
// const filter = donut.filter(donut => donut.ppu > 0.5);

// console.log(filter);

// //5
// const filter = donut.filter(donut => donut.batters.batter.length >= 2);

// console.log(filter);


//1
const names  = [
    {first_name: "Handnm", last_name: "L demo"},
    {first_name: "Q Wei", last_name: "Alxezx"},
    {first_name: "Pqwern", last_name: "Ruse"},
    {first_name: "Wiruyn", last_name: "Ruby"},
    {first_name: "Erpso", last_name: "Loal"},
    {first_name: "Demors", last_name: "Poet"},
    {first_name: "Aleos", last_name: "Lkeu"},
    ]
    // Write a code that adds new key in each object named 

//    names.map((name)=>{
//             name.full_name = name.first_name+" "+name.last_name;
//           })
