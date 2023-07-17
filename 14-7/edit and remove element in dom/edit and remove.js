// function addLanguge(Name){
//    const li= document.createElement("li");
//    li.innerHTML = `${Name}`;
//    document.querySelector(".languge").appendChild(li);

// }
// addLanguge("pathon");
// addLanguge("java");

function addoptim(Name){
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(Name))
    document.querySelector(".languge").appendChild(li)
}
addoptim("Html")
addoptim("CSS")
addoptim("Node ")

// edit value
// let second=document.querySelector("li:nth-child(2)")
// second.innerHTML = "Java"

// let newli  =document.createElement("li") ;
// newli.textContent="Python";
// second.replaceWith(newli)

// const secondLang  = document.querySelector("li:First-child");
// secondLang.outerHTML  = "<li>Type Script</li>"

// remove 

// const last  = document.querySelector("li:last-child")
// last.remove()