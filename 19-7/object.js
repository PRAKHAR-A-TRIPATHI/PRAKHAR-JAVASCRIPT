// object literal

// let mysym = Symbol("key 1")
// let user ={
//     name:"prakhar",
//     age:18,
//     location:"Ahmedabad",
//     email:"prakhar@gmail.com",
//     [mysym]:"mykey 1"
// }
 
// console.log(user);
// console.log(user[mysym]);

// user.email = "p123@gmail.com"

// console.log(user["email"]);

// user.greeting = function (){
//     console.log("hello");
//     return true
// }

// user.greeting1 = function (){
//     console.log(`hello , ${this.name}`);
//     return true
// }

// console.log(user.greeting1());

// part-2

const user = new Object();
 user.id ="123abc";
 user.name="shlok";
 user.age="18";

const newuser ={
    email:"google@gamil.com",
    fullname:{
         firstName : "prakhar",
         lastName:"tripathi"
    }
}
// console.log(newuser.fullname.firstName);

// marge Array;
// const obj = {user,newuser};

// const obj = Object.assign(user,newuser);

// const obj = {...user,...newuser}

// console.log(obj);

// keys 
// console.log(Object.keys(newuser));

// values
// console.log(Object.values(newuser));

// ENTERIES
// console.log(Object.entries(newuser));

// part-3

const course ={
    name:"html",
    price:"999",
    teacher:"xyz"
}

const {name,price:p,teacher}=course;

console.log(name);
console.log(p );

let obj1 = { a: 23, b: 45 };
let arr1 = [{ ...obj1 }];
let arr2 = Object.assign([], [{...arr1[0]}]);
arr2[0].c = 5;
console.log(arr1); 

 