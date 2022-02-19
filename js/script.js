// const one = function(){
//   // debugger дебагер это установк для оставновки определнного функционала

//   console.log('start 1');
//   two()

//   console.log('end 1');
// }

// const two = function(){

//   console.log('start 2');
//   three()

//   console.log('end 2');
// }

// const three = function(){
//   console.log('run 3');
// }
// // всё равно он сначла выполнит функцию в стеке
// // а потмо уже начнёт выполнять setTimeout(three, 0)
// // setTimeout(three, 0)
// one()

// // отложенный вызов функции
// // setTimeout сам вызовает функцию поэтому не надо ставить после него круглые скоюки
// // setTimeout(three, 2000)



// КОНТЕКСТ ВЫЗОВА THIS
// Это всего ишь ссылка на объект на каотором он вызван
'use strict'

// const one = function(){
//   console.log(this);
// }
// one()

// const user1 = {
//   name: 'Alex',
//   say: function(){
//     console.log(this.name);
//   }
// }
// const user2 = {
//   name: 'Oleg',
//   say: function(){
//     console.log(this.name);
//   }
// }

// user1.say()
// user2.say()



// const user1 = {
//   name: 'Alex',
//   say: say
// }
// const user2 = {
//   name: 'Oleg',
//   say: say
// }

// function say(a,b){
//     console.log(this.name);
//     console.log(a + b);
// }

// user1.say()
// user2.say()

// // Если вызвать пустую функцию то будет ошибка
// // но если мы укажем функции черезе call или apply объект то он вызовет
// // Также мы можем передавать аргументы в функцию
// say.call(user1, 1 ,2)
// // apply принимает 1 аргумент в виде, массива
// say.apply(user2, [3,5])
// // Методы dspddf.n функцию

// const user1 = {
//   name: 'Alex',
//   say: say
// }
// const user2 = {
//   name: 'Oleg',
//   say: say
// }

// function say(){
//     console.log(this.name);
// }
// // Мы вызовем ункцию say в newSay , н о с помощью метода bind она уже знает контекст вызова
// const newSay = say.bind(user1)
// const newSay1 = say.bind(user2)

// newSay()
// newSay1()

// Контектс вызова это всегда ссылка на объект
// контекст вызова всегда формируется в момент вызова
// контекст вызова может быть привязан к конкретному объекту 3 способоами
// или произойдёт не явная привязка самим js

// const btns = document.querySelectorAll('button')

// const user = {
//   name: 'Alex',
//   say: function (){
//     console.log(this);
//   }
// }

// console.log(btns);

// btns.forEach(function(btn){
//   // тут он вызовет не объект с именем alex а саму кнопку

//   // btn.addEventListener('click', user.say)
//   btn.onclick = user.say
//   console.log(btn);
// })


// const btns = document.querySelectorAll('button')

// const changeColorBorder = function(){
//   btns.forEach(function(btn){
//     btn.style.border = '1px solid black'
//   })
//   this.style.border = '2px solid red'
// }

// btns.forEach(function(btn){
//   btn.addEventListener('click', changeColorBorder)
// })



// const btns = document.querySelectorAll('button')

// const changeColorBorder = function(event){
//   btns.forEach(function(btn){
//     btn.style.border = '1px solid black'
//   })
//   event.target.style.border = '2px solid red'
// }

// btns.forEach(function(btn){
//   btn.addEventListener('click', changeColorBorder)
// })


// const user = {
//   name: 'ALex',
//   say: function(){
//     console.log(this);
//   }
// }

// // А что если мы запустим функцию чере settimout
// // то мы получим пустую строку
// // setTimeout(user.say, 2000);

// // Для того чтобы не получать пустую строку то дучше всего написат анаонминую фннкцию
// //, в консоли мы увдими нашу имя Alex
// setTimeout(function(){
//   user.say()
// }, 500);



// // СТРЕЛОЧНАЯ ФУНКЦИЯ
// //  =>  Такая стрелока заменят слово function
// // более коротокая форма записи
// const counter = (a,b) => {
//   return a+b
// }
// // также мы можем убрать скобки и она все равно будет возвращать щначение
// const counter2 = (a,b) => a*b

// // также если функция, принимает 1 параметр то мы можем избавить и от курглых скобок
// const counter3 = a => a + 7
// // нюанс таких функци в том что у них отстусвует КОНТЕСТ ВЫЗОВА
// console.log(counter(3,4));
// console.log(counter2(3,4));
// console.log(counter3(7));


// const obj = {
//  array:[1,3,4,5],
//  someFunc: function(){
//    console.log(this);
//   //  Чтобы вернуть контест вызова мы можем использовать стрелочную функцию
//    this.array.forEach((item) =>{
//         console.log(this);
//         console.log(item);
//    })
//  }
// }

// obj.someFunc()

// xn,s не писать return можно его получить таким образом
const func = () =>({
    name:'Alex',
    city:'Minsk'
})

console.log(func());