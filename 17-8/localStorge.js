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
  window.addEventListener('load', () => {
    const storedAddMedicneArray = localStorage.getItem('addMedicneArray');
    const storedCheackMedicine = localStorage.getItem('cheackMedicine');
    const storedCounter = localStorage.getItem('counter');
  
    if (storedAddMedicneArray) {
      addMedicneArray = JSON.parse(storedAddMedicneArray);
      newupdateTableValue();
    }
  
    if (storedCheackMedicine) {
      cheackMedicine = JSON.parse(storedCheackMedicine);
    }
  
    if (storedCounter) {
      i = parseInt(storedCounter);
    }
  });
  let addMedicineForm = document.getElementById("addmedicine");
  let addmedicineSubmitBtn = document.getElementById("addTable");
  let datesDiv = document.getElementById("date");
  let daysDiv = document.getElementById("days");
  var notification = document.getElementById("notification");
  let popupAddMedicineForm = document.getElementById("popupForm");
  let addMedicineUpdateBtn = document.getElementById("editTable");
  let addMedicineCancelBtn = document.getElementById("cancel");
  let SubmitBtnDiv = document.querySelector(".Submitbutton");
  let addMedicneArray = [];
  let cheackMedicine = [];
  let i = 0;
  
  popupAddMedicineForm.addEventListener("click", () => {
    SubmitBtnDiv.appendChild(addmedicineSubmitBtn);
    addMedicineForm.style.display = "block";
    recodeForm.style.display = "none";
    outForm.style.display = "none";
    addMedicineForm.style.top = "50%";
    addMedicineForm.style.left = "50%";
    addMedicineForm.style.transform = "translate(-50%, -50%)";
    addMedicineForm.reset();
    addMedicineUpdateBtn.style.display = "none";
    datesDiv.style.display = "none";
    daysDiv.style.display = "none";
    addMedicineForm.elements.Rack.value=""
  });
  
  addMedicineCancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addMedicineForm.style.display = "none";
  });
  
  //   racks options add
  racks.forEach((element) => {
    addMedicineForm.elements.Rack.innerHTML += ` <option>${element.id}</option>`;
  });
  addMedicineForm.elements.Rack.value = "";
  
  // batch number addded
  addMedicineForm.elements.Rack.addEventListener("input", () => {
    batch.forEach((element) => {
      if (element.rack_id == addMedicineForm.elements.Rack.value) {
        addMedicineForm.elements.betNum.value = element.batch;
      }
    });
  });
  
  // expaire date
  addMedicineForm.elements.byDate.addEventListener("click", () => {
    if (addMedicineForm.elements.byDate.checked) {
      datesDiv.style.display = "block";
      daysDiv.style.display = "none";
      addMedicineForm.elements.byDays.checked = false;
    } else {
      datesDiv.style.display = "none";
    }
  });
  
  //   block and none date display
  addMedicineForm.elements.byDays.addEventListener("input", () => {
    if (addMedicineForm.elements.byDays.checked) {
      daysDiv.style.display = "block";
      datesDiv.style.display = "none";
      addMedicineForm.elements.byDate.checked = false;
    } else {
      daysDiv.style.display = "none";
    }
  });
  
  addMedicineForm.elements.eDate.addEventListener("input", () => {
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    let inputdate = new Date(addMedicineForm.elements.eDate.value);
    inputdate.setHours(0, 0, 0, 0);
    if (inputdate < today) {
      addMedicineForm.elements.eDate.value = "";
      error("Inavlid Date");
    }
  });
  function expireDate() {
    let expireDate;
    if (addMedicineForm.elements.byDays.checked) {
      let a = addMedicineForm.elements.mDate.value;
      let b = addMedicineForm.elements.dayss.value;
      let selected_date = new Date(a);
      selected_date.setDate(selected_date.getDate() + Number(b));
      expireDate = `${String(selected_date.getFullYear()).padStart(
        2,
        "0"
      )}-${String(selected_date.getMonth() + 1).padStart(2, "0")}-${String(
        selected_date.getDate()
      ).padStart(2, "0")}`;
    } else {
      expireDate = addMedicineForm.elements.eDate.value;
    }
    return expireDate;
  }
  
  // error
  function error(value) {
    notification.innerText = value;
    notification.style.background = "red";
    notification.classList.add("show");
    setTimeout(function () {
      notification.classList.remove("show");
    }, 3000);
  }
  // error
  function print(value) {
    notification.innerText = value;
    notification.style.background = "green";
    notification.classList.add("show");
    setTimeout(function () {
      notification.classList.remove("show");
    }, 3000);
  }
  
  // table add function
  function tableAdd() {
    document.getElementById("addMedicineTbody").innerHTML += `
      <tr>
        <td>${addMedicineForm.elements.medicine.value}</td>
        <td>${addMedicineForm.elements.quantity.value}</td>
        <td>${expireDate()}</td>
        <td>${addMedicineForm.elements.Rack.value}</td>
        <td>${addMedicineForm.elements.betNum.value}</td>
        <td> <button class="delet">remove</button>
       <button class="edit">Edit</button></td>
    </tr>
        `;
  }
  
  // table remove
  function tableRemove() {
    let deletButtons = document.querySelectorAll(".delet");
    deletButtons.forEach((button) => {
      button.addEventListener("click", () => {
        let tr = button.parentNode.parentNode;
        let index = cheackMedicine.indexOf(tr.children[0].innerText);
        if (index > -1) {
          cheackMedicine.splice(index, 1);
        }
        let x = tr.children[0].innerText;
        addMedicneArray = addMedicneArray.filter((value) => value.medicine != x);
        // console.log(addMedicneArray);
        // console.log(p);
        error("Delete Table Roe...!");
        tr.remove();
      });
    });
  }
  
  // upadte table value
  let editButtons = document.querySelectorAll(".edit");
  function updateTableValue() {
    editButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // event.preventDefault();
        let tr = button.parentNode.parentNode;
  
        // update button
        editTable.style.display = "block";
        // formSubmitBtn.style.display = "none";
        addmedicineSubmitBtn.remove();
  
        // Get the current row data
        let medicineValue = tr.children[0].innerText;
        let quantityValue = tr.children[1].innerText;
        let dateValue = tr.children[2].innerText;
        let rackValue = tr.children[3].innerText;
        let batchValue = tr.children[4].innerText;
  
        // Set the form input values to the current row data
        addMedicineForm.elements.medicine.value = medicineValue;
        addMedicineForm.elements.quantity.value = quantityValue;
        addMedicineForm.elements.eDate.value = dateValue;
        addMedicineForm.elements.Rack.value = rackValue;
        addMedicineForm.elements.betNum.value = batchValue;
  
        // edit row
        addMedicineUpdateBtn.addEventListener("click", (e) => {
          e.preventDefault();
          tr.children[0].innerText = addMedicineForm.elements.medicine.value;
          tr.children[1].innerText = addMedicineForm.elements.quantity.value;
          tr.children[2].innerText = expireDate();
          tr.children[3].innerText = addMedicineForm.elements.Rack.value;
          tr.children[4].innerText = addMedicineForm.elements.betNum.value;
          addMedicineForm.style.display = "none";
          print("Data Update successfully!");
        });
        addMedicineForm.style.display = "block";
      });
    });
  }
  
  function newupdateTableValue() {
    const medicineTable = document.getElementById("addMedicineTbody"); // Replace with your actual table's ID
  
    // Clear existing table rows
    medicineTable.innerHTML = "";
  
    // Loop through addMedicneArray and generate new table rows
    for (const medicineData of addMedicneArray) {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td>${medicineData.medicine}</td>
        <td>${medicineData.quntity}</td>
        <td>${medicineData.expaireDate}</td>
        <td>${medicineData.rack}</td>
        <td>${medicineData.betchNum}</td>
        <td>
          <button class="delet">remove</button>
          <button class="edit">Edit</button>
        </td>
      `;
      medicineTable.appendChild(newRow);
    }
  }
  
  //  console.log(addmedicineSubmitBtn);
  addMedicineForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let a = addMedicineForm.elements.medicine.value;
    let medicineValue = a.trim();
    if (medicineValue === "") {
      error("invalid medicine...!");
    } else if (addMedicineForm.elements.Rack.value === "") {
      error("invalid rack....!");
    } else if (addMedicineForm.elements.quantity.value === "") {
      error("invalid quntity...!");
    } else if (expireDate() === "" || expireDate() === "NaN-NaN-NaN") {
      error("invalid expaireDate....!");
    } else if (addMedicineForm.elements.quantity.value < 0) {
      error("invalid quntity......!");
    } else if (cheackMedicine.includes(medicineValue)) {
      error("not same medicine add ....!");
    } else {
      addMedicneArray.push({
        id: i++,
        medicine: addMedicineForm.elements.medicine.value,
        rack: addMedicineForm.elements.Rack.value,
        betchNum: addMedicineForm.elements.betNum.value,
        quntity: addMedicineForm.elements.quantity.value,
        expaireDate: expireDate(),
      });
      cheackMedicine.push(addMedicineForm.elements.medicine.value);
      print("Form Submit SucceFully...");
      // console.log(addMedicneArray);
      tableAdd();
      tableRemove();
      updateTableValue();
      addMedicineForm.style.display = "none";
      addMedicineForm.reset();
    }
    localStorage.setItem('addMedicneArray', JSON.stringify(addMedicneArray));
    localStorage.setItem('cheackMedicine', JSON.stringify(cheackMedicine));
    localStorage.setItem('counter', i.toString());
  });
  
  let popupRecodeForm = document.getElementById("popupRecodeForm");
  let recodeForm = document.getElementById("record");
  let serch;
  let u = 0;
  let addRecodeArray = [];
  let recQuntity;
  
  popupRecodeForm.addEventListener("click", () => {
    addMedicineForm.style.display = "none";
    recodeForm.style.display = "block";
    outForm.style.display = "none";
    recodeForm.style.top = "50%";
    recodeForm.style.left = "50%";
    recodeForm.style.transform = "translate(-50%, -50%)";
    // recodeForm.elements.selectRecode.value="";
    recodeForm.elements.serchMedicine.value="";
    recodeForm.elements.recodeQuntity.value="";
  });
  
  document.getElementById("cancel1").addEventListener("click", () => {
    event.preventDefault();
    recodeForm.style.display = "none";
  });
  
  // serch bar
  let ul = document.getElementById("ul");
  ul.style.display = "none";
  recodeForm.elements.serchMedicine.addEventListener("input", () => {
    let input = recodeForm.elements.serchMedicine.value.toLowerCase();
    let compare = addMedicneArray.filter((item) =>
      item.medicine.toLowerCase().includes(input)
    );
    ul.innerHTML = "";
    ul.style.display = "none";
    if (compare.length === 0) {
      document.getElementById("medi").style.color = "red";
      document.getElementById("medi").innerText = "Value not Found";
      serch = false;
    } else {
      compare.forEach((val) => {
        let li = document.createElement("li");
        li.innerText = val.medicine;
        ul.appendChild(li);
        ul.style.display = "block";
        li.addEventListener("click", () => {
          li.background = "lightBlue";
          recodeForm.elements.serchMedicine.value = `${val.medicine}/${val.quntity}/${val.expaireDate}/${val.rack}/${val.betchNum}`;
          ul.style.display = "none";
          recodeForm.elements.recodeQuntity.value = val.quntity;
          serch = true;
          recQuntity=val.quntity;
        });
      });
    }
    if (input === "") {
      ul.style.display = "none";
      document.getElementById("medi").innerText = "";
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
  function updateMedicineTable(recodeMedicineName, recodeQuantity) {
    for (let i = 0; i < addMedicneArray.length; i++) {
      if (addMedicneArray[i].medicine === recodeMedicineName) {
        addMedicneArray[i].quntity -= recodeQuantity;
        if (addMedicneArray[i].quntity < 0) {
          addMedicneArray[i].quntity = 0; // 
        }
        break; 
      }
    }
  
    newupdateTableValue(); 
  }
  let d;
  
  recodeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(selectedValue);
    let b = recodeForm.elements.recodeQuntity.value
    let c= Number(b);
    let r =Number(d)+c;
    let medicineValue = recodeForm.elements.serchMedicine.value;
    let tableMedicine = medicineValue.split("/");
  
    const medicineName = tableMedicine[0];
    const newQuantity = parseInt(recodeForm.elements.recodeQuntity.value, 10);
    const existingMedicineIndex = addRecodeArray.findIndex(
      (medicineData) => medicineData.mediucineName === medicineName
    );
  
  
    let a = medicineValue.replaceAll(" ", "");
    if (a == "") {
      emtyError("medi");
    } else if (recodeForm.elements.recodeQuntity.value == "") {
      emtyError("qunt");
    } else if (recodeForm.elements.recodeQuntity.value < 0) {
      emtyError("qunt");
    } else if (!serch) {
      error("plese selsect value...!");
    }else if(recodeForm.elements.recodeQuntity.value>recQuntity){
      error("this Quntity not Availabke in factorie..!")
    }else if (existingMedicineIndex !== -1) {
      // Update existing record's quantity
      addMedicneArray[existingMedicineIndex].recodeQuntity += newQuantity;
      const recodeTable = document.getElementById("tbody2");
  
      // Clear existing table rows
      recodeTable.innerHTML = "";
    
      // Loop through addRecodeArray and generate new table rows
      for (let i=0; i<=addRecodeArray.length; i++) {
        if(existingMedicineIndex==i){
          addRecodeArray[i].recodeQuntity =r ;
          const newRow = document.createElement("tr");
        newRow.innerHTML = `
          <td>${tableMedicine[0]}</td>
          <td>${r}</td>
          <td>${recodeForm.elements.selectRecode.value}</td>
        `;
        d=r;
        recodeTable.appendChild(newRow);
        updateMedicineTable(tableMedicine[0], recodeForm.elements.recodeQuntity.value);
        }
      }
      print("Quantity updated successfully!");
      recodeForm.style.display = "none";
    }
    else {
      document.getElementById("tbody2").innerHTML += `
      <tr>
        <td>${tableMedicine[0]}</td>
        <td>${recodeForm.elements.recodeQuntity.value}</td>
        <td>${recodeForm.elements.selectRecode.value}</td>
    </tr>
        `;
         d = recodeForm.elements.recodeQuntity.value
      updateMedicineTable(tableMedicine[0], recodeForm.elements.recodeQuntity.value);
      recodeForm.style.display = "none";
      addRecodeArray.push({
        id: u++,
        mediucineName: tableMedicine[0],
        recodeQuntity: recodeForm.elements.recodeQuntity.value,
        slot: recodeForm.elements.selectRecode.value,
      });
     
    }
    localStorage.setItem('addMedicneArray', JSON.stringify(addMedicneArray));
    localStorage.setItem('cheackMedicine', JSON.stringify(cheackMedicine));
    localStorage.setItem('counter', i.toString());
  
    // console.log(addRecodeArray);
  });
  
  // function updateMedicineTable(recodeMedicineName, recodeQuantity) {
  //   for (let i = 0; i < addRecodeArray.length; i++) {
  //     if (addRecodeArray[i].mediucineName === recodeMedicineName) {
  //       addRecodeArray[i].recodeQuntity -= recodeQuantity;
  //       if (addRecodeArray[i].recodeQuntity < 0) {
  //         addRecodeArray[i].recodeQuntity = 0; // 
  //       }
  //       break; 
  //     }
  //   }
  // }
  // add out Recode
  let outForm = document.getElementById("newOutForm");
  let popupRecodeOutForm = document.getElementById("popupRecodeOutForm");
  let popul = document.getElementById("popul");
  let b=0;
  let sel ;
  let addOutArray = [];
  let qunVal;
  
  popupRecodeOutForm.addEventListener("click", () => {
    outForm.style.display = "block";
    addMedicineForm.style.display = "none";
    recodeForm.style.display = "none";
    outForm.style.top = "50%";
    outForm.style.left = "50%";
    outForm.style.transform = "translate(-50%, -50%)";
    // outForm.elements.purpose.value="";
    outForm.elements.outMedi.value="";
    outForm.elements.outquntity.value="";
  });
  
  document.getElementById("cancel2").addEventListener("click", (e) => {
    e.preventDefault();
    outForm.style.display = "none";
  });
  
  outForm.elements.outMedi.addEventListener("input", () => {
    let input = outForm.elements.outMedi.value.toLowerCase();
    let compare = addRecodeArray.filter((item) =>
      item.mediucineName.toLowerCase().includes(input)
    );
    popul.innerHTML = "";
    popul.style.display = "none";
    if (compare.length === 0) {
      document.getElementById("omed").style.color = "red";
      document.getElementById("omed").innerText = "Value not Found";
      sel=false;
    } else {
      compare.forEach((val) => {
        let li = document.createElement("li");
        li.innerText = val.mediucineName;
        popul.appendChild(li);
        popul.style.display = "block";
        li.addEventListener("click", () => {
          li.background = "lightBlue";
          outForm.elements.outMedi.value = `${val.mediucineName}`;
          outForm.elements.outquntity.value = val.recodeQuntity;
          qunVal=val.recodeQuntity;
          popul.style.display = "none";
          sel=true;
        });
      });
    }
    if (input === "") {
      popul.style.display = "none";
      document.getElementById("omed").innerText = "";
    }
    
  });
  
  outForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (outForm.elements.outMedi.value == "") {
      emtyError("omed")
    }else if(outForm.elements.outquntity.value==""){
      emtyError("oqun")
    }else if(outForm.elements.outquntity.value<0){
      emtyError("oqun")
    }else if(!sel){
      error("Plaes Select value.")
    }else if(outForm.elements.outquntity.value>qunVal){
      error("this quntity not available in Strore")
    }
    else{
      document.getElementById("tbody3").innerHTML += `
      <tr>
        <td>${outForm.elements.outMedi.value}</td>
        <td>${outForm.elements.outquntity.value}</td>
        <td>${outForm.elements.purpose.value}</td>
    </tr>
        `;
        outForm.style.display="none"
        addOutArray.push({
          id: b++,
          outmediucineName: outForm.elements.outMedi.value,
          outrecodeQuntity: outForm.elements.outquntity.value,
          purpose: outForm.elements.purpose.value,
        });
    }
     localStorage.setItem('addMedicneArray', JSON.stringify(addMedicneArray));
    localStorage.setItem('cheackMedicine', JSON.stringify(cheackMedicine));
    localStorage.setItem('counter', i.toString());
  });
  