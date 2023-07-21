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
// const newdiv = document.createElement("div");
// const
// body.append(newdiv);

// const newText = document.createTextNode('Namaste World')
// newDiv.appendChild(newText)
// body.append(newDiv)
// body.prepend(newDiv)
// body.before(newDiv)
// body.after(newDiv)
// firstDiv.replaceWith(newDiv)
// firstDiv.remove()

// Manipulating Classes
// body.className = "second page"
// body.classList.add('new')
// body.classList.remove('new')
// body.classList.toggle('new')
// console.log(body.classList)

// Mainipulating Style
// body.style.color= "red"
// body.style['background-color']= "orange"
// body.style.margin= "200px"

// Events
// function callMe(event) {
//   console.log(event.type);
//   console.log(event.currentTarget);
//   console.log(event.clientY);
//   console.log(event.clientX);
//   alert("heloo ");
// }
// // clickBtn.onclick = callMe

// clickBtn.addEventListener("click", callMe);
// // clickBtn.addEventListener('click', function(){
// //     alert("Thanks")
// // })
// // clickBtn.removeEventListener('click',callMe)
// // clickBtn.removeEventListener('click', function(){
// //     alert("Thanks")
// // })
