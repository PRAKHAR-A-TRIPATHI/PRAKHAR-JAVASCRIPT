// const url = "https://jsonplaceholder.typicode.com/users";

// function getDate() {
//   fetch(url)
//   .then((response) => {
//     console.log(response.status);
//     if(!response.ok){
//         throw new Error("was not valid response")
//     }
//     return response.json();
//   })
//   .then((data)=>{
//     console.log(data);
//   })
//   .catch(err =>{
//     console.log(err.message);
//   });

//    let response = fetch(url);
//    let dataobj = response.json();
//    console.log(dataobj);
// }

// async function getDate(){
//     try {
//         let response = await fetch(url);
//         let dataobj = await response.json();
//         console.log(dataobj);
//         if(!response.ok) throw new Error("not resopnse data")
//     } catch (error) {
//         console.log(error);
//     }

// }

// const str = 'http://127.0.0.1:5500/local-sample.json?attempt=123&other=hello';

//  function getDate(){
//     const urlp =new URL(str)
//     console.log(urlp.host,urlp.origin,urlp.protocol,urlp.port,urlp.pathname);
//     const request = new Request(urlp,{
//         headers:{"x-steve":"hello"},
//         method : "GET",
//         cache:"no-store",
//     })
//     fetch(str).then((Response)=>{
//         // console.log(Response.status);
//         return Response.json();
//     }).then(data=>console.log(data))
//     .catch(error => console.log(error))
// }
// getDate();

// respoonse.js
// const jsonstr = "https://jsonplaceholder.typicode.com/posts";
// const imgstr =
//   "https://images.unsplash.com/photo-1692035837984-64df95c64ef1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60";

// let obj = {
//   id: crypto.randomUUID(),
//   name: "the one who knocks",
//   favouriteColor: "blue",
// };

// function getData() {
//   fetch(jsonstr)
//     .then((resp) => {
//       if (!response.ok) throw new Error("inavlid json");
//       return resp.json();
//     })
//     .then((data) => {
//         const table = ` <table class="table">
//         <thead>
//           <tr>
//             <th scope="col">#</th>
//             <th scope="col">tittle</th>
//           </tr>
//         </thead>
//         <tbody>
//         ${data.map((post) => ` <tr>
//         <th scope="row">${post.id}</th>
//         <td>${post.title}</td>
//       </tr>`
//           ).join("\n")}
//          </tbody>`;
//       document.getElementById("t").innerHTML = table;
//     })
//     .catch(console.warn)

//   fetch(jsonstr)
//     .then((resp) => {
//       if (!response.ok) throw new Error("inavlid text");
//       return response.text();
//     })
//     .then((text) => {
//       // document.getElementById("t").innerText = text
//     });

//   fetch(imgstr)
//     .then((rep) => {
//       if (!rep.ok) throw new Error("invalid");
//       return rep.blob(); //binary large object IMAGES MEIA FILE
//       response.text(); //fot text html, and xml files and css and js
//       rep.json(); //for json files
//     })
//     .then((blob) => {
//       console.log(blob); //blob is a chunk of memory on user comnputer
//       let url = URL.createObjectURL(blob);
//       // console.log(url);
//       document.getElementById("img").src = url;
//     })
//     .catch(console.warn);

//   let jsonstring = JSON.stringify(obj);
//   // console.log(jsonstring);
//   let file = new File([jsonstring], "mydata.json", {
//     type: "application/json",
//   });
//   // console.log(file);
//   let response = new Response(file, {
//     status: 200,
//     statusText: "say my name",
//     headers: {
//       "content-type": "application/json",
//       "content-legnth": file.size,
//       "x-stave": "start with x for a custoom heade name",
//     },
//   });
//   // console.log(response.headers.get("content-type"));
//   // console.log(response.headers.get("content-legnth"));
//   // console.log(response.headers.get("x-stave"));
// }

// getData();

// api keys , Authorization, Credentials, Contebt-Security -Policy
let str = "http://127.0.0.1:3000/?name=value&steve=griffith";
let url = new URL(str); // url.serch
let sp = url.searchParams;
sp.append("hello", "world");
sp.append("api-key", "wasfasrehydfordfhrld");

let h = new Headers()
// h.append("content-type","application/json")
// h.append("origin","https://cia.org")
h.append("x-api-key","afgjmnhmngjnkjnnjffnblkfdjkcjbn") //api key
h.append("Authorization","Bearer gtftdydjfuyjfydh"); //jwt

let request = new Request(url, {
  method:"GET",
  headers:h,
});

fetch (request).then(respnose=>{
  if(!respnose.ok) throw new Error("invalid")
  return responce.text()
}).then(txt=>{
  console.log(txt)
})
// getData();
