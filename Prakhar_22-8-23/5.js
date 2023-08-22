function creteBase(addSix){
    return function(num){
       console.log(addSix + num);
    }
}
var addSix = creteBase(6);
addSix(10)
addSix(21)


