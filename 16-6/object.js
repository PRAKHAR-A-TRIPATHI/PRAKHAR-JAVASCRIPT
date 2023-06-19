// const myHonda = {
//     color: "red",
//     wheels: 50,
//     engine: { cylinders: 4 , size: 2.2 },
//   };
// console.log(myHonda.engine.size)

// const course={
//     lectures:10,
//     section:3,
//     tittle:"javaScript",
//     notes:{
//         introduction:"welcome to javascript"
//     },
//     enroll(){
//         console.log("you are enroll");
//     }

// }
// course.price=999;
// course.enroll()
// console.log(course)

//  const course = {
//     tittle: "javascript"
//  }
//  const course_1 = {...course}
//  course_1.tittle="java"
//  console.log(course_1)

// var family = {
//   firstname: "ram",
//   lastname: "kumar",
//   age: 25,
//   email: "ram@gmail.com",
//   fullname: ["ram", "kumar", "dasrath"],
//   livinig:{
//      city:"ahmedabad",
//      country:"india"
//   }
// };
// console.log(family);
// console.log(family.email);
// console.log(family.fullname[0]);
// console.log(family.livinig.city);

// let person = {
//     fname : "Prakhar",
//     lname : "Tripathi",
//     age: 17,
//     hobbie:["criket","football","car","bike"]
// };

// person.age=18;
// person.email="prakhartripati175.com";
// delete person.age;

// console.log("mname" in person);
// console.log("mname" in person);
// for(let key in person){
//   console.log(key + ":" + person[key]);
// }

// console.log(100-150)

// let myArray = [1, 2, 3, 4];

// function myFunction(arr) {
//   arr.push(5);
// }

// myFunction(myArray);
// console.log(myArray);

//pass by value
// let a =5;
// let b=a;
// console.log(a)
// console.log(b)

//pass by refrence
// const obj1 = {
//   user: "prakhar",
//   passeord: "p.1234",
// };

// const obj2 = obj1;
// obj2.passeord="p.175";

// console.log (obj1);
// console.log(obj2);

// const arr1 = [1,2,3,4];
// const arr2=[].concat(arr1);
// arr2.push(5);
// console.log(arr1);
// console.log(arr2);

// function one(){
//     two ();
//     console.log("prakhar");
// }
// function two(){
//     three ();
//     console.log("worls");
// }
// function three() {
//     console.log("hello");
//     }

// one();

// function Person(name, age, city) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//   }

//   let person = new Person("John", 30, "New York");

//   console.log(person);

// let car = {
//     brand: "Toyota",
//     model: "Camry",
//     year: 2021,
//     start: function(){
//       console.log("Starting the car...");
//     }
//   };
//   console.log(car.start);

// let name="prakhar";
// let city ="ahmedabad";
//  var obj ={
//     name,
//     city
//  };
//  console.log(obj);

// let n ="name";
// let obj = {
//     [n]:"prakhar",
//     course:"p.tech"
// };
// console.log(obj);

// let n ="name";
// let obj = {
//     [n + "student"]:"prakhar",
//     course:"p.tech"
// };
// console.log(obj);

// let obj = {
//     name : "Prakhar",
//     age : 18,
//     coursse : "B.tech",
// }
// let dtails = ["name", "age", "coursse"];
// console.log(obj[dtails[1]]);

