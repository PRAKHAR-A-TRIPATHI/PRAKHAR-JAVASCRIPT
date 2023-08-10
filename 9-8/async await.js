// async function newfn() {
//   let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("bye");
//       resolve();
//     }, 5000);
//   });

//  await p1;

//    console.log(  "hello");
// }

// newfn();


function wait(){
    setTimeout(()=>{
        console.log("hello");
    },2000)
    console.log("hrllo");
}
wait();
console.log("by");

