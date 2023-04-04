fetch(path +"/show")
    .then(function(res) {
        //console.log(res);//
        // Если сервер вернул успешный ответ, попросить отдать данные// 
        return res.json(); 
        
})
    .then(function(data) {
        console.log(data);
        if (data.length) {
            for (let pet of data) {
                createCard(pet, block);}
        }
    })
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
})