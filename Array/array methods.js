let name=["prakhar","shlok","aman","Rahul","krishna","shlok"]

// splice 
name.splice(2,3,21,22,23);
console.log(name);

//reverce
// name.reverse()
// console.log(name);


//SORT
// let conmpare = (a,b)=>{
//     return a-b;
// }
// name.sort(conmpare)
// console.log(name);

// split 
// console.log(name.split(' '));

//join
// let student = ['s','h','i','v','a']
// console.log(student.join(''));

// foreach 
// name.forEach(element => {
//     console.log(name,element);
// });

//for loop
// for(let i=0;i<name.length;i++){
//     console.log(name[i]);
// }

//for of loop 
// for(let value of name){
//     console.log(value);
// }

// indexof
// console.log(name.indexOf("shlok",3));

//lastindexog
// console.log(name.lastIndexOf("shlok"));

//includes
// name.include("Rahul");
// console.log(name.includes("Rahul"));

//spread oprater
// let arr1 = ["a","b","c","d"];
// let arr2 = ["e","f","g","h"];
// let arr3 = [...arr1, ...arr2];
// console.log(arr3);

// slice
// let names1=["prakhar","shlok","aman","Rahul","krishna","shlok"];
// let names2=["prakhar","shlok","aman","Rahul","krishna","shlok"];
// let name3= names1.concat(names2)
// console.log(name3.slice(-9,-4));
// console.log(name3.slice(3,5));

// Concat
// let names1=["prakhar","shlok","aman","Rahul","krishna","shlok"];
// let names2=["prakhar","shlok","aman","Rahul","krishna","shlok"];
// let name3= names1.concat(names2)
// console.log(name3);

//find
// let student =[
//     {
//         name:"shlok",
//         marks:98
//     },
//     {
//         name:"Rahul",
//         marks:9
//     },
//     {
//         name:"Krish",
//         marks:33
//     },
//     {
//         name:"Aman",
//         marks:90
//     }
// ]
//FIND
// arrow functions
// console.log(student.find((element) => {
//     return element.name === "shlok"
// }));

//callback functions
// console.log(student.find(function(element){
//     return element.name === "shlok";
// }))

//filter
// let student = [
//     {name: 'shlok', marks:98},
//     {name: 'mayur', marks:88},
//     {name: 'krish', marks:78},
//     {name: 'rahul', marks:68},
//     {name: 'raj', marks:58},

// ];

// console.log(student.filter(element=>{
//     return element.marks>90
// }))

//map
// console.log(student.map(element=>{
//     return element.marks*10
// }))


// //some
// var age=[10,13,18,20];
// var aage=(value)=>value>18;
// console.log(age.some(aage));

//flat
// let num = [1,2,3,[4,5,6],7,[8,9,[10]],10]
// console.log(num.flat(2));

//every
// var age=[10,13,18,20];
// var aage=(value)=>value>18;
// console.log(age.every(aage));