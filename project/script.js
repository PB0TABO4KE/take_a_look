if (!pets) { // срабатывает, если в локалсторадж нет pets//
    fetch(path + "/show")
        .then(function (res) {
            //console.log(res);//
            // Если сервер вернул успешный ответ, попросить отдать данные// 
            return res.json();

        })
        .then(function (data) {
            console.log(data);
            if (data.length) {
                pets = data;
                localStorage.setItem("band-cats", JSON.stringify(data)) // Раз уж котов не было, нужно сохранить их в локальное хранилище // 
                for (let pet of data) {
                    createCard(pet, block);
                }
            }
        })

}
// fetch(path + "/show")
// .then(res => res.json())
// .then(data => {console.log(data)})







addBtn.addEventListener("click", e => {
    mdBox.classList.toggle("active");
})
mdClose.addEventListener("click", e => {
    mdBox.classList.remove("active");
})

mdBox.addEventListener("click", e => {
    if (e.target === e.currentTarget) {
        mdBox.classList.remove("active");
    }
});





mdEditinfoBtn.addEventListener("click", e => {
    mdEditinfo.classList.toggle("active");
    mdMoreinfo.classList.remove("active");
})
mdEditinfoClose.addEventListener("click", e => {
    mdEditinfo.classList.remove("active");
})
mdEditinfo.addEventListener("click", e => {
    if (e.target === e.currentTarget) {
        mdEditinfo.classList.remove("active");
    }
});



// Для закрывания попапа //
// Закрываем по кнопке в окне
mdMoreinfoClose.addEventListener("click", e => {
    mdMoreinfo.classList.remove("active");
})
// Закрываем по клику за пределы окна
mdMoreinfo.addEventListener("click", e => {
    if (e.target === e.currentTarget) {
        mdMoreinfo.classList.remove("active");
    }
});


addForm.elements.image.addEventListener("change", e => {
    const prevTag = addForm.querySelector(".preview");
    prevTag.style.backgroundImage = `url(${e.currentTarget.value})`;
})

editForm.elements.image.addEventListener("change", e => {
    const prevTag_edit = editForm.querySelector(".preview");
    prevTag_edit.style.backgroundImage = `url(${e.currentTarget.value})`;
})




addForm.addEventListener("submit", e => {
    e.stopPropagation(); //Всплытие пузырька / buuble effect// 
    e.preventDefault(); // остановить действие по умолчанию //
    console.log(addForm);
    console.log(e.currentTarget);
    console.log(addForm.children); // обращение ко всем дочерним тегам //
    console.log(addForm.elements); // элементы формы (input/button/select/textarea)//
    const body = {};
    for (let i = 0; i < addForm.elements.length; i++) {
        const el = addForm.elements[i];
        if (el.name) {
            if (el.name === "favorite") {
                body[el.name] = el.checked;
            } else {
                body[el.name] = el.value;
            }
        }
    }

    fetch(path + "/ids")
        .then(res => res.json())
        .then(ids => {
            console.log(ids);
            body.id = ids[ids.length - 1] + 1;
            console.log(body);
            return fetch(path + "/add", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            })
        })
        .then(res => {
            if (res.status === 200) {
                addForm.reset();
                prevTag.style = null;
                mdBox.classList.remove("active");
                createCard(body, block);
                pets.push(body);
                localStorage.setItem("band-cats", JSON.stringify(pets))
            }
            // console.log(res.status);
            // return res.json();
        })

})









