let serch = document.getElementById("serch")
let serchBtn = document.getElementById("serchBtn")
let showMore = document.getElementById("showMore")

let key = "klFtiYLThZxdbq0rRsLZD4eo-Ug5wTSTdSPsUZf4XI0";

const formElment = document.querySelector("form");
const searchDiv = document.querySelector("searchDiv");

// let inputData = "";
let page = 1;

async function serchImage(){
    inputData = serch.value;
    const url = `https://api.unsplash.com/photos?page=${page}&query=${inputData}&client_id=${key}`;
    const response =await fetch(url)
    const data = await response.json()
    console.log(data);
    const results = data.results
    console.log(results);

    
    // if(page == 1){
    //    searchDiv.innerHTML=""
    // }

    results.map((val)=>{
        const imagerWrapper = document.createElement("div");
        imagerWrapper.classList.add("resulte")
        const image = document.createElement("img");
        const a = document.createElement("a");
        image.src = results.url.small;
        a.href = results.links.html
        a.innerText= results.alt_desctiption 

        imagerWrapper.appendChild(image)
        imagerWrapper.appendChild(a)
        imagerWrapper.appendChild(imagerWrapper)

        page++
        if(page>1){
            showMore.style.display="block"
        }
    })
}
formElment.addEventListener("submit",(e)=>{
    e.preventDefault()
    page=1;
    serchImage()
})
showMore.addEventListener("click",()=>{
    page=1;
    serchImage()
})