// const a = 3;
// const b=4;
// let sumOfAB = sum(a,b);
// const sum = (d1,d2) => d1+d2;
// console.log(sumOfAB);

// 7
// function countArrays(arr) {
//         let count = 0;
//         for (let i = 0; i < arr.length; i++) {
//             if (Array.isArray(arr[i])) {
//                 count++;
//             }
//         }
//         return count;
//     }
//  console.log(countArrays([2, 8, [6], 3, 3, 5, 3, 4, [5, 4]])); 
//   console.log(countArrays([2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]]])); 

// // 15
// function sortDescending(arr) {
//     arr.sort(function(a, b) {
//       return b - a;
//     });
//     return arr;
//   }
//   console.log(sortDescending(["10","150","56","1","4","55","67"]));
  

// 16
// function union(arr1, arr2) {
//         var arr3 = arr1.concat(arr2); // concatenate the two arrays
    
//         let filterArray = arr3.filter((a,b,c)=>{
//                 return c.indexOf(a)===b;
//             });
    
//         return filterArray;
//       }
    
//       console.log(union([1, 2, 3], [100, 2, 1, 10]));

// 19
function fun(value){
    let a=value.split("").map(Number);
   let b=a.filter((ele)=> {
    return ele;
   })
   return b;
}

console.log(fun('as4dj1as3d0fhthfn6'));


