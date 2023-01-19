const body = document.querySelector("body");


const cars = [

    {
        title: "BMW",
        price: "40000",
        count: "15"
    },

    {
        title: "Toyota",
        price: "20000",
        count: "13"
    },

    {
        title: "Ford",
        price: "30000",
        count: "20"
    },

    {
        title: "Chevrolet",
        price: "60000",
        count: "9"
    },

    {
        title: "Volkswagen",
        price: "30000",
        count: "13"
    },

]

let heading = document.createElement('h1');
heading.innerHTML = "Список товаров";
body.append(heading);

let carsList = document.createElement('ol')

let totalPrice = 0;
let totalCount = 0;

for (let i = 0; i < cars.length; i++){
    

    let title = document.createElement('li');
    title.innerText = cars[i].title

    let carsInfo = document.createElement('ul')

    let price = document.createElement('li');
    price.innerHTML = "Цена: " + cars[i].price;

    let count = document.createElement('li');
    count.innerHTML = "Количество: " + Number(cars[i].count)

    let countPriceText = document.createElement('p');
    let countPrice = Number(cars[i].count) * Number(cars[i].price)
    countPriceText.innerHTML = "Итоговая стоимость: " + countPrice;

    carsInfo.append(price, count);
    carsList.append(title, carsInfo, countPriceText);
    
    totalPrice += countPrice;  
    totalCount += Number(cars[i].count)
}

let p = document.createElement('p');
p.innerHTML = "Итого " + totalCount + " товаров на сумму " + totalPrice;
body.append(carsList, p);

// -------------------------------------------------------------------------------------

const tableTitle =  [ "No.", "Full Name", "Position", "Salary" ]

const tableText = [
    {
        0: "1", 
        1: "Bill Gates",
        2: "Founder Microsoft",
        3: "$1000"
    },
    {
        0: "2", 
        1: "Steve Jobs",
        2: "Founder Apple",
        3: "$1200"
    },
    {
        0: "3", 
        1: "Larry Page",
        2: "Founder Goole",
        3: "$1100"
    },
    {
        0: "4", 
        1: "Mark Zuckerberg",
        2: "Founder Facebook",
        3: "$1300"
    }
]


const table = document.createElement('table');
table.style.borderCollapse = " collapse";
let trHeading = document.createElement('tr');


for (let heading of tableTitle) {
    let th = document.createElement('th');

    th.style.borderColor = "#969696";
    th.style.borderWidth = "1px";
    th.style.borderStyle = "solid";
    th.style.padding = "10px";

    th.innerHTML = heading;
    trHeading.append(th)
}

table.append(trHeading)


for (let i = 0; i < tableText.length; i++){
    let tr = document.createElement('tr');
    
    for (let j = 0; j < 4; j++){
        let td = document.createElement('td');
        td.innerHTML = tableText[i][j];
        td.style.borderColor = "#969696";
        td.style.borderWidth = "1px";
        td.style.borderStyle = "solid";
        td.style.padding = "10px";
        tr.append(td);
    }

    table.append(tr); 
}

   
body.append(table);







