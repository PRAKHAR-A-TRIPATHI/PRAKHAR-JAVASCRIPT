const promisesOne = new Promise((resolve,reject)=>{
    // async task 
    setTimeout(function(){
        console.log("async task in compleate");
        resolve();
    },1000)
});
promisesOne.then(()=>{
    console.log("promise consumed");
})

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("async task 2");
        resolve()
    },3000)
}).then(function(){
    console.log("async 2 resolve");
})

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve({user:"chai",email:"chai@exapl.com"})
    },2000)
})
promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({user:"prakhar",password:"123"})
        }else{
            reject("errorr")
        }
    },2000)
})
promiseFour.then(function(user){
    console.log(user);
    return user;
}).then((username)=>{
    console.log(username.user);
}).catch((err=>console.log(err)));

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({user:"javaScript",password:"123"})
        }else{
            reject("errorr")
        }
    },1000)
})

async function consumedPromisFive(){
    try{
        const Response = await promiseFive
        console.log(Response);
    }catch(error){
        console.log(error);
    }
}
consumedPromisFive();

async function getAllUser(){
   try{
    const Response = await fetch("https://jsonplaceholder.typicode.com/user");
    const data = await Response.json()
    console.log(data);
   }catch(error){
    console.log("e:",error);
   }
}

getAllUser()