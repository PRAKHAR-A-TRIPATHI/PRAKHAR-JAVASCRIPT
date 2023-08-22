// const card = ["shoes","pants","kurta"];

// creatOrder(card,function(){
//     proccedToPayment(orderId);
// });

// const promises=creadOrder(cart);

// promises.then()

// const user = fetch("https://api.github.com/user/akshaymarch7");

// console.log(user);
// user.then(function(data){
//     console.log(data);
// })



// // Create an empty object
// let myObject = {};

// // Store a value in the object using a key
// myObject.myKey = "myValue";

// // Access the value using the key
// console.log(myObject); // Output: "myValue"

// let recordBtn = document.getElementById("recordButton");
// recordBtn.addEventListener("click", () => {});
// let ul = document.getElementById("ul");
// ul.style.display = "none";
// recodeForm.elements.serchMedicine.addEventListener("input", () => {
//   let input = recodeForm.elements.serchMedicine.value.toLowerCase();
//   let compare = newArray.filter((item) =>
//     item.medicine.toLowerCase().includes(input)
//   );
//   ul.innerHTML = "";
//   ul.style.display = "none";
//   compare.forEach((val) => {
//     let li = document.createElement("li");
//     li.innerText = val.medicine;
//     ul.appendChild(li);
//     ul.style.display = "block";

//     // Add an event listener to the list item to handle click events
//     li.addEventListener("click", () => {
//       // Set the value of the input field to the text content of the clicked list item
//       recodeForm.elements.serchMedicine.value = li.textContent;

//       // Hide the list
//       ul.style.display = "none";
//     });
//   });
//   if (input === "") {
//     ul.style.display = "none";
//   }
// });



// Assuming you have a form with the id "recodeForm" in your HTML
// let recodeForm = document.getElementById("recodeForm");
// let ul = document.getElementById("ul");
// ul.style.display = "none";

// recodeForm.elements.serchMedicine.addEventListener("input", () => {
//   let input = recodeForm.elements.serchMedicine.value.toLowerCase();
//   let compare = newArray.filter((item) =>
//     item.medicine.toLowerCase().includes(input)
//   );

//   ul.innerHTML = "";
//   ul.style.display = "none";

//   compare.forEach((val) => {
//     let li = document.createElement("li");
//     li.innerText = val.medicine;

//     // Handle selecting an item from the list
//     li.addEventListener("click", () => {
//       recodeForm.elements.serchMedicine.value = val.medicine;
//       ul.style.display = "none";
//     });

//     ul.appendChild(li);
//     ul.style.display = "block";
//   });

//   if (input === "") {
//     ul.style.display = "none";
//   }
// });

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
    let li = document.createElement("li");
    li.innerText = "Value not found";
    ul.appendChild(li);
    ul.style.display = "block";
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
        recodeForm.elements.recodeQuntity.value=val.quantity;
      });
    });
  }
  if (input === "") {
    ul.style.display = "none";
  }
});


