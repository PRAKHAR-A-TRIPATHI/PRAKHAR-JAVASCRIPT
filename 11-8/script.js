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

let medicineInput = document.getElementById("medicine");
let quantityTnput = document.getElementById("quantity");
let form = document.getElementById("form");
let main = document.getElementById("addform");
let buttondiv = document.querySelector(".button");
var notification = document.getElementById("notification");
let popupButton = document.getElementById("popupForm");
let rackInput = document.getElementById("Rack");
let betchNum = document.getElementById("betNum");
let byDateCheack = document.getElementById("byDate");
let byDaysCheak = document.getElementById("byDays");
let datesDiv = document.getElementById("date");
let daysDiv = document.getElementById("days");
let byDateInput = document.getElementById("eDate");
let formSubmitBtn = document.getElementById("addTable");
let manufacturDate = document.getElementById("mDate");
let manufactdays = document.getElementById("dayss");
let cancel = document.getElementById("cancel");
let editTable = document.getElementById("editTable");
let validArray = [];
// console.log(maindiv);
// display form
popupButton.addEventListener("click", () => {
  buttondiv.appendChild(formSubmitBtn);
  form.style.display = "block";
  form.style.top = "50%";
  form.style.left = "50%";
  form.style.transform = "translate(-50%, -50%)";
  // formSubmitBtn.style.display = "block";
  editTable.style.display = "none";
  medicineInput.value = "";
  quantityTnput.value = "";
  rackInput.value = "";
  manufactdays.value = "";
  manufacturDate.value = "";
  byDateInput.value = "";
  betchNum.value = "";
});

cancel.addEventListener("click", () => {
  form.style.display = "none";
});
// medicine validation
medicineInput.addEventListener("input", () => {
  if (validArray.includes(medicineInput.value)) {
    notification.innerText = "not Enter Same medicine";
    notification.style.background = "red";
    notification.classList.add("show");
    medicineInput.value = "";
    setTimeout(function () {
      notification.classList.remove("show");
    }, 3000);
  }
});

// drop down list
racks.forEach((element) => {
  rackInput.innerHTML += ` <option>${element.id}</option>`;
});
rackInput.value = "";

// batch number addded
rackInput.addEventListener("input", () => {
  batch.forEach((element) => {
    if (element.rack_id == rackInput.value) {
      betchNum.value = element.batch;
    }
  });
});

// block and none date display
byDateCheack.addEventListener("click", () => {
  if (byDateCheack.checked) {
    datesDiv.style.display = "block";
    daysDiv.style.display = "none";
    byDaysCheak.checked = false;
  } else {
    datesDiv.style.display = "none";
  }
});

//   block and none date display
byDaysCheak.addEventListener("input", () => {
  if (byDaysCheak.checked) {
    daysDiv.style.display = "block";
    datesDiv.style.display = "none";
    byDateCheack.checked = false;
  } else {
    daysDiv.style.display = "none";
  }
});

// date validation Exparie only today and upper date valid
byDateInput.addEventListener("input", () => {
  let today = new Date();
  today.setHours(0, 0, 0, 0);
  let inputdate = new Date(byDateInput.value);
  inputdate.setHours(0, 0, 0, 0);
  if (inputdate < today) {
    notification.innerText = "invalid date......!";
    notification.style.background = "red";
    notification.classList.add("show");
    byDateInput.value = "";
    setTimeout(function () {
      notification.classList.remove("show");
    }, 3000);
  }
});

formSubmitBtn.addEventListener("click", () => {
  // add by days validation
  let newDate = new Date(manufacturDate.value);
  newDate.setDate(newDate.getDate() + Number(manufactdays.value));
  let localDate = newDate.toLocaleDateString();
  if (localDate == "Invalid Date") {
    let a = new Date(byDateInput.value);
    localDate = a.toLocaleDateString();
  }

  // form validation
  let valueofMedicine = medicineInput.value.replaceAll(" ", "");
  if (
    valueofMedicine === "" ||
    quantityTnput.value === "" ||
    quantityTnput.value < 0 ||
    rackInput.value === "" ||
    betchNum.value === "" ||
    localDate == ""
  ) {
    if (valueofMedicine === "") {
      notification.innerText = "invalid medicine...!";
      // medicineInput.style.outline="2px solid red"
      medicineInput.focus();
      medicineInput.value = "";
    } else if (rackInput.value === "") {
      notification.innerText = "invalid Rack input ....!";
      // rackInput.style.outline="2px solid red"
      rackInput.focus();
      rackInput.value = "";
    } else if (betchNum.value === "") {
      notification.innerText = "invalid Betch Num ....|";
      // betchNum.style.outline="2px solid red";
      betchNum.focus();
    } else if (quantityTnput.value === "") {
      notification.innerText = "invalid quntity ....!";
      quantityTnput.value = "";
      // quantityTnput.style.outline="2px solid red";
      quantityTnput.focus();
    } else if (quantityTnput.value < 0) {
      notification.innerText = "invalid quntity not allow less than 0";
      quantityTnput.value = "";
      // quantityTnput.style.outline="2px solid red";
      quantityTnput.focus();
    } else if (localDate === "") {
      notification.innerText = "invalid Expaie Date ...!";
      // manufacturDate.style.outline ="1px solid red ";
      // manufacturDate.focus();
    }
    notification.style.background = "red";
    notification.classList.add("show");
    setTimeout(function () {
      notification.classList.remove("show");
    }, 3000);
  } else {
    // add table th value
    document.getElementById("tbody").innerHTML += `
    <tr>
      <td>${medicineInput.value}</td>
      <td>${quantityTnput.value}</td>
      <td>${localDate}</td>
      <td>${rackInput.value}</td>
      <td>${betchNum.value}</td>
      <td> <button class="delet">remove</button>
     <button class="edit">Edit</button></td>
  </tr>
      `;

    //   medicine validation
    validArray.push(medicineInput.value);
    console.log(validArray);

    // show notification
    notification.innerText = "Form submitted successfully!";
    notification.classList.add("show");
    notification.style.background = "#4CAF50";

    // Hide the notification after 3 seconds
    setTimeout(function () {
      notification.classList.remove("show");
    }, 3000);
    form.style.display = "none";
  }
  //   remove list
  let deletButtons = document.querySelectorAll(".delet");
  deletButtons.forEach((button) => {
    button.addEventListener("click", () => {
      let tr = button.parentNode.parentNode;
      let index = validArray.indexOf(tr.children[0].innerText);
      if (index > -1) {
        validArray.splice(index, 1);
        console.log(validArray);
      }
      // console.log(index);
      tr.remove();
      notification.innerText = "delete List Item......!";
      notification.style.background = "red";
      notification.classList.add("show");
      byDateInput.value = "";
      setTimeout(function () {
        notification.classList.remove("show");
      }, 3000);
    });
  });

  let editButtons = document.querySelectorAll(".edit");
  editButtons.forEach((button) => {
    button.addEventListener("click", () => {
      let tr = button.parentNode.parentNode;

      // update button
      editTable.style.display = "block";
      // formSubmitBtn.style.display = "none";
      formSubmitBtn.remove();

      // Get the current row data
      let medicineValue = tr.children[0].innerText;
      let quantityValue = tr.children[1].innerText;
      let dateValue = tr.children[2].innerText;
      let rackValue = tr.children[3].innerText;
      let batchValue = tr.children[4].innerText;

      // Set the form input values to the current row data
      medicineInput.value = medicineValue;
      quantityTnput.value = quantityValue;
      byDateInput.value = dateValue;
      rackInput.value = rackValue;
      betchNum.value = batchValue;

      // edit row
      editTable.addEventListener("click", () => {
        let newDate = new Date(manufacturDate.value);
        newDate.setDate(newDate.getDate() + Number(manufactdays.value));
        let localDate = newDate.toLocaleDateString();
        if (localDate == "Invalid Date") {
          let a = new Date(byDateInput.value);
          localDate = a.toLocaleDateString();
        }

        // let tDate = localDate.replace(/\//g, "-");
        tr.children[0].innerText = medicineInput.value;
        tr.children[1].innerText = quantityTnput.value;
        tr.children[2].innerText = localDate;
        tr.children[3].innerText = rackInput.value;
        tr.children[4].innerText = betchNum.value;
        if (localDate == "Invalid Date") {
          notification.innerText = "Invalid Date . ...!";
          notification.classList.add("show");
          notification.style.background = "red";
          form.style.display = "block";
          setTimeout(function () {
            notification.classList.remove("show");
          }, 3000);
        } else {
          validArray.push(medicineInput.value);
          notification.innerText = "Form Update successfully!";
          notification.classList.add("show");
          notification.style.background = "blue";
          form.style.display = "none";
          setTimeout(function () {
            notification.classList.remove("show");
          }, 3000);
        }
      });
      // Remove the current row
      // tr.remove();

      // Show the form
      form.style.display = "block";
    });
  });
});
