let form = document.querySelector("#form");
let table = document.querySelector("#table");
// // let data = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // renderTable();
});

function renderTable() {
  document.getElementById("tbody").innerHTML += `
    <tr>
                <td></td>
                <td> <input type="time"  value="00:00" class="tBox"><p></p> </td>
                <td> <input type="time"  value="00:00" class="tBox"><p></p></td>
                <td> <input type="time"  value="00:00" class="tBox"><p></p></td>
                <td> <input type="time"  value="00:00" class="tBox"><p></p></td>
                <td> <input type="time"  value="00:00" class="tBox"><p></p></td>
                <td> <input type="time"  value="00:00" class="tBox"><p></p></td>
                <td> <input type="time"  value="00:00" class="tBox"><p></p></td>
                </tr>`;
  let timeInputs = document.querySelectorAll(".tBox");
  let commentBox = document.createElement("textarea");
  commentBox.className = "text";
  commentBox.style.display = "none";
  document.body.appendChild(commentBox);

  // Keep track of the last clicked input
  let lastInput=null;

  timeInputs.forEach(function (input) {
    input.addEventListener("click", function () {
      if (input === lastInput) {
        commentBox.style.display = "none";
        lastInput = null;
      } else {
        commentBox.style.display = "block";
        commentBox.style.left = input.offsetLeft + "px";
        commentBox.style.top = input.offsetTop + input.offsetHeight + "px";
        lastInput = input;
        setTimeout(()=>{
          commentBox.style.display = "none";
        },2000)
      }
    });
  });
  commentBox.style.display = "none";
}
let add = document.getElementById("add");
let serchbar = document.getElementById("serchBar");

function search() {
  serchbar.style.display = "block";
  serchbar.style.left = add.offsetLeft + "px";
  serchbar.style.top = add.offsetTop + add.offsetHeight + "px";
  setTimeout(()=>{
    serchbar.style.display = "none";
  },2000)
  
}

function searchNames() {
  var searchValue = document.getElementById("searchInput").value.toUpperCase();

  // ul list element
  var list = document.getElementById("myList");

  //all list item
  var listItems = list.getElementsByTagName("li");

  // Loop  list items
  for (var i = 0; i < listItems.length; i++) {
    //  text content of the current list item
    var name = listItems[i].textContent;

    // Check if the name matches the search value
    if (name.toUpperCase().indexOf(searchValue) > -1) {
      // If it does, show the list item
      listItems[i].style.display = "";
      // document.getElementById("invalid").innerText=""
    } else {
      // Otherwise, hide the list item
      listItems[i].style.display = "none";
      // document.getElementById("invalid").innerText="NO Task Found."
    }
  }
}
