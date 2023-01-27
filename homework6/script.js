const p = document.querySelector("p");
const button = document.querySelector("button");

p.style.cssText = "color: green; font-size: 20px; font-style: italic"
button.style.padding = "15px";
button.style.background = "rgb(255, 69, 69)";
button.style.fontWeight = "bold";
button.style.fontSize = "18px";

button.onclick = () => {
    if (p.innerText === "") {
        p.innerText = "Создайте параграф и одну кнопку. Добавьте стили для этих элементов используя javascript.Сделайте так, чтобы при клике на кнопку исчезал параграф , а при повторном клике появлялся обратно."
        button.innerText = "Нажать, чтоб текст исчез"
    } else {
        p.innerText = "";
        button.innerText = "Нажать, чтоб текст появился"
    }
    
}

// ---------------------------------------------------------------------------

const task2 = document.querySelector(".colors");
const body = document.querySelector("body");

const colors = ["olive", "orange", "yellow", "blue", "aqua", "wheat", "teal", "tomato"];

const ul = document.createElement("ul");
for (let i = 0; i < colors.length; i++) {
    let li = document.createElement("li");
    li.style.fontSize = "18px";
    li.style.margin = "10px";
    li.style.width = "60px";
    li.innerHTML = colors[i];
    ul.append(li);

    li.onmouseover = () => {
        body.style.backgroundColor = colors[i];
    }

    li.onmouseout = () => {
        body.style.backgroundColor = "white";
    }
}
task2.append(ul)

//------------------------------------------------------------------------------

const films = [
    {
        title: "Гарри Поттер и Кубок огня",
        description: "Гарри Поттер, Рон и Гермиона возвращаются на четвёртый курс школы чародейства и волшебства Хогвартс. При таинственных обстоятельствах Гарри был отобран в число участников опасного соревнования — Турнира Трёх Волшебников, однако проблема в том, что все его соперники — намного старше и сильнее.",
    },
    {
        title: "Голодные игры",
        description: "Будущее. Деспотичное государство ежегодно устраивает показательные игры на выживание, за которыми в прямом эфире следит весь мир. Жребий участвовать в Играх выпадает юной Китнисс и тайно влюбленному в нее Питу. Они знакомы с детства, но теперь должны стать врагами. Ведь по нерушимому закону Голодных игр победить может только один из 24 участников. Судьям не важно, кто выиграет, главное — зрелище. И на этот раз зрелище будет незабываемым.",
    },
    {
        title: "Энола Холмс",
        description: "Англия, 1884 год. В день своего 16-летия Энола Холмс обнаруживает, что её мама бесследно пропала. Обратившись за помощью к давно покинувшим отчий дом братьям Майкрофту и Шерлоку, девушка не получает ожидаемой поддержки. Поскольку отец умер рано, мать — женщина прогрессивных взглядов — воспитывала и обучала дочь сама, и теперь юная Энола не соответствует общепринятому представлению о приличной молодой особе. Хоть Шерлок и сочувствует сестре, Майкрофт является её законным опекуном и собирается отправить в женский пансион. Будучи не в восторге от данной перспективы, Энола начинает разгадывать оставленные матерью подсказки и, переодевшись мальчиком, тайком садится на поезд в Лондон, где знакомится с молодым виконтом, тоже сбежавшим от своей родни.",
    },
    {
        title: "Мстители",
        description: "Локи, сводный брат Тора, возвращается, и в этот раз он не один. Земля оказывается на грани порабощения, и только лучшие из лучших могут спасти человечество. Глава международной организации Щ.И.Т. Ник Фьюри собирает выдающихся поборников справедливости и добра, чтобы отразить атаку. Под предводительством Капитана Америки Железный Человек, Тор, Невероятный Халк, Соколиный Глаз и Чёрная Вдова вступают в войну с захватчиком.",
    },
    {
        title: "Доктор Стрэндж",
        description: "Доктор Стрэндж при помощи Вонга спасает от гигантского осьминога девушку-подростка по имени Америка Чавес, которая при сильном испуге может открывать порталы в параллельные вселенные. Пытаясь уберечь новую знакомую от злой силы, жаждущей заполучить её способность, Доктор вместе с Америкой пускается в путешествие по мультивселенной.",
    }
]

const task3 = document.querySelector(".films");

for (let i = 0; i < films.length; i++){
    const h2 = document.createElement("h2");
    h2.innerText = films[i].title;
    

    const p = document.createElement("p");
    p.innerText = films[i].description;
    p.classList.add("active")
    task3.append(h2, p);

    h2.onclick = () => {
        if (p.getAttribute("class") == "active") {
            p.classList.remove("active")
        } else {
            p.classList.add("active")
        }
    }
}

//------------------------------------------------------------------------------

const keyboardBlock = document.querySelector(".keyboard")

const keyboard = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m",]


const firstLine = document.createElement("div");
const secondLine = document.createElement("div");
const thirdLine = document.createElement("div");
const text = document.createElement("p");


const spaceDel= document.createElement("div");
const space = document.createElement("button");
space.classList.add("keyboard-btn-big");
const del = document.createElement("button");
del.classList.add("keyboard-btn-big");
const capsLock = document.createElement("button");
capsLock.classList.add("keyboard-btn-big");


space.innerText = "Space";
del.innerText = "Delete";
capsLock.innerText = "CapsLock"; //-- добавила, но функцию закоментила, так как не понимаю как правильно реализвать. ниже вопрос по реализации
spaceDel.append(capsLock, space, del);

let textAray = [];

for (let i = 0; i < keyboard.length; i++){
    const btn = document.createElement("button");
    btn.innerHTML = keyboard[i];
    btn.classList.add("keyboard-btn");
    if (i < 10) {
        firstLine.append(btn);      
    } else if (i >= 10 && i < 19) {
        secondLine.append(btn);
    } else {
        thirdLine.append(btn);
    }

    btn.onclick = () => {
        textAray.push(keyboard[i]);
        text.innerText = textAray.join('');
    } 
}     

// capsLock.onclick = () => {  ---- // Данная функция работает, но не понимаю как обратно вернуть. Знаю нужно сделать какую-то проверку, но те что пробовала не работают
//     firstLine.innerHTML = "";
//     secondLine.innerHTML = "";
//     thirdLine.innerHTML = "";
//     capsLock.classList.add("capsLock");
//        for (let i = 0; i < keyboard.length; i++){
//             const btn = document.createElement("button");
//             btn.innerHTML = keyboard[i].toUpperCase();
//             btn.classList.add("keyboard-btn");
//             if (i < 10) {
//                 firstLine.append(btn);
//             } else if (i >= 10 && i < 19) {
//                 secondLine.append(btn);
//             } else {
//                 thirdLine.append(btn);
//             }

//             btn.onclick = () => {
//                 textAray.push(keyboard[i].toUpperCase());
//                 text.innerText = textAray.join('');
//             }
//         }
// }



del.onclick = () => {
    textAray = [];
    text.innerText = textAray.join('');
}

space.onclick = () => {
    textAray.push(" ");
    text.innerText = textAray.join('');
}

keyboardBlock.append(text, firstLine, secondLine, thirdLine, spaceDel );
