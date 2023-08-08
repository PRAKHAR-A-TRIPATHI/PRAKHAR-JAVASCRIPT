let form = document.querySelector("#form");
// // let table = document.querySelector("#table");
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
              let timeInputs = document.querySelectorAll('.tBox');
              let commentBox = document.createElement('textarea');
              commentBox.className="text"
              commentBox.style.display = 'none';
              document.body.appendChild(commentBox);
              
              // Keep track of the last clicked input
              let lastInput ;
              
              timeInputs.forEach(function(input) {
                  input.addEventListener('click', function() {
    
                      if (input === lastInput) {
                          commentBox.style.display = 'none';
                          lastInput = null;
                      } else {
                          commentBox.style.display = 'block';
                          commentBox.style.left = input.offsetLeft + 'px';
                          commentBox.style.top = input.offsetTop + input.offsetHeight + 'px';
                          lastInput = input;
                      }
                  });
              });
              commentBox.style.display = 'none';   
              
          }
  
  