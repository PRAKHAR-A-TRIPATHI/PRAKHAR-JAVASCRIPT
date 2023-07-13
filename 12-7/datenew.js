// var now = new Date("january 2 2005");
// // console.log(now.setDate(20));
// // now.setDate(5);
// // now.setMinutes(20)
// console.log(now.getDate()+now.getMonth()+now.getFullYear);

// Timestamp method
// let a=new Date(-610600000);
// console.log(a);

// Date string method
// let a= new Date("July 4 1776 12:30");
// console.log(a);

// Date and time method
// let a=new Date(1776, 6, 4, 12, 30, 0, 0);
// console.log(a);


// const today = new Date();
// if (today.getDate() === 3 && today.getMonth() === 9) {
//   console.log("It's October 3rd.");
// } else {
//   console.log("It's not October 3rd.");
// }

// utc
// const now = new Date();
// console.log(now.getHours());
// console.log(now.getUTCHours());

// const time1 = new Date(0)
// console.log(time1);
// const time2 = new Date(100000000000)
// console.log(time2);

// diffrent between days 
// let date1 = new Date("2022-07-01");
// let date2 = new Date("2022-07-10");
// let diffInTime = date2.getTime() - date1.getTime();
// let diffInDays = diffInTime / (-1000 * 3600 * 24);
// console.log(diffInDays); // Output: 9

// function countDays(date1, date2) {
//     let diffInTime = date2.getTime() - date1.getTime();
//     let diffInDays = diffInTime / (1000 * 3600 * 24);
//     return diffInDays;
//   }
  
//   let date1 = new Date("2022-07-01");
//   let date2 = new Date("2022-07-10");
//   console.log(countDays(date1, date2)); 


// const event = new Date('Feb 19, 2020 23:15:30');
// event.setDate(15);
// console.log(event.getDate()); 
// event.setDate(35);
// console.log(event.getDate()); 
  
// let Jan02_1970 = new Date(24 * 3600 * 1000);
// console.log( Jan02_1970 );

// let Dec31_1969 = new Date(-24 * 3600 * 1000);
// alert( Dec31_1969 );

