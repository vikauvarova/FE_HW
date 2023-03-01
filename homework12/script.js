const form = document.querySelector("#product-form");
const nameInput  = document.querySelector("#name");
const priceInput = document.querySelector("#price");
const list = document.querySelector("#product-list");
const body = document.querySelector("body")

// массив с продуктами

const products = [];

// функция для добавляения продукта в массив

function newProduct(name, price) {
    products.push({ name: name, price: price });
}

// функция для обновления пунктов в списке

function updateList() {
    list.innerHTML = "";
    products.forEach(product => {
        let item = document.createElement("li");
        item.innerText = `${product.name} - ${product.price}$`;
        list.append(item);
    });
}

// обработчик отправки формы

form.onsubmit = (e) => {
    e.preventDefault();
    const nameValue = nameInput.value;
    const priceValue = +priceInput.value;
    // const priceValue = parseFloat(priceInput.value);
    newProduct(nameValue, priceValue);
    nameInput.value = "";
    priceInput.value = "";
    updateList();
    writeLocalStorage(products);
}

  
function writeLocalStorage(object) {
    const string = JSON.stringify(object);
    localStorage.setItem("product", string);
}

function readLocalStorage(key) {
    const string = localStorage.getItem(key);
    console.log(string);
    if (string) {
        const object = JSON.parse(string);
        return object;
    } else {
        return null;
    }
}

body.onload = () => {
    list.innerHTML = "";
    let products = readLocalStorage("product")
    products.forEach(product => {
        let item = document.createElement("li");
        item.innerText = `${product.name} - ${product.price}$`;
        list.append(item);
    });
}