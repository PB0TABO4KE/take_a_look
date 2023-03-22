/* console.log("Pipiska!-fdsa")
setTimeout(function() {
    console.log("Pipiska!-fdsa")  
}, 1000);

console.log("Pipiska!-fdsa")
*/

/*
мама готовит ужин и попросила дочку порезать хлеб.
Также мама попросила сына сходить в магазин за хлебом.

? 1. Брат пошёл в магазин.
- когда вернется брат?
- а точно ли брат вернется с хлебом?
! 2. Сестра с ножом ждет брата у двери.
- сестра щанимается своими делами
- когда будет хлеб, она его порежет
*/


let p1 = new Promise(function(resolve, reject) {
let n = Math.random();
if (n > 0.5) {
    resolve("Хлеб был куплен");
} else {
    reject("Проблема с покупкой хлеба");
}
});
p1.then(function(result) {
  console.log(result);  
}).catch(function(err) {
    console.warn(err);
})

let p2 = new Promise(function(resolve, reject) {
    let n = Math.random();
    if (n > 0.2){
        resolve("Хлебушек нарезан");
    } else {
        reject("Что-то пошло не так");
    }
})

p1 
    .then(function(result){
        console.log(result);
        return p2;
    })
    .then(function(result2){
        console.log(result2);
        console.log("ужин удался");
    }) 
    .catch(function(err){
        console.warn(err);
    })