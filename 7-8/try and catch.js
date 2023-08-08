setTimeout(() => {
    console.log("hello");
}, 1000);

// wrong
// try {
//     setTimeout(()=>{

//         console.log(xyz);
//     })
// }catch(error){
//     console.log("error");
// }

// right
// #1
// try {
//     console.log(xyz);
// }catch(error){
//     console.log("error");
// }

// #2
setTimeout(()=>{
    try {
        console.log(xyz);
    }catch(error){
        console.log("error");
    }
    
},100)

setTimeout(() => {
    console.log("hello world");
}, 2000);
setTimeout(() => {
    console.log("hello world 2");
}, 3000);
setTimeout(() => {
    console.log("hello world 3");
}, 4000);