let arr = [1,2,3,[4,5,6],7,8,9,[10,11,[12,[0,0],13],12,13],14,15];
// 1
// function flate(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i])) {
//         result = result.concat(flate(arr[i]));
//       } else {
//         result.push(arr[i]);
//       }
//     }
//     return result;
//   }
// console.log(flate(arr));



//2
// function flate(arr) {
//     let arr1 = [];
  
//     arr.forEach(value => {
//       if (Array.isArray(value)) {
//         arr1 = arr1.concat(flate(value));
//       } else {
//         arr1.push(value);
//       }
//     });
  
//     return arr1;
//   }
//   console.log(flate(arr));

// function flate(arr){
//     arr.map(value=>{
//         if(Array.isArray(value)){
//             arr.concat(flate(value))
//         }else{
//             (value)
//         }
//     });
//     return arr;
// }
// console.log(flate(arr));


//depth
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
//   const flattenedArray = flattenDepth(nestedArray, 2);
//   console.log(flattenedArray); 
  