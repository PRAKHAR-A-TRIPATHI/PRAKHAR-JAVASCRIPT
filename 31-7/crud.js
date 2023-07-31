const app = document.getElementById('app');
const createForm = document.getElementById('create-form');
const table = document.querySelector('table');

const handleCreate = () => {
    event.preventDefault();
    const name =  document.getElementById("text").value;
    const email =  document.getElementById("email").value;
    const pass =  document.getElementById("pass").value;

    const row = document.createElement('tr');
    row.id="newtr";
    row.innerHTML = `
<td>${name}</td>
<td>${email}</td>
<td>${pass}</td>
<td id="btn"><button id="delet" onclick="removelist()">Delete</button> <button id="edit">Edit</button></td>
`;

    table.appendChild(row);
    document.getElementById("text").value="";
    document.getElementById("email").value="";
    document.getElementById("pass").value="";
};
createForm.addEventListener('submit', handleCreate);

function removelist(){
let edit = document.getElementById("delet")
let delet = document.getElementById("newtr");
delet.remove()
}
 

