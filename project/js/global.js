const block = document.querySelector(".wrapper");
const addBtn = document.querySelector(".add");
const mdBox = document.querySelector(".modal-block");
const mdClose = mdBox.querySelector(".modal-close");

const addForm = document.forms.add;
const prevTag = addForm.querySelector(".preview");


let name = "PB0TABO4KE";
let path = `https://cats.petiteweb.dev/api/single/${name}`;




//
//JSON.stringify(obj) => из объекта строка//
//JSON.pasrse(tring) => из строки объект//
 
// Хранит информацию как строку // 
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