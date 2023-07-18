var x=1;

function fun(){
    var x =10;
    console.log(x);
    function fun1(){
        console.log(x);
    }
    fun1()
}
fun();

function fun2(){
    console.log(x);
}

fun2()


// var x=10;
// {
//     var x=20;
// }
// console.log(x);

// if(true){
//     let y=30;
// }
// console.log(y);

function a(){
    var x= "ascdd"
    function b() {
        console.log(x);
    function c(){
        console.log(x);
        var y="odjgif";
    }
    console.log(y);
    c();
    }
    b();
}
a();

