let res = document.querySelector(".result");
let btn = document.querySelectorAll("button");
let clr = document.querySelector("#clear");
let cut = document.querySelector("#cut");
let op = document.querySelectorAll(".op");


btn.forEach(btn => {
    btn.addEventListener("click", () => {
        let val = btn.innerText;
        if (val !== "backspace" && val !== "=") {  //  to Avoid appending unecessary text in result bar
            if (val === "+" || val === "-" || val === "/" || val === "*") {
                if (res.innerHTML === "") {
                    alert("Invalid format used")
                    return;
                }
            }
            res.innerHTML += val;
        }
        if (val === "=") {
            res.innerHTML = eval(res.innerHTML)  
        }
    });
});


clr.addEventListener("click", () => {
    res.innerHTML = "";
});

cut.addEventListener("click", () => {
    res.innerHTML = res.innerHTML.slice(0, -1); // Deletes last element, slice() used both for array and string.
});
