// 31
// ??????

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
//     // filter function always print true value   IN THE NEW ARRAY
//     var result = array.filter((a)=>{
//         return a;
//     });

//     return result;
//   }

//   var array = [NaN, 0, 15, false, -22, '', undefined, 47, null];

//   console.log(filterTruthyValues(array)); // Output: [1, 'hello', true]

// 39
// function remove_array_element(arr, element) {
//     var result = arr.filter(function(value) {
//       return value !== element;
//     });

//     return result;
//   }

//   console.log(remove_array_element([2, 5, 9, 6], 5)); // Output: [2, 9, 6]

// 40
// function contains(arr, element) {
//     return arr.includes(element);
//   }
//   var arr = [2, 5, 9, 6];

//   console.log(contains(arr, 5));
//   console.log(contains(arr, 10));


// function difference(arr1, arr2) {
//     const diffArr1 = arr1.filter(item => !arr2.includes(item));
//     const diffArr2 = arr2.filter(item => !arr1.includes(item));
//     return diffArr1.concat(diffArr2);
//   }

// function difference1(arr1, arr2) {
//   let arr3 = arr1.flat(Infinity);
//   let arr4 = arr2.flat(Infinity);

//   const diffArr1 = arr3.filter((item) => !arr4.includes(item));
//   const diffArr2 = arr4.filter((item) => !arr3.includes(item));
//   const newArray= diffArr1.concat(diffArr2);
//   return newArray.map((value)=>value.toString())
// }
// console.log(difference1([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));
//   console.log(difference1([1, 2, 3], [100, 2, 1, 10]));

// 41
// function countArrays(arr) {
//     const arrays = arr.filter(element => Array.isArray(element));
//     return arrays.length;
//   }
  
//   console.log(countArrays([2, 8, [6], 3, 3, 5, 3, 4, [5, 4]])); 
//   console.log(countArrays([2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]]])); 

// 42
// function findMaxLength(arr) {
//     const subarrays = arr.filter(Array.isArray);
//     const lengths = subarrays.map(subarray => subarray.length);
//     const maxLength = lengths.reduce((max, length) => Math.max(max, length), 0);
//     return maxLength;
//   }
  
//   console.log(findMaxLength([2, 8, [6], 3, 3, 5, 3, 4, [5, 4]])); 
//   console.log(findMaxLength([2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]]])); 
//   console.log(findMaxLength([2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]], [23, 56]])); 
//   console.log(findMaxLength([1, 5, 2, 6, 4, 23, 89])); 
  

// 43
// function isFactorChain(arr) {
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] % arr[i - 1] !== 0) {
//         return false;
//       }
//     }
    
//     return true;
//   }
  
//   console.log(isFactorChain([2, 4, 8, 16, 32])); // Output: true
//   console.log(isFactorChain([2, 4, 16, 32, 68])); // Output: false
//   console.log(isFactorChain([2, 4, 16, 32, 64])); // Output: true

// 38
// function num_string_range(start, end, step) {
//     // Determine the type of start and end values
//     const isNumber = typeof start === 'number' && typeof end === 'number';
//     const isString = typeof start === 'string' && typeof end === 'string';
  
//     // Swap start and end values if necessary
//     if (isNumber && start > end) {
//       [start, end] = [end, start];
//     } else if (isString && start.localeCompare(end) > 0) {
//       [start, end] = [end, start];
//     }
  
//     // Initialize the range array
//     const range = [];
  
//     // Generate the range
//     for (let i = start; isNumber ? i <= end : i.localeCompare(end) <= 0; i += step) {
//       range.push(i);
//     }
  
//     return range;
//   }
  
//   // Test cases
//   console.log(num_string_range('a', "z", 2)); // Output: ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
//   console.log(num_string_range("Z", "A", 2)); // Output: ["Z", "X", "V", "T", "R", "P", "N", "L", "J", "H", "F", "D", "B"]
//   console.log(num_string_range(0, -5, 1)); // Output: [0, -1, -2, -3, -4, -5]
//   console.log(num_string_range(0, 25, 5)); // Output: [0, 5, 10, 15, 20, 25]
//     console.log(num_string_range(20, 5, 5)); // Output: [20, 15, 10, 5]
  
