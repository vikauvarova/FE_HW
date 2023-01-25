const images = [
    "https://aussiedlerbote.de/wp-content/uploads/2020/04/bavarskie-alpy-foto.jpg",
    "https://moya-planeta.ru/upload/images/xl/95/fe/95fe44d0e5fe53e49d874f9c2e07381ca8ea823a.jpg",
    "http://cdn.mapme.club/images/5259/52592-samaya-vysokaya-gora-evropy.jpg",
    "http://cdn.mapme.club/images/5259/52596-samaya-vysokaya-gora-evropy.jpg",
    "https://s9.travelask.ru/system/images/files/001/277/110/wysiwyg_jpg/70586.jpg?1550763873",
    "http://store-images.s-microsoft.com/image/apps.33776.13570837168441901.d8820ad6-c4ef-45a9-accb-c6dd763aee48.560134ce-5fa0-4486-95cd-b0ba8d4921ff",
    "https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg",
    "https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?cs=srgb&dl=pexels-sagui-andrea-618833.jpg&fm=jpg",
    "https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Canada-Mountains.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqpGEpcbgN3Qe2CcZX-QjQ-vWiqaMQyIhwLg&usqp=CAU"
]

let gallery = document.querySelector('.gallery')
let smallFirst = document.querySelector('.smallFirst');
let smallSecond = document.querySelector('.smallSecond');
let big = document.querySelector('.big')
let bigImg = document.createElement('img')
big.append(bigImg)
for (let i = 0; i < 5; i++) {
    let img = document.createElement('img');
    img.setAttribute("src", images[i]);
    img.setAttribute("class", 'smallImg');
    smallFirst.append(img);

    img.onclick = function () {
        bigImg.setAttribute("class", "bigImg");
            bigImg.setAttribute("src", images[i]);
    }
    
        bigImg.onclick = function () {
            bigImg.removeAttribute("src");
            bigImg.removeAttribute("class");
    }
    
    
}
    
for (let i = 5; i < images.length; i++) {
    let img = document.createElement('img');
    img.setAttribute("src", images[i]);
    img.setAttribute("class", 'smallImg');
    smallSecond.append(img);

    img.onclick = function () {
        bigImg.setAttribute("class", "bigImg");
            bigImg.setAttribute("src", images[i]);
    }
    
        bigImg.onclick = function () {
            bigImg.removeAttribute("src");
            bigImg.removeAttribute("class");
    }
    
    
    }

gallery.append(small, big)


