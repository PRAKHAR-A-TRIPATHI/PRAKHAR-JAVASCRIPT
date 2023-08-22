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
let popupForm = document.getElementById("popupForm");
let addMedicineForm = document.getElementById("addMedicineForm");
let medicineInput = document.getElementById("medicineInput");
let rack = document.getElementById("rack");
let betNumber = document.getElementById("betNumber");
let quantityInput = document.getElementById("quantityInput");
let date = document.getElementById("date");
let days = document.getElementById("days");
let byDaysCheak = document.getElementById("byDaysCheak");
let byDateCheak = document.getElementById("byDateCheak");
let byDateInput = document.getElementById("byDateInput");
let ManufactureDateInput = document.getElementById("ManufactureDateInput");
let dayInput = document.getElementById("dayInput");
let addMedicineBtn = document.getElementById("addMedicineBtn");
let UpdateTable = document.getElementById("UpdateTable");
let cancel = document.getElementById("cancel");
let notification = document.getElementById("notification");
const medicineTable = document.getElementById("medicineTableBody");
let addMedicneArray = [];
let i = 0;
UpdateTable.style.display = "none";
// add Medicine form
addMedicineForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let a = medicineInput.value;
  let medicineValue = a.trim();
  if (medicineValue === "") {
    error("invalid medicine...!");
  } else if (rack.value === "") {
    error("invalid rack....!");
  } else if (quantityInput.value === "") {
    error("invalid quntity...!");
  } else if (expireDate() === "" || expireDate() === "NaN-NaN-NaN") {
    error("invalid expaireDate....!");
  } else if (quantityInput.value < 0) {
    error("invalid quntity......!");
  } else if (today()) {
    error("Not today less Date Valid...!");
  } else if (addMedicneArray.some((item) => item.medicine === medicineValue)) {
    error("This medicine already exists.");
  } else {
    addMedicneArray.push({
      id: i++,
      medicine: medicineInput.value,
      rack: rack.value,
      betchNum: betNumber.value,
      quntity: quantityInput.value,
      expaireDate: expireDate(),
    });
    // console.log(addMedicneArray);
    addTableRow();
    addMedicineForm.reset();
    rack.value = "";
    addMedicineForm.style.display = "none";
    print("form Submit SussesFully...!");
  }
});
function emtyError(val) {
  document.getElementById(val).style.display = "block";
  document.getElementById(val).style.color = "red";
  document.getElementById(val).innerText = "filled Requaired";
  setTimeout(() => {
    document.getElementById(val).style.display = "none";
  }, 3000);
}
// add Recode form
let popupRecodeForm = document.getElementById("popupRecodeForm");
let addRecodeForm = document.getElementById("addRecodeForm");
let addRecodeSerchMedicine = document.getElementById("addRecodeSerchMedicine");
let SelctRecode = document.getElementById("SelctRecode");
let addRecodeQuntity = document.getElementById("addRecodeQuntity");
let addRecodeBtn = document.getElementById("addRecodeBtn");
let addRecodeCancelBtn = document.getElementById("addRecodeCancelBtn");
let tbody2 = document.getElementById("addRecodeTableBody");
const searchResultsList = document.getElementById("searchResultsList");
let serch;
let addRecodeArray = [];
let u = 0;
let recodeQuantity;
let newRec = 0; // Initialize newRec outside the event listener

addRecodeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (addRecodeSerchMedicine.value == "") {
    error("Not Empty Value..!");
    emtyError("addm")
  } else if (addRecodeQuntity.value == "" || addRecodeQuntity.value < 0) {
    error("Invalid Quantity....!");
    emtyError("addr")
  } else if (addRecodeQuntity.value > recodeQuantity) {
    error("This Quantity not Available in factory..!");
  } else if (!serch) {
    error("please select value...!");
  } else {
    const existingRecordIndex = addRecodeArray.findIndex(
      (item) => item.recodeMedicine === addRecodeSerchMedicine.value
    );
    const selectedMedicineIndex = addMedicneArray.findIndex(
      (item) => item.medicine === addRecodeSerchMedicine.value
    );
    if (existingRecordIndex !== -1) {
      // Update the existing record's quantity
      let a = parseInt(addRecodeQuntity.value);
      let b = parseInt(addRecodeArray[existingRecordIndex].recodeQuantity); // Existing quantity
      let c = a + b;
      addRecodeArray[existingRecordIndex].recodeQuantity = c;
      addMedicneArray[selectedMedicineIndex].quntity -= parseInt(
        addRecodeQuntity.value
      );
      // Update newRec to keep track of the current total
      newRec = c;
      // console.log(addRecodeArray);
    } else {
      // Subtract the recorded quantity from the corresponding medicine's quantity
      if (selectedMedicineIndex !== -1) {
        addMedicneArray[selectedMedicineIndex].quntity -= parseInt(
          addRecodeQuntity.value
        );
        // Check if the quantity is less than 0 and adjust it to 0
        if (addMedicneArray[selectedMedicineIndex].quntity < 0) {
          addMedicneArray[selectedMedicineIndex].quntity = 0;
        }
      }
      // Add a new record to the addRecodeArray
      addRecodeArray.push({
        id: u++,
        recodeMedicine: addRecodeSerchMedicine.value,
        recodeQuantity: addRecodeQuntity.value,
        slot: SelctRecode.value,
      });
      newRec = parseInt(addRecodeQuntity.value);
      print("add Recode Sussecfully...!");
    }

    // Update the medicine table and record table
    displayRecordsInTable();
    updateMedicineTable();

    // Clear the form and search results
    addRecodeSerchMedicine.value = "";
    addRecodeQuntity.value = "";
    searchResultsList.innerHTML = "";
    addRecodeForm.style.display = "none";
  }
});

// add out form recode
let popupRecodeOutForm = document.getElementById("popupRecodeOutForm");
let newOutForm = document.getElementById("newOutForm");
let outMedi = document.getElementById("outMedi");
let outquntity = document.getElementById("outquntity");
let purpose = document.getElementById("purpose");
let addOutBtn = document.getElementById("addOutBtn");
let cancel2 = document.getElementById("cancel2");
let tbody3 = document.getElementById("addOutRecodeTableBody");
let popul = document.getElementById("popul");
let newOutRecordArray = [];
let sel;
let p = 0;
let outRecode;
// Function to add a new row to the out record table
function addOutRowToTable(record) {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
      <td>${record.outMedicine}</td>
      <td>${record.outQuantity}</td>
      <td>${record.purpose}</td>
    `;
  tbody3.appendChild(newRow);
}

// Update the out record table with the latest records
function updateOutRecordTable() {
  tbody3.innerHTML = ""; // Clear existing rows
  for (const record of newOutRecordArray) {
    addOutRowToTable(record);
  }
}

// Event listener for the form submission
newOutForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    outMedi.value === "" ||
    outquntity.value === "" ||
    outquntity.value < 0 ||
    purpose.value === ""
  ) {
    error("Invalid input for out record.");
  } else if (outquntity.value > outRecode) {
    error("This Quntity Not Available...!");
  } else if (!sel) {
    error("Plaes Select value.");
  } else {
    const newOutRecord = {
      id: p++, // You might need to adjust the id increment accordingly
      outMedicine: outMedi.value,
      outQuantity: parseInt(outquntity.value),
      purpose: purpose.value,
    };
    const correspondingRecordIndex = addRecodeArray.findIndex(
      (item) => item.recodeMedicine === outMedi.value
    );
    if (correspondingRecordIndex !== -1) {
      const remainingQuantity =
        addRecodeArray[correspondingRecordIndex].recodeQuantity -
        parseInt(outquntity.value);
      if (remainingQuantity < 0) {
        addRecodeArray[correspondingRecordIndex].recodeQuantity = 0;
      } else {
        addRecodeArray[correspondingRecordIndex].recodeQuantity =
          remainingQuantity;
      }
    }
    newOutRecordArray.push(newOutRecord);
    print("add Out Recode Sussecfully...!");

    // Update the out record table
    updateOutRecordTable();

    // Clear the form
    outMedi.value = "";
    outquntity.value = "";
    purpose.value = "";
    newOutForm.style.display = "none";
    displayRecordsInTable();
    // updateMedicineTable();
  }
});

// Function to search for medicines in the addMedicneArray
function searchOutMedicine(query) {
  query = query.toLowerCase();
  const results = addRecodeArray.filter((item) =>
    item.recodeMedicine.toLowerCase().includes(query)
  );
  return results;
}

// Function to update the search results list
function updateSearchOutResults(results) {
  popul.innerHTML = "";
  if (results.length === 0) {
    const noResultsItem = document.createElement("li");
    noResultsItem.textContent = "No medicine found";
    popul.appendChild(noResultsItem);
    sel = false;
  } else {
    results.forEach((result) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${result.recodeMedicine}/${result.recodeQuantity}/${result.slot}`;
      listItem.addEventListener("click", () => {
        outMedi.value = result.recodeMedicine;
        outquntity.value = result.recodeQuantity; // Autofill quantity
        popul.innerHTML = ""; // Clear search results
        outRecode = result.recodeQuantity;
        sel = true;
      });
      popul.appendChild(listItem);
    });
  }
  if (outMedi.value === "") {
    popul.innerHTML = "";
  }
}

// Event listener for search input changes
outMedi.addEventListener("input", () => {
  const query = outMedi.value;
  const results = searchOutMedicine(query);
  updateSearchOutResults(results);
  sel = false;
});

popupRecodeOutForm.addEventListener("click", () => {
  newOutForm.style.display = "block";
  newOutForm.classList.add("position");
});
cancel2.addEventListener("click", () => {
  event.preventDefault();
  newOutForm.style.display = "none";
  newOutForm.classList.add("position");
});


function displayRecordsInTable() {
  let tableHtml = "";
  for (const record of addRecodeArray) {
    tableHtml += `
        <tr>
          <td>${record.recodeMedicine}</td>
          <td>${record.recodeQuantity}</td>
          <td>${record.slot}</td>
        </tr>
      `;
  }
  tbody2.innerHTML = tableHtml;
}

// Function to search for medicines in the addMedicneArray
function searchMedicine(query) {
  query = query.toLowerCase();
  const results = addMedicneArray.filter((item) =>
    item.medicine.toLowerCase().includes(query)
  );
  return results;
}

// Function to update the search results list
function updateSearchResults(results) {
  searchResultsList.innerHTML = "";
  if (results.length === 0) {
    const noResultsItem = document.createElement("li");
    noResultsItem.textContent = "No medicine found";
    searchResultsList.appendChild(noResultsItem);
    serch = false;
  } else {
    results.forEach((result) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${result.medicine}/${result.rack}/${result.betchNum}/${result.quntity}/${result.expaireDate}`;
      listItem.addEventListener("click", () => {
        addRecodeSerchMedicine.value = result.medicine;
        addRecodeQuntity.value = result.quntity; // Autofill quantity
        searchResultsList.innerHTML = ""; // Clear search results
        recodeQuantity = result.quntity;
        serch = true;
      });
      searchResultsList.appendChild(listItem);
    });
  }
  if (addRecodeSerchMedicine.value === "") {
    searchResultsList.innerHTML = "";
  }
}

// Event listener for search input changes
addRecodeSerchMedicine.addEventListener("input", () => {
  const query = addRecodeSerchMedicine.value;
  const results = searchMedicine(query);
  updateSearchResults(results);
  serch = false;
});

// add Medicine -----------------------------
popupRecodeForm.addEventListener("click", () => {
  addRecodeForm.style.display = "block";
  addRecodeForm.classList.add("position");
});
addRecodeCancelBtn.addEventListener("click", () => {
  event.preventDefault();
  addRecodeForm.style.display = "none";
});

let editingItemId = null;
function editRow(id) {
  // Find the item in the array by its ID
  const itemToEdit = addMedicneArray.find((item) => item.id === id);
  if (itemToEdit) {
    editingItemId = id;
    // Update form fields with the selected object's values
    medicineInput.value = itemToEdit.medicine;
    rack.value = itemToEdit.rack;
    betNumber.value = itemToEdit.betchNum;
    quantityInput.value = itemToEdit.quntity;
    byDateInput.value = itemToEdit.expaireDate;
    // Toggle buttons and form display
    addMedicineBtn.style.display = "none";
    UpdateTable.style.display = "block";
    addMedicineForm.style.display = "block";
    byDateCheak.checked=true;
  }
}

function updateTable() {
  event.preventDefault();
  const itemToUpdate = addMedicneArray.find(
    (item) => item.id === editingItemId
  );
  if (itemToUpdate) {
    // Update the item's values
    itemToUpdate.medicine = medicineInput.value;
    itemToUpdate.rack = rack.value;
    itemToUpdate.betchNum = betNumber.value;
    itemToUpdate.quntity = quantityInput.value;
    itemToUpdate.expaireDate = expireDate();
    // Reset the form and buttons
    addMedicineForm.reset();
    addMedicineBtn.style.display = "block";
    UpdateTable.style.display = "none";
    addMedicineForm.style.display = "none";
    editingItemId = null;
    // Update the table rows
    addTableRow();
    // console.log(addMedicneArray);
  }
}
UpdateTable.addEventListener("click", updateTable);

function addTableRow() {
  // Clear the existing table
  medicineTable.innerHTML = "";

  // Iterate through the array and create table rows
  addMedicneArray.forEach((item) => {
    let row = document.createElement("tr");
    row.innerHTML = ` 
        <td>${item.medicine}</td>
        <td>${item.rack}</td>
        <td>${item.betchNum}</td>
        <td>${item.quntity}</td>
        <td>${item.expaireDate}</td>
        <td>
          <button id="edit" onclick="editRow(${item.id})">Edit</button>
          <button id="remove" onclick="removeRow(${item.id})">Remove</button>
        </td>
      `;
    medicineTable.appendChild(row);
  });
}
// Function to update the medicine table
function updateMedicineTable() {
    let tableHtml = "";
    for (const medicine of addMedicneArray) {
      tableHtml += `
          <tr>
            <td>${medicine.medicine}</td>
            <td>${medicine.rack}</td>
            <td>${medicine.betchNum}</td>
            <td>${medicine.quntity}</td>
            <td>${medicine.expaireDate}</td>
            <td>
            <button id="edit" onclick="editRow(${medicine.id})">Edit</button>
            <button id="remove" onclick="removeRow(${medicine.id})">Remove</button>
          </td>
          </tr>
        `;
    }
    medicineTable.innerHTML = tableHtml;
  }
  
function removeRow(id) {
  addMedicneArray = addMedicneArray.filter((item) => item.id !== id);
  addTableRow();
  // console.log(addMedicneArray);
}

popupForm.addEventListener("click", () => {
  addMedicineForm.style.display = "block";
  addMedicineForm.classList.add("position");
});
cancel.addEventListener("click", () => {
  event.preventDefault();
  addMedicineForm.style.display = "none";
});
racks.forEach((element) => {
  rack.innerHTML += ` <option>${element.id}</option>`;
});
rack.value = "";
rack.addEventListener("input", () => {
  batch.forEach((element) => {
    if (element.rack_id == rack.value) {
      betNumber.value = element.batch;
    }
  });
});

function today() {
  let today = new Date();
  today.setHours(0, 0, 0, 0);
  let inputdate = new Date(byDateInput.value);
  inputdate.setHours(0, 0, 0, 0);
  if (inputdate < today) {
    byDateInput.value = "";
    return true;
  }
}

byDateCheak.addEventListener("click", () => {
  if (byDateCheak.checked) {
    date.style.display = "block";
    days.style.display = "none";
    byDaysCheak.checked = false;
  } else {
    date.style.display = "none";
  }
});
byDaysCheak.addEventListener("click", () => {
  if (byDaysCheak.checked) {
    days.style.display = "block";
    date.style.display = "none";
    byDateCheak.checked = false;
  } else {
    days.style.display = "none";
  }
});

function error(value) {
  notification.innerText = value;
  notification.style.background = "red";
  notification.classList.add("show");
  setTimeout(function () {
    notification.classList.remove("show");
  }, 3000);
}
function print(value) {
  notification.innerText = value;
  notification.style.background = "green";
  notification.classList.add("show");
  setTimeout(function () {
    notification.classList.remove("show");
  }, 3000);
}

function expireDate() {
  let expireDate;
  if (byDaysCheak.checked) {
    let a = ManufactureDateInput.value;
    let b = dayInput.value;
    let selected_date = new Date(a);
    selected_date.setDate(selected_date.getDate() + Number(b));
    expireDate = `${String(selected_date.getFullYear()).padStart(
      2,
      "0"
    )}-${String(selected_date.getMonth() + 1).padStart(2, "0")}-${String(
      selected_date.getDate()
    ).padStart(2, "0")}`;
  } else {
    expireDate = byDateInput.value;
  }
  return expireDate;
}
