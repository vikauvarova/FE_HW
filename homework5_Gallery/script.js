const images = [
    "https://aussiedlerbote.de/wp-content/uploads/2020/04/bavarskie-alpy-foto.jpg",
    "https://moya-planeta.ru/upload/images/xl/95/fe/95fe44d0e5fe53e49d874f9c2e07381ca8ea823a.jpg",
    "http://cdn.mapme.club/images/5259/52592-samaya-vysokaya-gora-evropy.jpg",
    "http://cdn.mapme.club/images/5259/52596-samaya-vysokaya-gora-evropy.jpg",
    "https://s9.travelask.ru/system/images/files/001/277/110/wysiwyg_jpg/70586.jpg?1550763873",
    
]

let gallery = document.querySelector('.gallery')
let small = document.querySelector('.small');
let big = document.querySelector('.big')
for (let i = 0; i < images.length; i++) {
    let img = document.createElement('img');
    img.setAttribute("src", images[i]);
    img.setAttribute("class", 'smallImg');
    small.append(img);

    img.onclick = function () {
        
        if (img.getAttribute("class") === "smallImg") {
            big.append(img);
            img.setAttribute("class", "bigImg");
        } else {
            small.append(img);
            img.setAttribute("class", "smallImg");
        }
    
    }
    }

gallery.append(small, big)


