function transform(date, sep) {
  let currDate = new Date();
  let dateObj = {
    "YYYY/MM/DD": currDate.getFullYear() + sep +  (currDate.getMonth() + 1) + sep + currDate.getDate(),
    "YYYY/DD/MM":currDate.getFullYear()+sep+(currDate.getMonth()+1)+sep+currDate.getDate(),
    "DD/MM/YYYY": currDate.getDate() +sep + (currDate.getMonth() + 1) + sep +currDate.getFullYear(),
    "MM/DD/YYYY": currDate.getMonth()+1+sep+currDate.getDate()+sep+currDate.getFullYear(),
    "HH:MM:SS":currDate.getHours() +":" + currDate.getMinutes() +":" +currDate.getSeconds(),     
  };
  return dateObj[date];
}
console.log(transform("YYYY/MM/DD", "/"));
console.log(transform("YYYY/DD/MM", "/"));
console.log(transform("DD/MM/YYYY", "/"));
console.log(transform("MM/DD/YYYY", "/"));
console.log(transform("DD/YYYY/MM", "/"));

console.log(transform(`HH:MM:SS`));
