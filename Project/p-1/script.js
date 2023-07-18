const button = document.querySelectorAll(".button");
const body = document.querySelector("body");
const h1 = document.querySelector("h1");
console.log(h1);

button.forEach(function(button){
    console.log(button);
     button.addEventListener("click",function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id==="blue"){
         body.style.background=e.target.id
        }
        if(e.target.id==="green"){
         body.style.background=e.target.id
        }
        if(e.target.id==="orange"){
         body.style.background=e.target.id
        }
        if(e.target.id==="red"){
         body.style.background=e.target.id
        }
     });
});

h1.style.color="white";
