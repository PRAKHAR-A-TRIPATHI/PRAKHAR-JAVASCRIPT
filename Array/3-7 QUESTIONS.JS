// 14
let data =["jeel","prakhar","bhakti","mehgna","vansh","bhaumik","pujan","rudhra","sachin","Dhurval"]
// 1
function newArray(data) {
    let obj = {};
  
    for (let i = 0; i < data.length; i++) {
      let firstLetter = data[i][0];
  
      if (obj[firstLetter]) {
        obj[firstLetter].push(data[i]);
      } else {
        obj[firstLetter] = [data[i]];
      }
    }
  
    return obj;
  }
  let arr1=newArray(data);
  console.log(arr1);
//   2
// function newArray(data) {
//     let obj = {};
  
//     data.forEach((value) => {
//       const firstLetter = value[0];
  
//       if (obj[firstLetter]) {
//         obj[firstLetter].push(value);
//       } else {
//         obj[firstLetter] = [value];
//       }
//     });  
  
//     return obj;
//   }
  

// 15
// //depth
// function flattenDepth(arr, depth) {
//     if (depth === 0) {
//       return arr;
//     }
    
//     let arr2 = [];
    
//     for (let i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i])) {
//         const nested = flattenDepth(arr[i], depth - 1);
//         arr2 = arr2.concat(nested);
//       } else {
//         arr2.push(arr[i]);
//       }
//     }
    
//     return arr2;
//   }
  
//   const nestedArray = [1, [2, [3, [4]]]];
//   const flattenedArray = flattenDepth(nestedArray, Infinity);
//   console.log(flattenedArray); 
  
// without dept 

// function flat(arr) {
//     let flattened = [];
  
//     arr.forEach((element) => {
//       if (Array.isArray(element)) {
//         flattened = flattened.concat(flat(element));
//       } else {
//         flattened.push(element);
//       }
//     });
  
//     return flattened;
//   }
  
// function flat(arr) {
//     let flattened = [];
  
//     function flattenArray(array) {
//       for (let i = 0; i < array.length; i++) {
//         if (Array.isArray(array[i])) {
//           flattenArray(array[i]);
//         } else {
//           flattened.push(array[i]);
//         }
//       }
//     }
  
//     flattenArray(arr);
//     return flattened;
//   }
  
// 16
    // function filter(arr, callback) {
    //     let filtered = [];
    
    //     for (let i = 0; i < arr.length; i++) {
    //       if (callback(arr[i], i, arr)) {
    //         filtered.push(arr[i]);
    //       }
    //     }
    
    //     return filtered;
    //   }
    //   let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // function isEven(number,index,arr) {
    //   return number % 2 === 0;
    // }

    // let filteredNumbers = filter(numbers, isEven);
    // console.log(filteredNumbers); // Output: [2, 4, 6, 8, 10]
// 2
// function filter(arr, callback) {
//     let filtered = [];
  
//     for (let element of arr) {
//       if (callback(element)) {
//         filtered.push(element);
//       }
//     }
  
//     return filtered;
//   }
//   3
// function filter(arr, callback) {
//     let filtered = [];
  
//     arr.forEach((element) => {
//       if (callback(element)) {
//         filtered.push(element);
//       }
//     });
  
//     return filtered;
//   }
  

// 17
// function map(arr, callback) {
//     let arr1 = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       arr1.push(callback(arr[i], i, arr));
//     }
  
//     return arr1;
//   }
//   let numbers = [1, 2, 3, 4, 5];

// function double(number) {
//   return number * 2;
// }

// let doubledNumbers = map(numbers, double);
// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

//2
// function mymap(arr, callback) {
//     let arr1 = [];
  
//     arr.forEach((element, index, array) => {
//       arr1.push(callback(element, index, array));
//     });
  
//     return arr1;
//   }
//   let numbers = [1, 2, 3, 4, 5];
// function double(number) {
//   return number * 2;
// }

// let doubledNumbers = mymap(numbers, double);
// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// 3
// function map(arr, callback) {
//     let arr1 = [];
  
//     for (let element of arr) {
//       arr1.push(callback(element));
//     }
  
//     return arr1;
//   }
  
  
// // 18
// const input= [
//     { name: "John", salary: 50000, department: "IT" },
//     { name: "Jane", salary: 60000, department: "HR" },
//     { name: "Bob", salary: 55000, department: "IT" },
//     { name: "Sophie", salary: 75000, department: "HR" },
//     { name: "Mike", salary: 65000, department: "IT" },
//     { name: "Emily", salary: 80000, department: "HR" },
//     { name: "David", salary: 70000, department: "IT" },
//   ];
//   function newArray(data) {
//     let obj = {};
  
//     data.forEach((object) => {
//       const firstLetter = object.name[0];
  
//       if (obj[firstLetter]) {
//         obj[firstLetter].push(object);
//       } else {
//         obj[firstLetter] = [object];
//       }
//     });
  
//     return obj;
//   }

// console.log(newArray(input));

// function newArray(data) {
//     let obj = {};
  
//     data.forEach((object) => {
//       const department = object.department;
  
//       if (obj[department]) {
//         obj[department].push(object);
//       } else {
//         obj[department] = [object];
//       }
//     });
  
//     return obj;
//   }
  
//   let obj = newArray(input);
//   console.log(obj);