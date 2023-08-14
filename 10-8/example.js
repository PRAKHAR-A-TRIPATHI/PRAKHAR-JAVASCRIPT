

// function inputDates() {
//     let today = new Date();
//     let tomorrow = new Date(today);
//     tomorrow.setDate(tomorrow.getDate() + 1);

//     let todayString = today.toISOString().split('T')[0];
//     let tomorrowString = tomorrow.toISOString().split('T')[0];

//     // let todayInput = prompt("Please enter today's date (YYYY-MM-DD):", todayString);
//     // let tomorrowInput = prompt("Please enter tomorrow's date (YYYY-MM-DD):", tomorrowString);

//     console.log(todayString);
//     console.log(tomorrowString);
// }
// inputDates();


// function addDays(date, days) {
//     const result = new Date(date);
//     result.setDate(result.getDate() + days);
    // return result;
// }

// Example usage:
// const date = new Date('2023-08-10');
// const daysToAdd = 5;
// const newDate = addDays(date, daysToAdd);
// console.log(newDate); // 2023-08-15

// function containsLettersAndNumbers(inputStr) {
//     let hasLetter = false;
//     let hasNumber = false;
//     for (let i = 0; i < inputStr.length; i++) {
//         let char = inputStr.charAt(i);
//         if (isNaN(char * 1)) {
//             hasLetter = true;
//         } else {
//             hasNumber = true;
//         }
//         if (hasLetter && hasNumber) {
//             return true;
//         }
//     }
//     return false;
// }

// let input1 = "1fjsdsfsdvnv";
// let input2 = "1233fjsdsfsdvnv";
// let output1 = containsLettersAndNumbers(input1);
// let output2 = containsLettersAndNumbers(input2);
// console.log(`Output for ${input1}: ${output1}`);
// console.log(`Output for ${input2}: ${output2}`);

// let dateValid = document.getElementById("eDate");
// dateValid.addEventListener("input", () => {
//   let enteredDate = new Date(dateValid.value);
//   let currentDate = new Date();
//   let enteredDay = enteredDate.getDate();
//   let currentDay = currentDate.getDate();
//   let enteredMonth = enteredDate.getMonth();
//   let currentMonth = currentDate.getMonth();
//   if (enteredDay < currentDay && enteredMonth <= currentMonth) {
//     alert("Invalid Date");
//     dateValid.value = "";
//   } else {
//     console.log("Valid Date");
//   }
// });

