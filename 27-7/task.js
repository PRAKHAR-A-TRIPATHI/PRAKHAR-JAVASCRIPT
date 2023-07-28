function list() {
  //get input
  let input = document.getElementById("text");
  //get value
  let val = input.value;
  let space = input.value.replaceAll(" ", "");
  if (space.length > 3) {
    let conf = confirm(val + "  add this value in list");
    if (conf) {
      // creat list tag and append document
      let li = document.createElement("li");
      // li.innerText = val;
      let span = document.createElement("span");
      span.innerText = val;
      li.appendChild(span);
      document.getElementById("ul").appendChild(li);
      // creat remove button and append document
      let btn = document.createElement("button");
      btn.innerHTML = "remove";
      btn.className = "btnRemove";
      li.appendChild(btn);
      // console.log(btn);
      // click button to remove particular link 
      btn.addEventListener("click", () => {
        li.remove();
      });
      // creat edit button edit a list text 
      let btn2 = document.createElement("button");
      btn2.innerHTML = "Edit";
      btn2.className = "edit";
      li.appendChild(btn2);
       
      // creat ok button to conform text change
      let btn3 = document.createElement("button");
      btn3.innerText = "ok";
      btn3.className = "ok";
      // creat input to change text 
      let inp = document.createElement("input");
      inp.type = "text";
      // click edit button to append input in document and change text list 
      btn2.addEventListener("click", () => {
        // inp.value=li.textContent;
        li.appendChild(inp);
        // console.log(inp.value);
        btn2.addEventListener("click", () => {
          if (inp.value === "" || inp.value.length <= 3) {
            li.appendChild(btn3);
          } else {
            span.innerText = inp.value;
            li.appendChild(btn3);
          }

          // li.removeChild(inp);
        });
      });
      // click ok button to conform change the text end alert 
      btn3.addEventListener("click", () => {
        li.removeChild(inp);
        li.removeChild(btn3);
        alert("change succefully");
      });
      // inp.value=""
      input.value = "";
    } else {
      input.value = "";
    }
  } else {
    confirm("please enter valid Value");
  }
}
