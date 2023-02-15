const form = document.querySelector(".form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const sectionProducts = document.querySelector("#products")
const sectiomSum = document.querySelector("#sumOfProducts");
const password = document.querySelector("#password");
const hideSchowBtn = document.querySelector(".btn");


//Задача 2

hideSchowBtn.onclick = () => {
    if (password.getAttribute("type") === "password") {
        password.setAttribute("type", "text");
        hideSchowBtn.innerText = "Скрыть"
    } else {
        password.setAttribute("type", "password");
        hideSchowBtn.innerText = "Показать"
    }
    
}

// Задача 1
const products = [];

form.onsubmit = (e) => {
    e.preventDefault();
    products.push({
        title: title.value,
        price: price.value,
    });

    newProducts();
    createButtonSum();

    title.value = "";
    price.value = "";
};

function createNode(title, price) {
    let div = document.createElement("div");
    div.classList.add("product")

    let titleP = document.createElement("p");
    let priceP = document.createElement("p");

    titleP.innerText = title;
    priceP.innerText = price;

    div.append(titleP, priceP);
    sectionProducts.append(div);
}

function newProducts() {
    sectionProducts.innerHTML = "";
    sectiomSum.innerHTML = "";
    for (let i = 0; i < products.length; i++){
        createNode(products[i].title, products[i].price)
    }
}

let sumBtn = document.createElement("button");

function createButtonSum() {
    
    sumBtn.innerText = "Сумма товаров";
    sumBtn.classList.add("sumBtn")
    
    sectiomSum.append(sumBtn);
}

sumBtn.onclick = (e) => {
    e.preventDefault();
    sumOfProducts(products);
    sectionSum();
    alert(`Сумма всех товаров = ${sumOfProducts(products)}`)
}
    
function sumOfProducts(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += +array[i].price;
    }
    return sum;
}

function sectionSum() {
    
    let sumDiv = document.createElement("div");
    sumDiv.classList.add("sum")

    let text = document.createElement("p")
    let sumP = document.createElement("p");

    text.innerText = "Сумма всех товаров"
    sumP.innerText = sumOfProducts(products);

    sumDiv.append(text, sumP)
    sectiomSum.append(sumDiv);
}