function getchess() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const chees = "chees";
      console.log(chees);
      reject(chees);
    }, 2000);
  });
}
function makedo(cheese) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const does = "chees" + "do";
      console.log(does);
      resolve(does);
    }, 2000);
  });
}
function pizza(does) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pizza = "chees" + "do" + "pizza";
      console.log(pizza);
      resolve(pizza);
    }, 2000);
  });
}

// async await
async function orderPizza(){
    try{
        const chese = await getchess();
        const does = await makedo(chese);
        const pizza1 = await pizza(does);
    }catch(err){
        console.log("error",err);
    }
    console.log("sussefully");
   
} 
orderPizza()

// getchess()
//   .then((cheese) => {
//     // console.log(cheese);
//     return makedo(cheese);
//   })
//   .then((does) => {
//     // console.log(does);
//     return pizza(does);
//   })
//   .then((pizza) => {
//     // console.log(pizza);
//   }).catch((error)=>{
//     console.log(error);
//   }).finally(()=>{
//     console.log("sussfully");
//   })
