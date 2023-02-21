// 1)  Превратите массив чисел в длинную строку, состоящую из всех этих чисел.
// Пример: [1,2,3] => "1,2,3"

let arr = [1, 2, 3, 4, 5, 6];

let str = arr.join(',');
console.log(str);

// 2)Используя метод reduce, посчитайте сколько людей проголосовали.

const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

let voutersCount = voters.reduce((acc, cur) => {
    if (cur.voted === true) {
        acc.push(cur.name)
    } return acc;
}, []
)

console.log(`Проголосовало ${voutersCount.length} человек`);

// 3)Получив массив всех товаров из вашего списка желаний, прикиньте, сколько будет стоить купить все сразу.

const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

let sum = wishlist.reduce((acc, cur) => acc + cur.price, 0);
console.log(sum);

// 4) У вас есть массив объектов, представляющих список клиентов с их заказами. Каждый объект имеет свойства name и orders, где orders - это массив строк, представляющих товары, которые заказал клиент. 
// Ваша задача - создать новый массив объектов, где каждый объект имеет свойства name и totalOrders, где totalOrders - общее количество товаров, заказанных клиентом.

const clients = [
    {name:'Bob' , orders: ["Harry Potter", "The Da Vinci Code", "Fifty Shades of Grey"]},
    {name:'Jake' , orders: ["Angels and Demons", "Twilight"]},
    {name:'Kate' , orders: ["The Lovely Bones", ]},
    {name:'Sam' , orders: ["Digital Fortress", "Breaking Dawn", "One Day"]},
    {name:'Phil' , orders: ["Harry Potter", "The Da Vinci Code", "Fifty Shades of Grey", "Breaking Dawn"]}
]

clients.forEach((orders) => {
    orders.totalOrders = orders.orders.length;
    delete orders.orders;
})

console.log(clients);

// 5)Создайте массив объектов со свойствами 'name' и 'age'. Вычислите количество совершенолетних и несовершеннолетних людей.

const people = [
    {name:'Bob' , age: 30},
    {name:'Jake' , age: 6},
    {name:'Kate' , age: 25},
    {name:'Sam' , age: 20},
    {name:'Phil' , age: 15},
    {name:'Ed' , age: 55},
    {name:'Tami' , age: 12},
    {name: 'Mary', age: 31,},
    {name: 'Becky', age: 17},
    {name: 'Joey', age: 41},
    {name: 'Jeff', age: 30,},
    {name: 'Zack', age: 18}
];

let adults = people.reduce((acc, cur) => {
    if (cur.age >= 18) {
        acc.push(cur.name)
    } return acc;
}, []
)

console.log(`Всего ${adults.length} совершеннолетних и ${people.length - adults.length} несовершеннолетних `);

// 6) Создайте массив объектов со свойствами 'name' и 'age'. Используя методы массива, создайте новый массив, содержащий только те объекты, возраст которых больше 30 лет.

let under30 = people.reduce((acc, cur) => {
    if (cur.age > 30) {
        acc.push(cur)
    }
    return acc;
}, [])

console.log(under30);