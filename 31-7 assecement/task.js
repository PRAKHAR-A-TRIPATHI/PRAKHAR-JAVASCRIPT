let a = document.getElementById("Amount");
let b = document.getElementById("code");
let gst = 18;

let button = document.getElementById("cheack");
button.addEventListener("click", () => {
  let c = a.value;
  let discount=0;
  let d = b.value;
  let pro = d.toLowerCase();
  let add = document.getElementById("add");

  let amount = Number(c);
  if (amount >= 500 && amount < 1000) {
    if (pro == "off25") {
      discount = 25;
      add.innerText = "Valid Code";
      add.style.color = "green";
    } else {
      discount = 0;
      add.innerText = "Invalid Code";
      add.style.color = "red";
    }
  } else if (amount >= 1000 && amount < 2000) {
    if (pro == "off25") {
      discount = 25;
      add.innerText = "Valid Code";
      add.style.color = "green";
    } else if (pro == "off50") {
      discount = 50;
      add.innerText = "Valid Code";
      add.style.color = "green";
    } else {
      discount = 0;
      add.innerText = "Invalid Code";
      add.style.color = "red";
    }
  } else  if (amount >= 2000) {
      if (b.value == "off25") {
        discount = 25;
        add.innerText = "Valid Code";
        add.style.color = "green";
      }else if (b.value == "off75") {
        discount = 75;
        add.innerText = "Valid Code";
        add.style.color = "green";
      }else if (b.value == "off50") {
        discount = 50;
        add.innerText = "Valid Code";
        add.style.color = "green";
      }else {
        add.innerText = "Invalid Code";
        add.style.color = "red";
      }
    } 
  // let discount = Number(d);
  let gstamount = amount + (amount * gst) / 100;
  let discoun = (gstamount * discount)/100;
  let total = gstamount - (gstamount * discount) / 100;
  let amou = document.getElementById("amo");
  let amou1 = document.getElementById("amo1");
  amou.innerText = `$ ${total.toFixed(2)}`;
  amou1.innerText = `$ ${total.toFixed(2)}`;

  let addgst = document.getElementById("gst");
  addgst.innerText = `$ ${gstamount}`;

  let dics = document.getElementById("disc");
  dics.innerHTML = `<p> $- ${discoun}</p>`;


  // console.log(amount);
  // console.log(discount);
  // console.log(gst);
  // return total;
});

let cheak = document.getElementById("cheack");

b.addEventListener("click",()=>{
  cheak.removeAttribute("disabled");
})

// cheak.addEventListener("click", () => {
//   let promo = b.value;
//   let pro = promo.toLowerCase();
//   let add = document.getElementById("add");
//   // let add = document.getElementById("add");
//   if ("off25" === pro) {
//     add.innerText = "Valid Code";
//     add.style.color = "green";
//   } else if ("off50" === pro) {
//     add.innerText = "Valid Code";
//   } else if ("off75" === pro) {
//     add.innerText = "Valid Code";
//   } else {
//     add.innerText = "Invalid Code";
//     add.style.color = "red";
//   }
// });
