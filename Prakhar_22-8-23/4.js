let arr = [1,1,2,3,4,2,5,6,7,4]
let filterArray = arr.filter((a,b,c)=>{
    return c.indexOf(a)!==b;
});

console.log(filterArray);