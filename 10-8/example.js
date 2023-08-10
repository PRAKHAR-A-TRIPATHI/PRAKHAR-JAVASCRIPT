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


function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

// Example usage:
const date = new Date('2023-08-10');
const daysToAdd = 5;
const newDate = addDays(date, daysToAdd);
console.log(newDate); // 2023-08-15


