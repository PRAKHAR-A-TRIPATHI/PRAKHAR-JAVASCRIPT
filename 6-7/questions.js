// let a = ["js","css","jqueary"];
// const d= {
//     name:"js",
//     label:a.find(['sdf']).lable 
// }
// console.log(d);
// console.log("".concat({}));

// let a = ["js","css","jquarey"];

// let b= a.reduce((c,d)=>{
//   let newString=c+" "+d+",";
//   return newString;
// },'');
// console.log(b);

// let input = "hello World";
// let output = input.split(" ").map(word=>word.split("").reverse().join(""));
// let b= output.reduce((c,d)=>{
//     let newString=c+" "+d;
//     return newString;
//   },'');
//   console.log(b);
// console.log(output);

// let arr = [ 2, 5, 6, 7];
// let sum = 7;
// let output = [];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] + arr[j] === sum) {
//       output.push(arr[i], arr[j]);
//     //   break;
//     }
//   }
// }

// console.log(output);


// let obj1 = {a:12, b:30}
// let obj2 = {a:15}
// let obj3 = Object.assign({a:14},obj2,obj1)
// // obj3.a = 30;
// obj1.a = 20;
// console.log(obj3.a);       
// console.log(obj1 == obj2 );

// 19
// function operationObj(obj) {
//     obj = {...obj, c: 12}
//   }
//   let a = {  x: 34,  y: 56 }
//   operationObj(a);
//   console.log(a);    
  
// 20
//   function operationObj(obj) {
//     obj.z = {...obj, c: 12}
//   }
//   let a = {
//     x: 34,
//     y: 56
//   }
//   operationObj(a);
//   console.log(a);
  
// 35
// function difference1(arr1, arr2) {
//     // Flatten the arrays to a single level
//     const flattenedArr1 = arr1.flat(Infinity);
//     const flattenedArr2 = arr2.flat(Infinity);

//     // Find the elements that are present in arr2 but not in arr1
//     const difference = flattenedArr2.filter((elem) => !flattenedArr1.includes(elem));

//     return difference;
//   }

//   console.log(difference1([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));
//   // Output: ["6"]

// 36
