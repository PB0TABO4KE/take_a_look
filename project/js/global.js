const block = document.querySelector(".wrapper");
const addBtn = document.querySelector(".add");
const mdBox = document.querySelector(".modal-block");
const mdClose = mdBox.querySelector(".modal-close");
const mdMoreinfo = document.querySelector(".more_info"); // ищем модальное окно с информацией//
const mdMoreinfoClose = mdMoreinfo.querySelector(".more_info_close");

const mdEditinfoBtn = mdMoreinfo.querySelector(".more_info_edit");


const mdEditinfo = document.querySelector(".edit_info"); // ищем модальное окно для редактирования//
const mdEditinfoClose = mdEditinfo.querySelector(".edit_info_close");

const addForm = document.forms.add;
const editForm = document.forms.edit;
const prevTag = addForm.querySelector(".preview");
const prevTag_edit = editForm.querySelector(".preview");


let name = "PB0TABO4KE";
let path = `https://cats.petiteweb.dev/api/single/${name}`;



//JSON.stringify(obj) => из объекта строка//
//JSON.pasrse(tring) => из строки объект//

// localStorage Хранит информацию как строку // 
let pets = localStorage.getItem("band-cats");
if (pets) {
    try {
    pets = JSON.parse(pets);
    for (let pet of pets) {
        createCard(pet, block) }
    }
       
    catch(err) {
        console.log(err.message);
        pets = null;
    }
}
// console.log("pets", pets);
// Выводит с консоль котов