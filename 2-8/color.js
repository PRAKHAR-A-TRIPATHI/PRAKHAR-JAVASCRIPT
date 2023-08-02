let arr = [1,2,3,4,5,6];

// console.log(arr.slice(2,4));

// console.log(arr.splice(0,2));
// console.log(arr.splice(0,2));

// let b=arr.map((a,b,c)=>{
//     return c.splice(0,2);
// })

// console.log(b);

function arryCut(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        // console.log(i);
      result.push(arr.slice(i, i + size));
    //   console.log(i);
    //   console.log(result);
    }
    return result;
  }
  
  let b = arryCut(arr, 2);
  console.log(b);


//   input.addEventListener('change',()=>{
//     x=input.value
//     
    
// })