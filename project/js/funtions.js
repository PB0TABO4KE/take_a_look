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
    
    const cardLike = document.createElement("i"); // создаём новый i для иконки лайка// 
    cardLike.className = "like fa-heart"; //Добавляем класс//
    cardLike.classList.add(pet.favorite ? "fa-solid" : "fa-regular"); // Добавляем подкласс в зависмости от значения favorite в JSON этого котика. Тернарная функция, которая выставляет нужный стиль на сердечко//
    cardLike.addEventListener("click", e => { setLike(cardLike, pet.id, !pet.favorite);
    })

    const cardTrash = document.createElement("i"); // создаём новый i для иконки удаления//
    cardTrash.className = "fa-sharp fa-solid fa-trash card__trash_bucket"; //Задаём класс для иконки удаления//
    cardTrash.addEventListener("click", e => { 
      let answer = confirmDelete();
      if (answer) {
      deleteCard(pet.id, e.currentTarget.parentElement);
    }
    })
   
    const cardShowmore = document.createElement("i"); // создаём новый i для иконки подробнее //
    cardShowmore.className = "fa-solid fa-magnifying-glass card__showmore"; //Задаём класс для иконки лупы//
    // Пишем функцию для отображения данных о коте //
    cardShowmore.addEventListener("click", e => { showMore (pet.id, pet.name, pet.favorite, pet.rate, pet.age, pet.description, pet.image)
    })

    card.append(cardImg, cardTitle, cardLike, cardTrash, cardShowmore); // здесь в качестве аргументов указаны функции, которые добавляют элементы на карточку кота // 
    tag.append(card);
    // console.log(cardImg.offsetWidth); // Делает картинку квадратной //
    cardImg.style.height = cardImg.offsetWidth + "px";// Делает картинку квадратной //  
}



function showMore (id, name, favorite, rate, age, description, image)
{
mdMoreinfo.classList.toggle("active");
console.log("Данные о коте " + id + " " + name + " " + favorite + " " + rate + " " + age + " " + description)

const id_name = document.querySelector("#info_id"); // Объявляем тег для фейкового котика//
id_name.innerText = id;

const info_name = document.querySelector("#info_name"); // Объявляем тег для фейкового котика//
info_name.innerText = name;

const info_favorite = document.querySelector("#info_favorite"); // Объявляем тег для фейкового котика//
info_favorite.innerText = favorite;

const info_rate = document.querySelector("#info_rate"); // Объявляем тег для фейкового котика//
info_rate.innerText = rate;

const info_age = document.querySelector("#info_age"); // Объявляем тег для фейкового котика//
info_age.innerText = age;

const info_description = document.querySelector("#info_description"); // Объявляем тег для фейкового котика//
info_description.innerText = description;

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
        pets = pets.map(p => {
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
                  alert("Кот с id " + id + " успешно удалён!");
              }
          })
  }

}


function confirmDelete() {
  if (confirm("Вы действительно хотите удалить кота?")) {
      return true;
  } else {
      return false;
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
