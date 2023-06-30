// Write a code for returning the greeting message as per current time.
// const date = new Date();
// const currentHour = date.getHours();

// if (currentHour >= 0 && currentHour < 12) {
//   console.log("Good morning!");
// } else if (currentHour >= 12 && currentHour < 18) {
//   console.log("Good afternoon!");
// } else {
//   console.log("Good evening!");
// }

// Write a code for returning the day name based on the digit. (like 1 for monday and so on.)

// let day=3;
// switch (day) {
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("wedenesday");
//         break;
//     case 4:
//         console.log("thursday");
//         break;
//     case 5:
//         console.log("friday");
//         break;
//     case 6:
//         console.log("saturaday");
//         break;
//     case 7:
//         console.log("sunday");
//         break;

//     default:
//         break;
// }

//3
// for(let i =1;i<=4;i++){
//     var row="";
//     for(let j=1;j<=5;j++){
//      row+="*";
//     }
//     console.log(row);
// }

// //4
// for(let i=1;i<=4;i++){
//     var row="";
//     for(let j=1;j<=i;j++){
//         row+="*";
//     }
//     console.log(row);
// }

//5
// for(let i=4;i>=1;i--){
//     var row=""
//     for(let j=1;j<=i;j++){
//         row+="*";
//     }
//     console.log(row);
// }

//6
// function getNumberOfDays(num) {
//     switch (num) {
//         case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//             return 31;
//         case 2:
//             return 28;
//         case 4: case 6: case 9: case 11:
//             return 30;
//         default:
//             return "Invalid number for month.";
//     }
// }
// console.log(getNumberOfDays(1));

//7
// for(let i=0;i<=10;i++){
//     console.log(i);
// }

//8
// function printOddNumbers(start, end) {
//     for (let i = start; i <= end; i++) {
//       if (i % 2 !== 0) {
//         console.log(i);
//       }
//     }
//   }
// console.log(printOddNumbers(1,99));

//9
// function printEvenNumbers(start, end) {
//     for (let i = start; i <= end; i++) {
//       if (i % 2 === 0) {
//         console.log(i);
//       }
//     }
//   }
// console.log(printEvenNumbers(1,100));

//10
// function calculate(operation, num1, num2) {
//     switch (operation) {
//       case '+':
//         return num1 + num2;
//       case '-':
//         return num1 - num2;
//       case '*':
//         return num1 * num2;
//       case '/':
//         return num1 / num2;
//       case '%':
//         return num1 % num2;
//       default:
//         return 'Invalid operation';
//     }
//   }
  
//   console.log(calculate('+', 5, 6)); // 11
//   console.log(calculate('-', 10, 6)); // 4

  

// const names  = [
//     {first_name: "Asndnm", last_name: "L demo"},
//     {first_name: "Qpweui", last_name: "Alxezx"},
//     {first_name: "Pqwern", last_name: "Ruse"},
//     {first_name: "Wiruyn", last_name: "Ruby"},
//     {first_name: "Erpso", last_name: "Loal"},
//     {first_name: "Demors", last_name: "Poet"},
//     {first_name: "Aleos", last_name: "Lkeu"},
//     ]
//     // Write a code that adds new key in each object named
//     full_name: first_name + last_name

const names = [
  { first_name: "Asndnm", last_name: "L demo" },
  { first_name: "Qpweui", last_name: "Alxezx" },
  { first_name: "Pqwern", last_name: "Ruse" },
  { first_name: "Wiruyn", last_name: "Ruby" },
  { first_name: "Erpso", last_name: "Loal" },
  { first_name: "Demors", last_name: "Poet" },
  { first_name: "Aleos", last_name: "Lkeu" },
];

//   names.forEach((name) => {
//     name.full_name = name.first_name + ' ' + name.last_name;
//   });

for (let i = 0; i < names.length; i++) {
    const fullName = names[i].first_name + " " + names[i].last_name;
    names[i].full_name = fullName;
  }

  console.log(names);

// 11
// function getGrade(marks) {
//   if (marks >= 90) {
//     return "A+";
//   } else if (marks >= 80) {
//     return "A";
//   } else if (marks >= 70) {
//     return "B";
//   } else if (marks >= 60) {
//     return "C";
//   } else if (marks >= 50) {
//     return "D";
//   } else {
//     return "F";
//   }
// }

// console.log(getGrade(85)); // A
// console.log(getGrade(72)); // B
// console.log(getGrade(60)); // C
// console.log(getGrade(45)); // F

//12
// function convertToINR(currency_code, amount) {
//     const exchange_rates = {
//       USD: 74.05,
//       EUR: 86.91,
//       GBP: 101.57,
//       JPY: 0.67,
//       AUD: 54.32,    
//       CAD: 58.67,
//       CHF: 80.47,
//       CNY: 11.51,
//       HKD: 9.51,
//       NZD: 50.71
//     };
  
//     if (currency_code in exchange_rates) {
//       return amount * exchange_rates[currency_code];
//     } else {
//       return 'Invalid currency code';
//     }
//   }
  
//   console.log(convertToINR('USD', 100)); // 7405
//   console.log(convertToINR('EUR', 100)); // 8691
  


//   13

// function reverseString(str) {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//       reversed += str[i];
//     }
//     return reversed;
//   }
//   console.log(reverseString('Hello'));
//   console.log(reverseString('OpenAI'));
//   console.log(reverseString('12345'));

// //   --//--
//   function reverseString(str) {
//     return str.split('').reverse().join('');//join is need otherwise it op=['o','l','l','h']
//   }

//   console.log(reverseString('Hello')); // "olleH"
//   console.log(reverseString('OpenAI')); // "IAneuqO"
//   console.log(reverseString('12345')); // "54321"

// 13;
// function printObject(obj) {
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       console.log(`${key}: ${obj[key]}`);
//     }
//   }
// }

// const person = {
//   name: "prakhar",
//   lastname: "tripathi",
//   age: 18,
//   city: "ahmedabad",
// };

// printObject(person);

// //14
// let obj = {
//     name:"prakhar",
//     no:"20",
//     course:"B.tech",
//     lname:"tripathi",
// }
// for(var keys in obj){
//     console.log(keys,obj[keys]);
// }

// function printOdd(start, end){
// 	for(let i = start; i< end; i++){
//         if(i%2==0||i=10){
//             console.log(i);
//         }
// 	// console.log(i);
// }
// }

//printOdd(1,30);


// for(var i=1;i<=10;i++){
//     console.log(i);
//     // continue;
//     break;
// }
// console.log(3);


// for (let i=0; i<=10;i++){
//     var sum = sum+i;
//     console.log(sum);
// }

// var num=10;
// for(let i =1;i<=10;i++){
//     console.log(num*i);
// }

// for (var i =1;i<=10;i++){
//     if(i==3){
//         continue;
//         continue;
//         console.log(i);
//     }
//     console.log(i);
// }