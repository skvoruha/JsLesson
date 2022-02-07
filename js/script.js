'use strict'

// let a = 5

// function one(){
//   let a = 4
//   console.log(a);
// }

// one()

// let a = 5

// function one(){
//   let a = 10
//   function two(){
//     let a = 15
//     console.log(a);
//   }
//   two()
// }

// one()

// let a = 5

// function one(c, d){
//   // LexicalEnviroment = (c: 3, d:undefined)
//   let a = 10
//   // LexicalEnviroment = (a: 10,c: 3, d:undefined)
//   console.log(a, c, d);

//   function two(){
//     // LexicalEnviroment = ()
//     // Scope{a: 10, c: 3, d:undefined}
//     console.log(a, c);
//   }
//   two()
// }

// one(3)

// let y = 5

// function one(x){
//   console.log(x + y);
// }

// function two () {
//   let y = 15
//   // хотч тут определна перменная Y все
//   // равно будет считывать глобальную переменнюу н
//   one(3)
// }

// two()


// ЗАМЫКАНИЕ  - это функция внитри функции

// function one(x) {

//   function two(){
//     console.log(x);
//     console.dir(two);
//   }

//   two()
// }
// one(10)


// function one(x) {

//   function two(){
//     const a = +prompt("Введите число")
//     x--;

//     console.log(a);
//     console.log(x);

//     if (a !== x){
//       two()
//     }
//   }

//   two()
// }

// one(10)


// function counter(n){
//   return function (x) {
//     return x + n
//     }
// }

// let sum = counter(1)
// console.log(sum(15));
// console.log(sum(20));


function pathGenerator(url) {
  return function(imgeName){
    return url + imgeName
  }
}

let urlToIcons = pathGenerator('http://mydomain.ru/assests/icons/')
let urlToImages = pathGenerator('http://mydomain.ru/assests/images/')

console.log(urlToIcons('clock.svg'));
console.log(urlToIcons('man.jpg'));