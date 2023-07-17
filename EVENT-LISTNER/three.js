function fun(){
    console.log("Hello World");
}

const over =() =>{
    console.log(over);
}
const move =() =>{
    console.log("move");
}
const key =() =>{
    console.log("key press");
}

// eventlistner
const box1 = document.getElementById("box-1");
box1.addEventListener("click",function(e){
    console.log("hello world2",e.clientX,e.clientY);
})

// const input = document.getElementById("input");
// input.addEventListener("keydown",(e)=>{
//     console.log("key",e.key);
// })
// input.addEventListener("keypress",(e)=>{
//     console.log("key",e.key);
// })
// input.addEventListener("focus",(e)=>{
//     console.log("key",e);
// })
// input.addEventListener("focus",(e)=>{
//     console.log("key",e);
// })

