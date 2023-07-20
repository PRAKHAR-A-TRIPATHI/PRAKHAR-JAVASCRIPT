// console.log("hu");

// root node
// console.log(document.documentElement);
// console.log(document.body);
// console.log(document.head);

// // children
//  console.log(document.body.childNodes);
//  console.log(document.body.children);

// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);
// console.log(document.body.lastChild);

// convert array
// let a = Array.from(document.body.children);
// console.log(a);

// sibling
// const ul = document.body.children[0];
// const li = ul.children[1];
// console.log(ul.nextElementSibling);
// console.log(li.previousElementSibling.textContent);

// talble select
// const table = document.body.children[1];
// console.log(table.tBodies[0].rows[0].cells[1].textContent);
// console.log(table.rows[0].cells[1].style="background-color:blue;");

// dom method
// ul.style.background = "red"
// let id = document.getElementById("ul");
// id.style.backgroundColor="blue"
// console.log(ul);

// let li = document.getElementsByClassName("li")
// let tag = document.getElementsByTagName("table");
// console.log(tag);
// console.log(li);

// quearselector

// const list = document.querySelector(".li");
// const list = document.querySelectorAll(".li");
// const list = document.querySelector("#ul");
// console.log(list);

// Attributes
// console.log(ul.getAttribute('data'))
// console.log(ul.setAttribute('order-placed', 'pending'))
// console.log(ul.removeAttribute('order-placed'))
// console.log(ul.hasAttribute('order-placed'))
// console.log(ul.attributes)

//  creating and removing 
const newdiv = document.createElement("div");
const 
body.append(newdiv);