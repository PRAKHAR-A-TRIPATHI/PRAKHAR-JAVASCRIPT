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

