const racks = [
  { id: 1, num: 1 },
  { id: 2, num: 2 },
  { id: 3, num: 3 },
  { id: 4, num: 4 },
  { id: 5, num: 5 },
  { id: 6, num: 6 },
  { id: 7, num: 7 },
  { id: 8, num: 8 },
  { id: 9, num: 9 },
  { id: 10, num: 10 },
];

const batch = [
  { rack_id: 1, batch: "A1" },
  { rack_id: 2, batch: "A2" },
  { rack_id: 3, batch: "A3" },
  { rack_id: 4, batch: "A4" },
  { rack_id: 5, batch: "A5" },
  { rack_id: 6, batch: "A6" },
  { rack_id: 7, batch: "A7" },
  { rack_id: 8, batch: "A8" },
  { rack_id: 9, batch: "A9" },
  { rack_id: 10, batch: "A10" },
];

let medicine = document.getElementById("medicine");
let quantity = document.getElementById("quantity");
let form = document.getElementById("form");
let main = document.getElementById("addform");
var notification = document.getElementById("notification");

let valid = [];
// form.remove();

// form display
let popup = document.getElementById("popupForm");
popup.addEventListener("click", () => {
  form.style.display = "block";
  form.style.top = "50%";
  form.style.left = "50%";
  form.style.transform = "translate(-50%, -50%)";
  add.innerText = "Add Medicine";
  add.style.background="darkgreen"
});

popup.addEventListener("dblclick", () => {
  form.style.display = "none";
});

// medicine validation
medicine.addEventListener("input", () => {
  if (valid.includes(medicine.value)) {
    alert("invalid value");
    medicine.value = "";
  }
});

// dropdown
let rack = document.getElementById("Rack");
racks.forEach((element) => {
  rack.innerHTML += ` <option>${element.id}</option>`;
});
rack.value = "";

// batch number addd
let betNum = document.getElementById("betNum");
rack.addEventListener("input", () => {
  batch.forEach((element) => {
    if (element.rack_id == rack.value) {
      betNum.value = element.batch;
    }
  });
});

// display date
let bydate = document.getElementById("byDate");
bydate.addEventListener("input", () => {
  if (bydate.checked) {
    document.getElementById("date").style.display = "block";
    document.getElementById("days").style.display = "none";
    bydays.checked = false;
  } else {
    document.getElementById("date").style.display = "none";
  }
});

// display days
let bydays = document.getElementById("byDays");
bydays.addEventListener("input", () => {
  if (bydays.checked) {
    document.getElementById("days").style.display = "block";
    document.getElementById("date").style.display = "none";
    bydate.checked = false;
  } else {
    document.getElementById("days").style.display = "none";
  }
});

// date validation
let dateValid = document.getElementById("eDate");
dateValid.addEventListener("input", () => {
  let enteredDate = new Date(dateValid.value);
  let currentDate = new Date();
  //   let enteredDay = enteredDate.getDate();
  //   let currentDay = currentDate.getDate();
  //   let enteredMonth = enteredDate.getMonth();
  //   let currentMonth = currentDate.getMonth();
  //   if (enteredDay < currentDay && enteredMonth <= currentMonth) {
  //     alert("Invalid Date");
  //     dateValid.value = "";
  //   }

  if (enteredDate < currentDate) {
    alert("The input date is less than today's date.");
    dateValid.value = "";
  } //else if (enteredDate > currentDate) {
  //   alert("The input date is greater than today's date. Submit successfully.");
  // } else {
  //   alert("The input date is equal to today's date.");
  // }
});

let add = document.getElementById("addTable");
add.addEventListener("click", () => {
  
  // add by days
  let mdate = document.getElementById("mDate");
  let days = document.getElementById("dayss");
  let newDate = new Date(mdate.value);
  newDate.setDate(newDate.getDate() + Number(days.value));
  let localDate = newDate.toLocaleDateString();
  // console.log(localDate);
  if (localDate == "Invalid Date") {
    //  localDate = ""
    let newExpeDate = document.getElementById("eDate");
    localDate = newExpeDate.value;
  }

  // let submitInput = document.getElementById("submit");
  let vlaueMedic = medicine.value
  
  let at = medicine.value.at(0);
  console.log(typeof at);
  if (
    vlaueMedic === "" ||
    quantity.value === "" ||
    rack.value === "" ||
    betNum.value === "" ||
    localDate == "" ||
    quantity.value < 0
  ) {
    alert("invalid input");
    // notification
    submitInput.innerText = "Invalid value plaese submit Valid Value";
    submitInput.style.color = "red";
    notification.innerText = "Invalid value plaese submit Valid Value!";
    notification.style.background = "red";
    notification.classList.add("show");

    // Hide the notification after 3 seconds
    setTimeout(function () {
      notification.classList.remove("show");
    }, 3000);
  } else {
    form.style.display = "none";
    // add data in table add table row
    document.getElementById("tbody").innerHTML += `
  <tr>
    <td>${medicine.value}</td>
    <td>${quantity.value}</td>
    <td>${localDate}</td>
    <td>${rack.value}</td>
    <td>${betNum.value}</td>
    <td> <button class="delet">remove</button>
   <button class="edit">Edit</button></td>
</tr>
    `;

    // notification
    submitInput.innerText = "Form submitted successfully!";
    submitInput.style.color = "green";
    notification.innerText = "Form submitted successfully!";
    notification.classList.add("show");
    notification.style.background = "#4CAF50";

    // Hide the notification after 3 seconds
    setTimeout(function () {
      notification.classList.remove("show");
    }, 3000);

    //   display none form
    setTimeout(() => {
      form.style.display = "none";
    }, 10);

    //   medicine validation
    valid.push(medicine.value);
    console.log(valid);
    // if(valid.includes(medicine.value)){
    //     alert("invalid value");
    //     medicine.value=""
    // };
  }

  // remove tr
  //     let deletButtons = document.querySelectorAll(".delet");
  // deletButtons.forEach((button) => {
  //   button.addEventListener("click", () => {
  //     let tr = button.closest("tr");
  //     tr.remove();
  //   });
  // });
  let deletButtons = document.querySelectorAll(".delet");
  deletButtons.forEach((button) => {
    button.addEventListener("click", () => {
      let tr = button.parentNode.parentNode;
      tr.remove();
    });
  });

  // edit table row to click button
  let editButton = document.querySelectorAll(".edit");
  editButton.forEach((button) => {
    button.addEventListener("click", () => {
      // Change the text of the add button to "Update Value"
      add.innerText = "Update Value";
      add.style.background="blue"
      // form.style.display = "block";
      // Get the row that needs to be edited
      let tr = button.parentNode.parentNode;

      // Get the values from the row
      let medicineValue = tr.children[0].innerText;
      let quantityValue = tr.children[1].innerText;
      let dateValue = tr.children[2].innerText;
      let rackValue = tr.children[3].innerText;
      let betNumValue = tr.children[4].innerText;

      // Set the values in the form
      medicine.value = medicineValue;
      quantity.value = quantityValue;
      rack.value = rackValue;
      dateValid.value = dateValue;
      betNum.value = betNumValue;

      // Remove the row from the table
      tr.remove();
      
    });
    
  });

  medicine.value = "";
  quantity.value = "";
  rack.value = "";
  mdate.value = "";
  days.value = "";
  dateValid.value = "";
  betNum.value="";
});
