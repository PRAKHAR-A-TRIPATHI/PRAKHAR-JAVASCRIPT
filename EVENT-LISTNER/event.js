 document.getElementById("one").onclick = function(){
    alert('You clicked the button!');
 }

document.getElementById("two").addEventListener("click",function(e){
    console.log("prakhar");
});

document.getElementById("one").addEventListener("click",function(e){
    console.log("prakhar");
});
document.getElementById("three").addEventListener("click",function(e){
    three.remove();
})