// const promise1 = new Promise(function (resolve, reject) {
//   //do an async task
//   // DB calls ,network
//   setTimeout(function () {
//     console.log("task complete");
//     resolve();
//   }, 1000);
// });

// promise1.then(function () {
//   console.log("promise consumned");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("tassk 2");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("tsak-2 resolve");
// });

// let promise3 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({
//       username: "prakhar",
//       email: "prakhartripathi@gmail.com",
//     });
//   }, 1000);
// });
// promise3.then(function (user) {
//   console.log(user);
// });

// const promise4 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error){
//         resolve({
//             username: "prakhar",
//             password: "prakhartripathi@gmail.com",
//           });
//     }else{
//         reject("erroe : something went wrong")
//     }
//   },1000);
// });
// promise4
// .then((user)=>{
//     console.log(user);
//     return user.username
// })
// .then((username)=>{

//     console.log(username);
// })
// .catch((error)=>{
//     console.log(error);
// }).finally(()=> console.log("the promise complete"))

// const promise5 =  new Promise((resolve, reject) => {
//     setTimeout(function () {
//             let error = true;
//             if (!error){
//                 resolve({
//                     username: "javascript",
//                     password: "997413",
//                   });
//             }else{
//                 reject("ERROR :Js went wrong")
//             }
//           },1000);
// });

// async function consumepromise5(){
//     try{
//         const response = await promise5;
//     console.log(response);
//     }catch (error){
//         console.log(error);
//     }
// }

// consumepromise5()

// async await
// async function logMovies() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const movies = await response.json();
//         console.log(movies);
//       }catch(error){
//         console.log("e:",error);
//       }
//     }
   
//   logMovies()

// fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
//     return response.json()
// }).then((data)=>{
//     console.log(data);
// }).catch((error)=> console.log(error) )


// accesses data name 
// fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
//     return response.json()
// }).then((data)=>{
//     let a =data.map((value)=>value.company.name)
//     console.log(a);
// }).catch((error)=> console.log(error) ); 

 