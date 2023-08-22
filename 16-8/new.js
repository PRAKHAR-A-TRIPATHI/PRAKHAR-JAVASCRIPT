const date_radio = document.querySelector("#expiryDate");
const day_radio = document.querySelector("#expiryDay");
const rackSelect = document.querySelector("#rack");
const dateWraperForDate = document.querySelector("#dateWraperForDate");
const dateDayWraperForDays = document.querySelector("#dateDayWraperForDays");
const popUpMedicine = document.querySelector(".popUpMedicine");
const model_wraper = document.querySelector(".model-wraper");
const batchNnumber = document.querySelector("#batchNnumber");
const addMedicineBtn = document.querySelector(".addMedicineBtn");
const popUpCancel = document.querySelector(".popUpCancel");
const popUpUpdate = document.querySelector(".popUpUpdate");
const notification_container = document.querySelector(".notification-container");

const medicine_input = document.querySelector("#medicine");
const rack_input = document.querySelector("#rack");
const quantity_input = document.querySelector("#quantity");
const batchNnumber_input = document.querySelector("#batchNnumber");
const expiryDateOfDate_input = document.querySelector("#expiryDateOfDate");
const expiryDateOfDay_input = document.querySelector("#expiryDateOfDay");
const expiryDays_input = document.querySelector("#expiryDays");
const table = document.querySelector("#table1");
const table2 = document.querySelector("#table2");
const suggestion_wraper = document.querySelector('.suggestion-wraper')

const addRecordBtn = document.querySelector('.addRecordBtn')
const popUpAddRecordCancelBtn = document.querySelector('.popUpAddRecordCancelBtn')
const addRecordOutBtn = document.querySelector('.addRecordOutBtn')
const popUpAddRecordOutBtn = document.querySelector('.popUpAddRecordOutBtn')
const popUpAddRecordOutCancelBtn = document.querySelector('.popUpAddRecordOutCancelBtn')
const record_model_wraper = document.querySelector('.record-model-wraper')
const matched_medicine = document.querySelectorAll('li')
const popUpAddRecordBtn = document.querySelector('.popUpAddRecordBtn')
const record_search_validation = document.querySelector('#record_search_validation')
const record_out_model_wraper = document.querySelector('.record-out-model-wraper')
const recordOutSuggestionWraper = document.querySelector('.recordOutSuggestionWraper')
const searchMedicineFromRecord = document.querySelector('#searchMedicineFromRecord')


const searchMedicine = document.querySelector('#searchMedicine')
const recordQuantity = document.querySelector('#recordQuantity')
const recordOutQuantity = document.querySelector('#recordOutQuantity')
const selectAny = document.querySelector('#selectAny')
const table1Tbody = document.querySelector('#table1Tbody')
const table2Tbody = document.querySelector('#table2Tbody')
const table3Tbody = document.querySelector('#table3Tbody')
const cleardataBtn = document.querySelector('.cleardataBtn')

const input = document.querySelectorAll('input')
const p = document.querySelectorAll('p')


// popUp-1++++++++++++++++++++++++++++

const racks = [
    { id: 1, name: 1 },
    { id: 2, name: 2 },
    { id: 3, name: 3 },
    { id: 4, name: 4 },
    { id: 5, name: 5 },
    { id: 6, name: 6 },
    { id: 7, name: 7 },
    { id: 8, name: 8 },
    { id: 9, name: 9 },
    { id: 10, name: 10 },
  ];
  
  const batches = [
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
  
  let tableRows = getLocalStrgTableRow() || [];
  let medicine_box = getLocalStrgMediBox() || []
cleardataBtn.addEventListener('click',() => {
  if (confirm('Are you sure you want to clear all data')) {
    localStorage.clear();
    medicine_box = []
    location.reload()
    addMedicine_row_printer();
  }
})

  racks.forEach((obj) => {
    let opt = document.createElement("option");
    opt.innerText = `id : ${obj.id} , name : ${obj.name}`;
    opt.value = obj.id;
    rackSelect.appendChild(opt);
  });
  
  rackSelect.addEventListener("click", () => {
    if (rackSelect.value != 0) {
      let selectedRack = rackSelect.value;
      let same = batches.find((b) => b.rack_id == selectedRack);
      batchNnumber.value = same.batch;
    }
  });
  
  addMedicineBtn.addEventListener("click", () => {
    localStrgTableRow()
    localStrgMediBox()
    record_model_wraper.style.display = 'none'
    record_out_model_wraper.style.display = 'none'
    model_wraper.style.display = "block";
    popUpMedicine.style.display = "block";
  });

  popUpCancel.addEventListener("click", (event) => {
    event.preventDefault();
    model_wraper.style.display = "none";
    popUpUpdate.style.display = "none";
    defaultValues();
  });
  
date_radio.addEventListener("click", () => {
  dateDayWraperForDays.style.display = "none";
  dateWraperForDate.style.display = "block";
});

day_radio.addEventListener("click", () => {
  dateDayWraperForDays.style.display = "block";
  dateWraperForDate.style.display = "none";
});

popUpMedicine.addEventListener('click',medicineAdder)

function medicineAdder(event) {
    popUpUpdate.style.display = "none";
    event.preventDefault();
    if(validation()){

    }
}

function medicine_validation() {
    let b = medicine_input.value.replaceAll(" ", "");
    if (!b) {
      return false;
    }
    return true;
  }

  function validation() {
    if (medicine_validation()) {
      medicine_box = getLocalStrgMediBox()
      let ex = medicine_box.includes(medicine_input.value.toLowerCase());
      if (ex) {
        alert("this medicine already exists");
        return false;
      }
    } else {
      alert("please enter valid medicine");
      return false;
    }
    if (rack_input.value == 0) {
      alert("please select rack");
      return false;
    }
    if (quantity_input.value < 1) {
      alert("it is not valid quantity");
      return false;
    }
    if (!day_radio.checked) {
      let todayDate = new Date();
      let a = todayDate
        .toISOString()
        .slice(0, todayDate.toISOString().indexOf("T"));
      if (a > expiryDateOfDate_input.value) {
        alert("invalid expiry date");
        return false;
      }
    } else {
      if (expiryDateOfDay_input.value) {
        if (!expiryDays_input.value || expiryDays_input.value < 1) {
          alert("Enter a valid days after manuifacture");
          return false;
        }
      } else {
        alert("invalid manufacturing date");
        return false;
      }
    }
    return true;
  }
  
  function findExpiry() {
    let final_expiry_date;
    if (day_radio.checked) {
      let a = expiryDateOfDay_input.value;
      let b = expiryDays_input.value;
      let selected_date = new Date(a);
      selected_date.setDate(selected_date.getDate() + Number(b));
      final_expiry_date = `${String(selected_date.getFullYear()).padStart(
        2,
        "0"
      )}-${String(selected_date.getMonth() + 1).padStart(2, "0")}-${String(
        selected_date.getDate()
      ).padStart(2, "0")}`;
    } else {
      final_expiry_date = expiryDateOfDate_input.value;
    }
    return final_expiry_date;
  }

  let idOfTr = -1;
  popUpMedicine.addEventListener("click", (event) => {
    popUpUpdate.style.display = "none";
    event.preventDefault();
    if (validation()) {
      idOfTr++;
      let backend_medicine = medicine_input.value.toLowerCase();
      medicine_box.push(backend_medicine);
      let modified_date = findExpiry();
      let a = {
        medicine: medicine_input.value,
        quantity: quantity_input.value,
        expiry_date: modified_date,
        rack: rack_input.value,
        batchNumber: batchNnumber_input.value,
        id :`trRow${idOfTr}`
      };
      tableRows.push(a)
      localStrgTableRow()
      localStrgMediBox()
      addMedicine_row_printer()
      model_wraper.style.display = "none";
      notification_container.style.opacity = 1;
      notification_container.style.top = 0;
      setTimeout(() => {
        notification_container.style.opacity = 0;
        notification_container.style.top = "-100%";
      }, 2300);
      defaultValues();
    }
  });
  
function push_medicine() {
  tableRows = localStrgTableRow();
  let medicine_box = []
  if (tableRows != null) {
    tableRows.forEach(item => {
      medicine_box.push(item.medicine)
      localStrgMediBox()
    })
  }
}
push_medicine()

  function addMedicine_row_printer() {
    table1Tbody.innerHTML = ''
    if (tableRows !== null) {
      tableRows = JSON.parse(localStorage.getItem('tableRows')) || []
      tableRows.forEach(item =>  {
        table1Tbody.innerHTML += `<tr>
          <td>${item.medicine}</td>
          <td>${item.quantity}</td>
          <td>${item.expiry_date}</td>
          <td>${item.rack}</td>
          <td>${item.batchNumber}</td>
          <td><button id="delBtn" class="btn" onclick="deleter(this)">Del</button>
          <button id="delBtn" class="btn editbtn" onclick = 'editer(this)'>Edit</button></td>
      </tr>`;
      })
    }
  }
  addMedicine_row_printer()
  
  function deleter(e){
    let medicine_name = e.parentElement.parentElement.firstElementChild.innerText
    tableRows = getLocalStrgTableRow()
    tableRows = tableRows.filter(item => item.medicine != medicine_name)
    medicine_box = getLocalStrgMediBox()
    medicine_box = medicine_box.filter(
      (i) => i != medicine_name.toLowerCase()
    );
    localStrgMediBox()
    localStrgMediBox() 
    localStorage.setItem('tableRows', JSON.stringify(tableRows));
    addMedicine_row_printer()
  }
  
  function editer(e) {
    tableRows = getLocalStrgTableRow()
    popUpMedicine.style.display = "none";
    model_wraper.style.display = "block";
    date_radio.checked = true;
    dateWraperForDate.style.display = 'block';
    popUpUpdate.style.display = "block";
    let medicine_name = e.parentElement.parentElement.firstElementChild.innerText
    let selected_row = tableRows.find(item => item.medicine == medicine_name)
    medicine_input.value = selected_row.medicine;
    quantity_input.value = selected_row.quantity;
    rack_input.value = selected_row.rack;
    batchNnumber_input.value = selected_row.batchNumber;
    expiryDateOfDate_input.value = selected_row.expiry_date
    popUpUpdate.addEventListener('click',(i) => {
      selected_row = tableRows.find(item => item.medicine == medicine_name)
      selected_row.medicine = medicine_input.value;
      selected_row.quantity = quantity_input.value;
      selected_row.rack = rack_input.value;
      selected_row.batchNumber = batchNnumber_input.value;
      localStrgTableRow()
      addMedicine_row_printer()
      i.preventDefault();
      model_wraper.style.display = 'none'
      popUpUpdate.style.display = 'none'

      tableRows = localStrgTableRow();
       medicine_box = []
      if (tableRows != null) {
        tableRows.forEach(item => {
          medicine_box.push(item.medicine)
          localStrgMediBox()
        })
      }

    })
  }
  function localStrgTableRow() {
    return localStorage.setItem('tableRows', JSON.stringify(tableRows))
  }
  function localStrgMediBox() {
    return localStorage.setItem('medicine_box',JSON.stringify(medicine_box))
  }
  function getLocalStrgMediBox() {
    return JSON.parse(localStorage.getItem('medicine_box'))
  }
  function getLocalStrgTableRow() {
    return JSON.parse(localStorage.getItem('tableRows'))
  }
  function defaultValues() {
    medicine_input.value = "";
    quantity_input.value = "";
    expiryDateOfDate_input.value = "";
    rack_input.value = 0;
    batchNnumber_input.value = "";
    expiryDateOfDay_input.value = "";
    expiryDays_input.value = "";
    date_radio.checked = false;
    day_radio.checked = false;
    dateDayWraperForDays.style.display = "none";
    dateWraperForDate.style.display = "none";
  }
  
  
  // popUp-2++++++++++++++++++++++++++++++++++
  
  
let recordTableMedicine_box = [];
let recordMedicine_box = [];
let mainRecordArray = getMainRecordArray() || [];
setMainRecordArray()
datafiller()
function setMainRecordArray() {
  return localStorage.setItem('recordRow',JSON.stringify(mainRecordArray));
}
function getMainRecordArray() {
  return JSON.parse(localStorage.getItem('recordRow'));
}

function setLocRecordMedicine() {
  return localStorage.setItem('recordMedicines',JSON.stringify(recordMedicine_box))
}
function getLocRecordMedicine() {
  return JSON.parse(localStorage.getItem('recordMedicines'))
}
  popUpAddRecordCancelBtn.addEventListener('click',(i) => {
    record_model_wraper.style.display = 'none'
    i.preventDefault()
    defaultRecord()
  })

  addRecordBtn.addEventListener('click',() => {
    setLocRecordMedicine()
    model_wraper.style.display = "none";
    record_out_model_wraper.style.display = 'none'
    record_model_wraper.style.display = 'block'
    medicine_box.forEach(item => {
      if (!recordMedicine_box.includes(item)) {
      recordMedicine_box.push(item);
      }
      console.log(recordMedicine_box);
      setLocRecordMedicine()
    });
  })
  
function defaultRecord() {
  recordQuantity.value = '';
  selectAny.value = 1;
  searchMedicine.value = '';
  record_search_validation.innerText = '';
  record_quantity_validation.innerText = '';
  suggestion_wraper.style.display = 'none'
}


searchMedicine.addEventListener('input', () => {

  // recordOutSuggestionWraper.style.display = 'block'
  // let med = searchMedicineFromRecord.value.toLowerCase();
  // let i=0;
  // recordOutSuggestionWraper.innerHTML = '';
  // recordMedicine_box = getLocRecordMedicine()
  // const matchingMedicines = recordMedicine_box.filter(item => item.includes(med));
  // matchingMedicines.forEach(item => {
  //   let li = document.createElement("li");
  //   li.id = `matchedOut_medicine${i}`
  //   li.textContent = item;
  //   recordOutSuggestionWraper.appendChild(li);
  //   li.addEventListener('click',medicineFillerInRecordOut)
  //   i++;

  s_recordOut = false;
  suggestion_wraper.style.display = 'block'
  let med = searchMedicine.value.toLowerCase();
  let i=0;
  suggestion_wraper.innerHTML = '';
  const matchingMedicines = recordMedicine_box.filter(item => item.includes(med));
  matchingMedicines.forEach(item => {
    let li = document.createElement("li");
    li.id = `matched_medicine${i}`
    li.textContent = item;
    suggestion_wraper.appendChild(li);
    li.addEventListener('click',medicineFillerInRecord)
    i++;
  });
});

let selected_medicine;
function medicineFillerInRecord(e) {
  s_record = true;
  selected_medicine = e.target.innerText
  tableRows.forEach(item => {
    if (item.medicine == selected_medicine) {
      searchMedicine.value = `${item.medicine} | ${item.quantity} | ${item.expiry_date} | ${item.rack}`  
      recordQuantity.value = item.quantity
    }
  })
  suggestion_wraper.style.display = 'none'
}

function addRecordValidation() {
  if(!medicine_box.includes(searchMedicine.value.split(' ')[0])){
    record_search_validation.innerText = 'Failed records'
    return false
  }
  if (!s_record) {
    alert('please select medicine')
    return false;
  }
  if (recordQuantity.value < 1) {
    record_quantity_validation.innerText = 'Failed Record'
    return false
  }
  return true
}

popUpAddRecordBtn.addEventListener('click',clickOnPopUpRecord)

let items = -1;
function clickOnPopUpRecord(e) {
  e.preventDefault()
  let addQuantity = recordQuantity.value
  let checker = mainRecordArray.find(item => item.medicine == searchMedicine.value.split(' ')[0])
  if (addRecordValidation()) {
    items++;
    mainRecordArray[items] = {
      medicine: searchMedicine.value.split(' ')[0],
      slot: selectAny.value,
      quantity: Number(recordQuantity.value) 
    }

    tableRows = getLocalStrgTableRow()
    let select_item = tableRows.find(item => item.medicine == mainRecordArray[items].medicine)
    if (select_item.quantity>=Number(recordQuantity.value)) {
      console.log(select_item);
      select_item.quantity -= Number(recordQuantity.value)
      console.log(select_item);
      localStrgTableRow();
      addMedicine_row_printer();
    }else{
      alert('Enough quantity')
      return false
    }

    if (checker) {
      checker.quantity += Number(addQuantity)
      mainRecordArray[items] = checker
      mainRecordArray = mainRecordArray.filter(item => item != checker)
      mainRecordArray.unshift(checker)
    }else{
      recordTableMedicine_box.push(mainRecordArray[items].medicine)}
      record_model_wraper.style.display = 'none'
      defaultRecord()
      s_record = false
      setMainRecordArray()
      datafiller()
  }
  datafiller()
}

function datafiller() {
  mainRecordArray = getMainRecordArray()
  table2Tbody.innerHTML = ``
  mainRecordArray.forEach(item => {
    table2Tbody.innerHTML += `<tr>
      <td>${item.medicine}</td>
      <td>${item.slot}</td>
      <td>${item.quantity}</td>
      </tr>`
  })
}
recordQuantity.addEventListener('input',()=> record_quantity_validation.innerText ='')


 // popUp-3++++++++++++++++++++++++++++++++


 let recordOutMainArry = getRecordOutMainArray() || [];
 let s_record = false;
 let s_recordOut = false;

 setRecordOutMainArray()
 table3filler()

function setRecordOutMainArray() {
  return localStorage.setItem('recordOutMainArray',JSON.stringify(recordOutMainArry));
}
function getRecordOutMainArray() {
  return JSON.parse(localStorage.getItem('recordOutMainArray'))
}

  searchMedicineFromRecord.addEventListener('input', () =>{
    recordOutSuggestionWraper.style.display = 'block'
    let med = searchMedicineFromRecord.value.toLowerCase();
    let i=0;
    recordOutSuggestionWraper.innerHTML = '';
    recordMedicine_box = getLocRecordMedicine()
    const matchingMedicines = recordMedicine_box.filter(item => item.includes(med));
    matchingMedicines.forEach(item => {
      let li = document.createElement("li");
      li.id = `matchedOut_medicine${i}`
      li.textContent = item;
      recordOutSuggestionWraper.appendChild(li);
      li.addEventListener('click',medicineFillerInRecordOut)
      i++;
    });
  })
  
  function medicineFillerInRecordOut(e) {
    s_recordOut = true;
    let matchitem = mainRecordArray.find(item => item.medicine == e.target.innerText)
    searchMedicineFromRecord.value = `${matchitem.medicine} | ${matchitem.slot} | ${matchitem.quantity}`  
    recordOutQuantity.value = matchitem.quantity
    recordOutSuggestionWraper.style.display = 'none'
  }

  addRecordOutBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    record_model_wraper.style.display = 'none'
    model_wraper.style.display = "none";
    record_out_model_wraper.style.display = 'block'
    defaultRecordOut()
  })
  
  function defaultRecordOut() {
    recordOutQuantity.value = ''
    purpose.value = ''
    searchMedicineFromRecord.value = ''
  }
  
  input.forEach(e => {
    e.addEventListener('input', () => {
      p.forEach(i => i.innerText='')
    })
  })

  popUpAddRecordOutCancelBtn.addEventListener('click', (e) => {
    e.preventDefault()
    record_out_model_wraper.style.display = 'none'
    defaultRecordOut()
  })
  
  function validation_addRecordOut() {
    let matchitem = mainRecordArray.find(item => item.medicine == searchMedicineFromRecord.value.split(' ')[0])
    if (!s_recordOut) {
      alert('please select medicine / empty medicine')
      return false
    }
    if (recordOutQuantity.value > matchitem.quantity || recordOutQuantity.value<1) {
      recordOutQty.innerText = 'Failed record'
      return false
    }
    if (purpose.value == 0) {
      recordOutPurpuse.innerText = 'Failed record'
      return false
    }
    return true
  }

let idOut = -1;
popUpAddRecordOutBtn.addEventListener('click', (e) => {
  e.preventDefault()
  if (validation_addRecordOut()) {
    idOut++
    let a = { medicine:searchMedicineFromRecord.value.split(' ')[0],
              quantity:recordOutQuantity.value,
              purpose:purpose.value
            }
    recordOutMainArry.push(a)
    mainRecordArray = getMainRecordArray()
    let selected = mainRecordArray.find(item => item.medicine == a.medicine)
    if (selected.quantity >= recordOutQuantity.value) {
      selected.quantity -= recordOutQuantity.value
      setMainRecordArray();
      datafiller();
    }else{
      alert('Enough quantity')
      return false
    }

    setRecordOutMainArray()
    table3filler()
    let matchitem = mainRecordArray.find(item => item.medicine == searchMedicineFromRecord.value.split(' ')[0])
    matchitem.quantity -= recordOutQuantity.value
    clickOnPopUpRecord(e)
    record_out_model_wraper.style.display = 'none'
    defaultRecordOut()
    s_recordOut = false;
  }
})

function table3filler() {
  let array = getRecordOutMainArray()
  table3Tbody.innerHTML = ''
  array.forEach(item => {
    table3Tbody.innerHTML += `<tr>
        <td>${item.medicine}</td>
        <td>${item.quantity}</td>
        <td>${item.purpose}</td>
    </tr>`
  })
}