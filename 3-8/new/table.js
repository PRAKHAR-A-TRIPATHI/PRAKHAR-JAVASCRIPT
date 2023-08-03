// let form = document.querySelector("#form");
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
            commentBox.style.display = 'none';
            document.body.appendChild(commentBox);
            
            timeInputs.forEach(function(input) {
                input.addEventListener('click', function() {
                    commentBox.style.display = 'block';
                });
            });
            
            
        }

