let input = document.querySelector("input");
const btnMinus = document.querySelector(".minus");
const btnPlus = document.querySelector(".plus");
const p = document.querySelector("p")
    
btnMinus.onclick = () => {
    input.value = input.value - 1;
    localStorage.setItem("number", input.value);
}

btnPlus.onclick = () => {
    input.value = +input.value + 1;
    localStorage.setItem("number", input.value);
}

input.value = localStorage.getItem("number");