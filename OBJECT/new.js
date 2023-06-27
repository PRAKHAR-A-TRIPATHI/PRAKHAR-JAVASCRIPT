const user =
{
    name:"prakhar",
    age:18,
    course:"B.tech",
    //how to add space kay name
    "hello woerld":true,
    details:{
        brother:"shlok",
        father:"Anupkumar"
    }
};



// destructing renmae 
// const name="shlok"

// // destructing
// const{name:myname}=user;
// const{ details:{brother}}=user
// console.log(brother);
// console.log(myname);

//spread opreter
// console.log([..."prakhar"]);
// const obj1={
//     name:"prakhar",
//     age:18,
// };
// const admin={
//     admin:true,
//     ...obj1
// }
// console.log(admin);

// json parser 
// const strobj =JSON.stringify(user);
// console.log(JSON.parse(strobj));

//json stringy fy
// console.log(JSON.stringify(user));
// const data = JSON.stringify(user,["name","age"])
// console.log(data);

// const obj ={
//     a:"one",
//     b:"two",
//     a:"three"
// }
// console.log(obj);


// //for in loop
// for(var p in user){ 
//     console.log(p,user[p]);
// }

//how do you deynimic key value in object
// const value="animals";
// const name="lion"
// const user1 ={
//     [value]:name,
// }
// console.log(user1);

//asses
// console.log(user.name);

//asses space property 
// console.log(user["hello woerld"]);

//modify
// user.name="shlok"
// console.log(user["name"]);

//delet
// delete user.age;
// console.log(user);

