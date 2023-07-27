function list() {
    let input = document.getElementById("text");
    let val = input.value;
    let space = input.value.replaceAll(" ", "")
    if (space.length > 3) {
        let conf = confirm(val + "  add this value in list")
        if (conf) {
            let li = document.createElement("li");
            // li.innerText = val;
            let span = document.createElement('span');
            span.innerText = val;
            li.appendChild(span);
            document.getElementById("ul").appendChild(li);
            let btn = document.createElement("button");
            btn.innerHTML = "remove"
            btn.className = "btnRemove"
            li.appendChild(btn);
            // console.log(btn);
            btn.addEventListener("click", () => {
                li.remove();
            });
            let btn2 = document.createElement("button");
            btn2.innerHTML = "Edit";
            btn2.className = "edit"
            li.appendChild(btn2);

            let btn3 = document.createElement("button");
            btn3.innerText = "ok";
            let inp = document.createElement("input");
            btn2.addEventListener("click", () => {
                inp.type = "text";
                // inp.value=li.textContent;
                li.appendChild(inp);
                // console.log(inp.value);
                btn2.addEventListener("click", () => {
                    span.innerText = inp.value;
                    // li.removeChild(inp);
                    li.appendChild(btn3)
                })
            });
            btn3.addEventListener("click", () => {
                li.removeChild(inp);
                li.removeChild(btn3);
                alert("change succefully")
            })
            // inp.value=""
            input.value = "";
        } else {
            input.value = "";
        }
    } else {
        confirm("please enter valid Value")
    }
}

