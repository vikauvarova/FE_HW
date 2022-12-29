// ------------------------------- object -------------------------------------------

// --Task1. Привет, object ----------------------------------------------------------

// let user = {};
// user.name = "John",
// user.surname = "Smith",
// user.name = "Pete";
// delete user.name;

// -- Task2. Проверка на пустоту -----------------------------------------------------

// function isEmpty(obj) {
//     for (let key in obj) {
//         return false;
//     }
//     return true;
// }

// let schedule = {};

// console.log(isEmpty(schedule));

// schedule["8:30"] = "get up";

// console.log( isEmpty(schedule) );


// -- Task3. Объекты-константы? --------------------------------------------------------

// const user = {
//   name: "John"
// };

// // это будет работать? ---> YES
// user.name = "Pete";

// -- Task4. Сумма свойств объекта -----------------------------------------------------

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// sum = 0;
// for (let key in salaries) {
//     sum += salaries[key];
// }
// console.log(sum);

// -- Task5. Умножаем все числовые свойства на 2 ------------------------------------------

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
    return obj;
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

console.log(multiplyNumeric(menu));  // ???   у меня показывает undefine, если не добавить return  ???

// ------------------------ function-basics -------------------------------------------------------

// ---------------------- Oбязателен ли "else"? ----------------------------------

// Будет ли эта функция работать как-то иначе, если убрать else?  ----->> нет, функция будет работать аналогично.

// Есть ли хоть одно отличие в поведении этого варианта?  ----->  нет отличий


// ------------------------- Перепишите функцию, используя оператор '?' или '||' -------------------------------

function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
  }

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
  }

// ------------------------------ Функция min(a, b) ----------------------------------------

function min(a, b) {
    return (a > b) ? b : a;
}

console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));

// ------------------------ Функция pow(x,n) --------------------------------------------------

// function pow(x, n) {
//     let result = x;
//     for (i = 1; i < n; i++){
//         result = result * x;
//     }
//     return result;
// }

// console.log(pow(3, 2));
// console.log(pow(3, 3));
// console.log(pow(1, 100));

// let x = prompt("Введите x");
// let n = prompt("Введите n");

// (n < 1) ? alert("Используйте натуральное число") : alert(pow(x, n));



// ---------------------------------------- ДОПОЛНИТЕЛЬНО ----------------------------------------------

// ------------------------- Задача 1 ---------------------------------


const arr = {
  'ru':['голубой', 'красный', 'зеленый'],
  'en':['blue', 'red', 'green'],
};

console.log(arr.ru[0]);


// ------------------------------   Задача 2 ------------------------------------

// const obj = {
//     "Коля": '200',
//     "Вася": '300',
//     "Петя": '400',
// }

// for (let key in obj) {
//     console.log(`${key} - зарплата ${obj[key]} долларов.`);
// }

// --------------------------------  Задача 3 ---------------------------------------------

const object = {
    js: ['jQuery', 'Angular'],
    php: 'hello',
    css: 'world'
}

console.log(object.js[0]);

// --------------------------------- Задача 4 ---------------------------------------------


const lang = {
    "ru": ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
    "en" : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
}

console.log(lang.ru[0], lang.en[2]);

// ---------------------------------- Задача 6 ------------------------------------------------

function stringNum(string, num) {
    let obj = {};
    for (let i = 0; i <= num; i++) {
        obj[`${string}${i}`] = `${string}${i}`;
    }
    return obj;
}

console.log(stringNum("dog", 5));

// -------------------------------- Задача 7 --------------------------------------------------

function calcSumEvenNum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0) {
            sum += array[i]
        } 
    }
    return sum;
}

function calcSumOddNum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 !== 0) {
            sum += array[i]
        } 
    }
    return sum;
}

let array = [1, 2, 3, 4, 5, 6, 7]

function getLargestNumber() {
    return calcSumEvenNum(array) < calcSumOddNum(array) ? calcSumOddNum(array) : calcSumEvenNum(array);
}
    
console.log(calcSumEvenNum(array));
console.log(calcSumOddNum(array));
console.log(getLargestNumber());

// ------------------------------- Задача 8 ------------------------------------------------------------

function convertCelsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32 ;
    return fahrenheit;
}

console.log(convertCelsiusToFahrenheit(10))