let serch = document.getElementById("serch")
let serchBtn = document.getElementById("serchBtn")
let showMore = document.getElementById("showMore")

let key = "aEfn8IKe4XkMecE4Sir8r2Y20cv6_mlvfODHH2RCacs";

const formElment = document.querySelector("form");
const search_results = document.querySelector("search-results");

let inputData = "";
let page = 1;

async function serchImage(){
    inputData = serch.value;
    const url = `https://api.unsplash.com/photos?page=${page}&query=${inputData}&client_id=${key}`;

    const response =await fetch(url)
    const data = await response.json()
    console.log(data);
    const results = data.results

    
    // if(page === 1){
    //     search_results.innerHTML = ""
    // }

    results.map((val)=>{
        const imagerWrapper = document.createElement("div");
        imagerWrapper.classList.add("resulte")
        const image = document.createElement("img");
        const a = document.createElement("a");
        image.src = results.url.small;
        a.href = results.links.html
        a.innerText= result.alt_desctiption 

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