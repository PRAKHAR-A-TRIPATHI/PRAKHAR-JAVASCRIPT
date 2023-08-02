const slide = document.querySelectorAll(".slide");
const bar = document.querySelectorAll(".bar");
// console.log(bar[0]);
var count = 0;
bar[count].style.color="red"
bar[count].style.backgroundColor="darkblue"
slide.forEach((value,index)=>{
    value.style.left = `${index * 100}%`
})
function goPre(){
    if(count > 0){
        count--;
        // console.log(count);
        slideImage()
        bar[count].style.color="red"
        bar[count].style.backgroundColor="darkblue"
    } 
        bar[count+1].style.color="black"
        bar[count+1].style.backgroundColor="aquamarine"
        // bar[0].style.color="red"

    }

function goNex(){
    // if(slide.style.transform)
    if(count < (slide.length-1)){
        count++;
        // console.log(count); 
        slideImage()
    }
    bar[count].style.color="red"
    bar[count].style.backgroundColor="darkblue"
    // bar[0].style.backgroundColor="darkblue"
}

function slideImage(){
    slide.forEach((value)=>{
        value.style.transform = `translateX(-${count * 100}%)`
    })
    // console.log(`p:${count-1}`);
    if(count > 0){
        bar[count-1].style.color="black"
        bar[count-1].style.backgroundColor="aquamarine"
    }else{
        bar[0].style.color="red"
        bar[0].style.backgroundColor="darkblue"
    }
}