let direction = {x:0,y:0};
let speed = 2;
let lastPaintTime =0;
let snakeArr = [
    {x:13,y:15}
]
food =    {x:6,y:7};        

// function
function main(ctime) {
    window.requestAnimationFrame(main);
    if((ctime - lastPaintTime)/1000<1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
    // console.log(ctime);
}

function gameEngine(){
    //part 1 updating the snake
   


    // part 2 render sanke and food
    board.innerHTML="";
    snakeArr.forEach((e,index)=>{
        snakeElement = document.createElement('div');
        snakeElement.stlye.gridRowStart=e.y;
        snakeElement.stlye.gridColumnStart=e.x;
        snakeElement.classList.add("snake")
        board.appendChild(snakeElement);
    });
    // display food 
    foodElement = document.createElement('div');
    foodElement.stlye.gridRowStart=e.y;
    foodElement.stlye.gridColumnStart=e.x;
    foodElement.classList.add("food")
    board.appendChild(foodElement);
}

// logic
window.requestAnimationFrame(main);