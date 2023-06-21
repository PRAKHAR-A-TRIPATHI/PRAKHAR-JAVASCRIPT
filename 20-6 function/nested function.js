function addsquares(a,b) {

    const ab=square(a);
    const bc=square(b);

   function square(num){
    return num*num;
   }
}

console.log(addsquares(3,4));
