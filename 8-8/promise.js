function getchess(){
    setTimeout(()=>{
        const chees = "chees";
        return chees;
    },2000)
}

let ticket =  new Promise((resolve, reject) => {
    const isBorarded = true;
    if(isBorarded){
        resolve("you are not in the flight")
    }else{
        reject("reject")
    }
});

ticket.then((resove)=>{
    console.log(resove);
})
.catch((reject)=>{
    console.log(reject);
}).finally((end)=>{
    console.log("done");
})