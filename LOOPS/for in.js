//onject
// var animals = {
//   name: "lion",
//   leg: 4,
// };
// // console.log(animals.name);
// for(var key in animals){
//     console.log(key,animals[key]);
// }

// //array
// var names=["prakhar","shlok",'anup','rahul'];
// for(var index in names){
//     console.log(index,names[index]);
// }

// var obj={
//     firstname:"prakhar",
//     lastnamr:"triipathi",
//     middlename:"anupkumar",
//     course:"B.tech",
//     age:18,

// }
// var obj="prakhar";
// for(var keys in obj){
//     console.log(keys,obj[keys]);
// }

// const myObj = {a: 1, b: 2, c: 3};

// for (let key in myObj) {
//   console.log(key); // prints "a", "b", "c"
// }

const myObj = {a: 1, b: 2, c: 3};

for (let key in myObj) {
  console.log(`The value of ${key} is ${myObj[key]}`); // prints "The value of a is 1", "The value of b is 2", "The value of c is 3"
}
