// 31
// function fun_name(arrayOfArray){
//     if (arrayOfArray.includes([a,b])){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(checkSubarray([[1, 2], [34, 67], [67, 77], [88, 90]], [1, 2]));
// console.log(fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [2, 1]));
// console.log(fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [22, 15]) );
// console.log(fun_name([[1, 2], [34, 67], [67, 77], [22, 90, 15], [88, 90]], [22, 15, 90]))

// 32 ???

// 34
// function union(arr1, arr2) {
//     var arr3 = arr1.concat(arr2); // concatenate the two arrays

//     let filterArray = arr3.filter((a,b,c)=>{
//             return c.indexOf(a)===b;
//         });

//     return filterArray;
//   }

//   console.log(union([1, 2, 3], [100, 2, 1, 10]));

// 37
// function filterNumericValues(array) {
//     // Use the filter method to filter out non-numeric values
//     var result = array.filter(function(element) {
//       return typeof element === 'number' && !isNaN(element) && element !== 0;
//     });
  
//     return result;
//   }
  
//   var array = [NaN, 0, 15, false, -22, '', undefined, 47, null];
  
//   console.log(filterNumericValues(array)); // Output: [15, -22, 47]
//    // Output: [15, -22, 47]

// function filterTruthyValues(array) {
//     // filter function always print true value 
//     var result = array.filter((a)=>{
//         return a;
//     });
  
//     return result;
//   }

//   var array = [NaN, 0, 15, false, -22, '', undefined, 47, null];
  
//   console.log(filterTruthyValues(array)); // Output: [1, 'hello', true]
  
// 39  
// function remove_array_element(arr, element) {
//     // Use the filter method to create a new array without the specified element
//     var result = arr.filter(function(value) {
//       return value !== element;
//     });
  
//     return result;
//   }
  
//   console.log(remove_array_element([2, 5, 9, 6], 5)); // Output: [2, 9, 6]
  
  
// 40
function contains(arr, element) {
    return arr.includes(element);
  }
  
  var arr = [2, 5, 9, 6];
  
  console.log(contains(arr, 5));
  console.log(contains(arr, 10)); 
  