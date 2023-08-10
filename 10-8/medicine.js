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
let form  = document.getElementById("form")
let main = document.getElementById("addform")
let valid = [];
// form.remove(); 

// form display
let popup = document.getElementById("popupForm");
popup.addEventListener("click",()=>{
    form.style.display="block"
    form.style.top = "60%";
    form.style.left = "50%";
    form.style.transform = "translate(-50%, -50%)";
})

// medicine validation
medicine.addEventListener("input",()=>{
    if(valid.includes(medicine.value)){
        alert("invalid value");
        medicine.value=""
    };
})

// dropdown
let rack = document.getElementById("Rack");
racks.forEach((element) => {
  rack.innerHTML += ` <option>${element.id}</option>`;
});

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
  } else {
    document.getElementById("date").style.display = "none";
  }
});

// display days
let bydays = document.getElementById("byDays");
bydays.addEventListener("input", () => {
  if (bydays.checked) {
    document.getElementById("days").style.display = "block";
  } else {
    document.getElementById("days").style.display = "none";
  }
});

// date validation
let dateValid = document.getElementById("eDate");
dateValid.addEventListener("input",()=>{
    let a = new Date(dateValid.value);
    let b = new Date();
    let aDate = a.getDate();
    let bDate = b.getDate();
    if(aDate<bDate){
        alert("invalid Date")
        dateValid.value=""
    }
   console.log( );
   console.log( );
})


// add table row
let add = document.getElementById("addTable");
add.addEventListener("click", () => {
  // add by days
  let mdate = document.getElementById("mDate");
  let days = document.getElementById("dayss");
  let newDate = new Date(mdate.value);
  newDate.setDate(newDate.getDate() + Number(days.value));
  let localDate = newDate.toLocaleDateString();

//   medicine validation
valid.push(medicine.value);
console.log(valid);
// if(valid.includes(medicine.value)){
//     alert("invalid value");
//     medicine.value=""
// };

  document.getElementById("tbody").innerHTML += `
  <tr>
    <td>${medicine.value}</td>
    <td>${quantity.value}</td>
    <td>${localDate}</td>
    <td>${rack.value}</td>
    <td>${betNum.value}</td>
    <td> <button class="delet">remove</button></td>
</tr>
    `;

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
  medicine.value=""

//   display none block
    setTimeout(()=>{
        form.style.display="none"
    },1000)

    let submit = document.getElementById("submit");
    submit.innerText="Submit Sussesfully"
    submit.style.color="red"
});
