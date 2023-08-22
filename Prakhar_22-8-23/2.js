let friend = [
  {
    name: "anna",
    books: ["bibe", "Harry Potter"],
    age: 21,
  },
  {
    name: "Bob",
    books: ["war and peace", "remo and juliest"],
    age: 21,
  },
  {
    name: "Alice",
    books: ["the lord of the ring", "the  shining"],
    age: 18,
  },
];

let a = friend.map(val => val.books);

 let b =a.flat(Infinity);

 console.log(b);
