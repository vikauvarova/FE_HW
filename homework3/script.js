// ------------------------- Task 1 -------------------------------------

let word = "word";

for (let i = 0; i < word.length; i++) {
        console.log(word[i]);
}

// ------------------------- Task 2 -------------------------------------

function palindrom(string) {
    for (let i = 0; i < string.length; i++){
       return (string[i] === string[string.length - i - 1]) ? true : false;
    }
}

console.log(palindrom("топот"));

// ------------------------- Task 3 -------------------------------------

let sum = 0;

for (let i = 0; i <= 50; i += 5){
    sum = sum + i;
}

console.log(sum);

// ------------------------- Task 4 -------------------------------------

const lego = [
  {
    title: "Police",
    price: 9,
    collection: "Lego City",
  },
  {
    title: "Tram",
    price: 120,
    collection: "Lego City",
    
  },
  {
    title: "Animals",
    price: 37,
    collection: "Lego Friends",
  },
  {
    title: "Tree house",
    price: 68,
    collection: "Lego Friends",
    },
  {
    title: "Hogwards",
    price: 63,
    collection: "Lego Harry Potter",
    },
  {
    title: "Gingerbread house",
    price: 68,
    collection: "Lego Duplo",
  },
];

let a = lego[0].price + lego[1].price
console.log(a);

for (let i = 0; i < lego.length; i++){
    console.log(`${lego[i].collection} ${lego[i].title}`);
}

// ------------------------- Task 5 -------------------------------------

for (let i = 0; i < lego.length; i++){
    let { title, price} = lego[i];
    console.log(`${title} (${price})`);
}

// ------------------------- Task 6 -------------------------------------


function showExpensiveItem(array) {
    let expensiveItem = array[0];
    for (i = 0; i < array.length; i++) {
        if (array[i].price > expensiveItem.price) {
            expensiveItem = array[i];
        }
    }
    return expensiveItem;
}

console.log(showExpensiveItem(lego));



