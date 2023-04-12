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
    
    const cardLike = document.createElement("i"); // создаём новый i для лайка// 
    cardLike.className = "like fa-heart"; //Добавляем класс//
    cardLike.classList.add(pet.favorite ? "fa-solid" : "fa-regular"); // Добавляем подкласс в зависмости от значения favorite в JSON этого котика. Тернарная функция, которая выставляет нужный стиль на сердечко//
    cardLike.addEventListener("click", e => { setLike(cardLike, pet.id, !pet.favorite);
    })


    const cardTrash = document.createElement("i"); // создаём новый i для удаления//
    cardTrash.className = "fa-sharp fa-solid fa-trash card__trash_bucket"; //Задаём класс для иконки удаления//
    cardLike.addEventListener("click", e => { deleteCard(cat.id, e.currentTarget.parentElement);
    })



    card.append(cardImg, cardTitle, cardLike, cardTrash); // здесь в качестве аргументов указаны функции, которые добавляют 
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
        pets = pets.localeCompare(p => {
          if (p.id === id )
         {
          p.favorite = like;
         }
         return p;
        })
        localStorage.setItem("band-cats", JSON.stringify(pets));
    })


  
}

//Списано с занятия 5 у другой группы //
function deleteCard(id, el) {
  if (id) {
      fetch(`${path}/delete/${id}`, {
          method: "delete"
      })
          .then(res =>
          {
              if (res.status === 200) {
                  el.remove();
              }
          })
  }

}

/*
function addCat () {
document.querySelector('#send_button').addEventListener('click', (event) => {
console.log("СИСЬКИ");
})
}
*/
/*
document.querySelector('#div2').appendChild(event.target);
  //this.removeChild(event.target);
*/


  /*  
const documentForms = document.forms[0];
console.log(documentForms);
*/

/*
let id_cat = document.querySelector('#id');     
console.log(id_cat);
console.log(id_cat.value);

document.querySelector('#send_button').addEventListener('click', (event) => {
    let id_cat = document.querySelector('#id');     
    console.log(id_cat);
    console.log(id_cat.value);
    alert(id_cat.value)
  })


*/
