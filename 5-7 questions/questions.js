// 23
// let b = [2,2,3,4,5];
//  let sum = b.reduce((a,b)=>{
//     return a+b*b;
//  },0);
//  console.log(sum);

// 24
// const students = [
//   { name: "Alice", age: 20, grade: "A" },
//   { name: "Bob", age: 18, grade: "B" },
//   { name: "Charlie", age: 19, grade: "A" },
//   { name: "David", age: 20, grade: "C" },
// ];
//   const byAge = students.sort((a,b)=>a.age-b.age);
// const byAge = students.sort((a,b)=>{
//     if(a.age>b.age){
//         return 1;
//     }else{
//         return -1;
//     }

// })
// console.log(byAge);

// const byGrade = students.sort((a,b)=>a.grade-b.grade);
// const byGrade = students.sort((a,b)=>{
//     if (a.grade>b.grade){
//         return 1;
//     }else{
//         return -1;
//     }
// });
// console.log(byGrade);

// const byName = students.sort((a, b) => {
// //   if (a.name.length > b.name.length) {
//   if (a.name > b.name) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(byName);

// const averageAge = students.reduce((a,b)=>{
//      return a+=b.age
// },0)
// const average1 = averageAge/students.length;
// console.log(average1);

//  const sum = students.reduce((a,b)=>{
//          return a+=b.age
//     },0)
//     // const average1 = averageAge/students.length;
//     console.log(sum);

// 25
// const nestedArray = [[1, 2], [3, 4], [5, 6]];

// let flate = nestedArray.reduce((a,b)=>{
//     return a.concat;
// });
// console.log(flate);

// 26
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// let Even = numbers.filter((a)=>{
//    return a%2==0;
// });
// let squareofEven =Even.map((a)=> a*a)
// console.log(squareofEven);

// const squareofEven = numbers.reduce((a, b) => {
//   if (b % 2 === 0) {
//     a.push(b ** 2);
//   }
//   return a;
// }, []);

// console.log(squareofEven);

// 27
// const numbers = [1,2, 2, 3, 4, 4, 5];
// let filterArray = numbers.filter((a,b,c)=>{
//     return c.indexOf(a)===b;
// });
// console.log(filterArray);

// 28
// const words = ["apple", "banana", "orange"];

// let find = words.find(value=>value.includes('a'))
// console.log(find);

// let find = words.reduce((a,b)=>{
//     if(b.includes('a')&&a==""){
//         return b;
//     }
//     return a;
// },'')
// console.log(find);

// 29
// const numbers = [2, 4, 6, 8, 9, 10,];

// let find=numbers.findIndex((a)=>a%2!==0)
// console.log(find);

// let find = numbers.reduce((a,b,c)=>{
//     if(b%2!==0){
//         return c;
//     }
//     return a;
// })
// console.log(find);

//30
// let num = 5;
// function factorial(value){
//     if(value<0){
//         return false;
//     }
//     let result =1;
//     for(let i=2;i<=value;i++){
//         result *= i;
//     }
//     return result;
// }
// console.log(factorial(num));

// 31
const people = [
  { name: "Alice", age: 18 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 19 },
  { name: "David", age: 21 },
];

function findIndex(arr) {
    let find = arr.reduce((a,b,c)=>{
        if (b.name.charAt(0) === "A" && b.age <= 20) {
            return c;
        }
        return a;
    },"")
    return find;
}  
console.log(findIndex(people));