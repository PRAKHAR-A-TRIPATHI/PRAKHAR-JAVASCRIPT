// # 1 st soliutions
onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if ( document.documentElement.scrollTop > 20) {
        // console.log(document.documentElement.scrollTop);
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// function topFunction() {
//     document.documentElement.scrollTop = 0;
// }

function topFunction() {
    scrollTo({top: 0, behavior: 'smooth'});
}

// #2 nd solutiond

// let body = document.querySelector("#body");
// // console.log(scroll);

// body.addEventListener("scroll", (event) => {
//     console.log(body.scrollTop);    
// });

