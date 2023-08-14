let a = new Date();
console.log(a.toISOString().split("T")[0]);

let localDateString = '12/31/2021';
let dateParts = localDateString.split('/');
let month = dateParts[0] - 1; // months are 0-indexed in JavaScript
let day = dateParts[1];
let year = dateParts[2];
let date = new Date(Date.UTC(year, month, day));
let isoDateString = date.toISOString();
console.log(isoDateString);

const days = document.getElementsByName('dayss')[0]