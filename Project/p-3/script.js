const clcok=document.getElementById("clock");

let date = new Date();

setInterval(function(){
    clcok.innerText = date.toLocaleTimeString();
},1000);