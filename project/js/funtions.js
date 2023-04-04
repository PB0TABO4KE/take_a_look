function createCard(pet, tag) {

    const card = document.createElement("div");
    card.className = "card";
    const cardImg = document.createElement("div");
    
    // Определяет, есть ли картинка у ложного котика //
    cardImg.className = "pic"
    if (pet.image) {
        cardImg.style.backgroundImage = `url(${pet.image})`
    } else {
        cardImg.classList.add("tmp");
    }
    
    const cardTitle = document.createElement("h2"); // Объявляем тег для фейкового котика//
    cardTitle.innerText = pet.name;
    
    const cardLike = document.createElement("i"); // создаём новый i// 
    cardLike.className = "like fa-heart"; //Добавляем класс//
    cardLike.classList.add(pet.favorite ? "fa-solid" : "fa-regular"); // Добавляем подкласс в зависмости от значения favorite в JSON этого котика. Тернарная функция, которая выставляет нужный стиль на сердечко//
    cardLike.addEventListener("click", e => { setLike(cardLike, pet.id, !pet.favorite)
    })

    card.append(cardImg, cardTitle, cardLike);
    tag.append(card);
    // console.log(cardImg.offsetWidth); // Делает картинку квадратной //
    cardImg.style.height = cardImg.offsetWidth + "px";// Делает картинку квадратной //
}

    function setLike(el, id, like) {
    el.classList.toggle("fa-solid");
    el.classList.toggle("fa-regular");

    fetch(path + "/update/" + id, {
        method : "put",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({favorite: like})

    })
    .then (res => res.json())
    .then (data => {
        console.log(data);
    })
}


    