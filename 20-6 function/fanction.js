//#1
function average (x,y){
    console.log("done");
    return Math.round(1+(x+y)/2);
}

// #2
const sum = (p,q) =>{
    return p+q;
}

// #3
const multiple  =()=>{
    console.log("hello world");
}
let a=1;
let b=2;
let c=4;

console.log("Answer=",average(a,b),"sum=",sum(a,b));
console.log("Answer=",average(c,b));
console.log("Answer=",average(c,a));
multiple();