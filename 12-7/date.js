function adddays(year,month,day){
    var result = new Date();
    if(!year){
        result.getFullYear();
    }else{
        result.setFullYear(result.getFullYear()+year)
    }
    if(!month){
        result.getMonth();
    }else{
        result.setMonth(result.getMonth()+month)
    }
    if(!day){
        result.getDate();
    }else{
        result.setDate(result.getDate()+day)
    }
    
    return result.toLocaleString();
}
console.log(adddays(1,1));
