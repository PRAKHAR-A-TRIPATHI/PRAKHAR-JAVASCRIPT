function adddays(year,month,day,hour,Minutes,second){
    var result = new Date();
    !year ? result.getFullYear() : result.setFullYear(result.getFullYear()+year);
    !month ? result.getMonth() : result.setMonth(result.getMonth()+month);
    !day ? result.getDate() : result.setDate(result.getDate()+day);
    !hour ? result.getHours() : result.setHours(result.getHours()+hour);
    !Minutes ? result.getMinutes() : result.setMinutes(result.getMinutes()+Minutes);
    !second ? result.getSeconds():result.setSeconds(result.getSeconds()+second);
    // if(!year){
    //     result.getFullYear();
    // }else{
    //     result.setFullYear(result.getFullYear()+year)
    // }
    // if(!month){
    //     result.getMonth();
    // }else{
    //     result.setMonth(result.getMonth()+month)
    // }
    // if(!day){
    //     result.getDate();
    // }else{
    //     result.setDate(result.getDate()+day)
    // }
    return result.toLocaleString() + " "+"second:"+result.getSeconds();
    
}
console.log(adddays(0,1,10,10,10,0,));
