// let p = fetch("https://goweather.herokuapp.com/weather/N");
// p.then((val)=>{
//     return val.json()
// }).then((val)=>{
//     console.log(val)
// })

// let p = fetch("https://goweather.herokuapp.com/weather/Ny");
// p.then((val)=>{
//     return val.json()
// }).then((val)=>{
//     console.log(val)
// })

fetch('https://indian-cities-api-nocbegfhqg.now.sh/cities')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));