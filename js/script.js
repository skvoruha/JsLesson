'use strict'
//СТАНДАРТ Особенности современного стандарта ES6

// проблема в том что var создаёт её в глобальном
// объекте
// var a = 10
// лучше
// let a = 5

// если использоапть var то получиться так что
// перемееной присвоиться сразу число 5 и оно не будет меняться
// var сразу присваивается нужное значение
// for (var a = 0; a <5; a++) {
//     console.log(window);
//     setTimeout(() =>{
//         console.log(a);

//     })
// }

// изменить const мы не можеи но добавить занчение в масив можем
// const a = [1,2,3,4]
// a.push(5)

// const b = {
//     a:1,
//     b:3
// }
// b.c=19
// console.log(b);

// const foo = (name,age) =>{
//     console.log('Привет, меня зовут ' + name + '!');
//     console.log('Мне ' + age + ' года!');
// }

// foo('Alex', 34)


// Наишем объект пользователя

// const user = {
//         name: 'ALex',
//         age: 34,
//         say: function(){
//             const foo = (name,age) =>{
//             console.log('Привет, меня зовут ' + name + '!');
//             console.log('Мне ' + age + ' года!');
//         }

//     foo('Alex',34)
//     }
// }

// user.say()

// const img = document.querySelector('.imgES6')


// const user = {
//         name: 'ALex',
//         age: 34,
//         say (){
//             console.log(this);
//             const foo = function(name,age) {
//                 console.log(this);
//                 console.log('Привет, меня зовут ' + name + '!');
//                 console.log('Мне ' + age + ' года!');
//         }

//     foo('Alex',34)
//     }
// }

// user.say()
// //  если вызовем стрелочнйо функцие то получим
// //  не саму кнопку а сам объект
// img.addEventListener('click', () => {
//     user.say()
// })


// const foo = (name,age = 20) => {
//     console.log(this);
//     console.log('Привет, меня зовут ' + name + '!');
//     console.log('Мне ' + age + ' года!');
// }

// // если мы вызовем функцию без второго аргумента то посдавить базоый если он есть
// // таким образом мы можем подставить значение пол умолчанию
// foo('Alex')




// ИНТЕРПОЛЯЦИЯ или ШАБЛОННЫ СТРОКИ
// Использовось раньше
//  \n перенос строки
const foo = (name,age = 20) => {
    // console.log('Привет, меня зовут ' + name + '!\n'
    // + 'Мне ' + age + ' года!');

    // поставим обрантые скробки ``
    // чтобы поставить переменнюу
    // СОВЕРМЕННЫЙ СТАНДАРТ ВЫВОДА
    console.log(`Привет, меня зовут ${name} ! Мне  ${age + 3 } года!`);
}
foo('Alex')