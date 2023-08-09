// const datas = [
//     {name:"prakhar",password:124354464},
//     {name:"shlok",password:124354464}
// ];

// const getdetas = () =>{
//     setTimeout(()=>{
//         let output = ""
//         datas.forEach((value,index)=>{
//             output += value.name

//         })
//         console.log(output);
//     },1000)
// }

// function creeateData (newdata,callback)
// { 
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             datas.push(newdata)
//             let error = false;
//             if(!error){
//                 resolve();
//             }else{
//                 reject("Error");
//             }
//         },2000)
//     });
  
// }



// creeateData({name:"new",password:124354464}).then(getdetas).catch((error)=> console.log(error));


//  async function start (){
//    await creeateData({name:"new",password:124354464});
//    getdetas()
// }
// start();

// Function package(){
        
// }


function sum (){
  return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let a =5;
            let b =505;
            let c =a+b;
            console.log(c);
            resolve(c)
        },4000)
    })
   
}

async function wait(){
     await sum()
     console.log('10');

}