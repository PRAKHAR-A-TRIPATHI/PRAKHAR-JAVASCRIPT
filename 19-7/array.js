// let a = new Array(1,2,3,45,5,6,7,8,);
// console.log(a);

// push 
// a.push(10);
// console.log(a);

// pop 
// a.pop()
// console.log(a);

// unshift
// a.unshift(8)
// console.log(a);

// shift
// a.shift()
// console.log(a);

// include
// console.log(a.includes(9));
 
// indexof
// console.log(a.indexOf(2));

// join
// console.log(a.join("-")); \\return string

// slice 
// console.log("a",a);
// console.log(a.slice(1,3)); return new array to slice does not change original array

// splice 
// console.log(a.splice(1,3)); //maniplue original array 

// const marvel  = ["thor","ironman","spinderman"];
// const dc= ["superman","batman","flash"];

// marvel.push(dc)
// console.log(marvel);

// concat  //return new array
// let concat = marvel.concat(dc); 
// console.log(concat);


// spread opretor
// const allhero =[...marvel,...dc];
// console.log(allhero);

// flat 
// const hero  = [1,2,3,[4,5,6],7,9,[6,7,[4,5]]]
// const real = hero.flat(Infinity);
// console.log(real);

// ARRAY.ISARRAY     cheack value sis array or note
// console.log (Array.isArray("prakhar"))

// Array.form convert value of array 
// console.log(Array.from("prakhar"));
// console.log(Array.from({name:"prakhe"})); //  main

// let b = 100;
// let c = 200;
// let d  = 300;
// console.log(Array.of(b,c,d));

// for each loop
// const a= ["js","c++","java","python","ruby"];

// const value = a.forEach((a)=>{
//     return a;
// })

// console.log(value);

// filter method 
// const num  = [1,2,34,5,67,88,3] 

// let a= num.filter((item)=>item>4)
// console.log(a);

// const a = [];
// num.forEach((num)=>{
//     if(num>4){
//         a.push(num)
//     }
// })
// console.log(a);


const num = [1,2,3,4,5,6,7,8,90];

// map method 
// let a=num.map((item)=>item+10);
// console.log(a);

// chaing 
// let a = num.map((a)=>a*10).map((a)=>a*10).filter((b)=> b>500);
// console.log(a);

// reduce mehod 

// let total = num.reduce((acc,carr)=>acc)
// let total = num.reduce((acc,carr)=>{
//     console.log(`acc:${acc} and current value:${carr}`);
//     return acc+carr;
// },0)

// console.log(total);

