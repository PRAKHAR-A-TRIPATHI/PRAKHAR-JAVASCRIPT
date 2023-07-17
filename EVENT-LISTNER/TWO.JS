function hide(){
    const btn = document.getElementById("#btn");
    const p = document.getElementById("p");
    if(p.style.display!="none"){
        p.style.display="none"
    }else{
        p.style.display="block"
    }
}

const p = document.getElementById("p");
p.addEventListener("mouseover",function(){
    alert('Mouse over')
})
p.addEventListener("mouseout",function(){
    alert('Mouse out')
})
