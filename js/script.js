'use strict';

// function getMessage(){
//   console.log("Hellow world");
// }
// getMessage();
// getMessage();
// getMessage();

// function clearHandsOperation(){
//   function dirtyHands(){
//     console.log('Испачкать руки');
//   }

//   function goToTheBathroom(){
//      console.log('Пойти в ваннюу комнату');
//   }

//   function cleanHands(){
//     console.log("Помыть руки");
//   }
//   dirtyHands();
//   goToTheBathroom();
//   cleanHands();

//   dirtyHands();
//   goToTheBathroom();
//   cleanHands();
// }

// clearHandsOperation();



// function clearHandsOperation(){
//   function step(index, str){
//      console.log(index + " " +str);
//   }

//   step(1, 'Испачкать руки');
//   step(2, 'Пойти в ваннюу комнату');
//   step(3, 'Помыть руки');
// }

// clearHandsOperation();



// const cleanHandsOperation = function(){
//   const step = function(index, str){
//      console.log(index + " " +str);
//   }

//   step(1, 'Испачкать руки');
//   step(2, 'Пойти в ваннюу комнату');
//   step(3, 'Помыть руки');
// }

// cleanHandsOperation();


// const cleanHandsOperation = function(){
//   // const step = function(index, str){
//   //    console.log(index + " " +str);
//   // }
//   const step = new Function('index' , 'str', 'console.log(str)')
//   step(1, 'Испачкать руки');
//   step(2, 'Пойти в ваннюу комнату');
//   step(3, 'Помыть руки');
// }

// cleanHandsOperation();


// const countSum = function(a,b) {
//   console.log(a+b);
// }

// countSum(3,4)

// let res;

// const countSum = function(a, b) {
//   return a + b;
// }


// res = countSum(3, 4)
// console.log(res);

// const countSum = function(a, b) {
//   return a + b;
// }

// console.log(countSum(3,4) + 10);


// const countSum = function(a, b = 0) {
//   console.log(arguments[6]);
//   return a + b;
// }

// console.log(countSum(33 ,234,34,34,1,4,34,35));


// const countSum = function(a, b, callback) {
//   return a + callback(b);
// }
// const secondFunc = function(num){
//   return num + 2;
// }

// console.log(countSum(2 ,4 , secondFunc));

// function one() {
//   console.log('one');
// }

// const two = function(){
//   console.log('two');
// }

// console.log(one);
// console.log(two);


// const countSum = function(a, b, callback) {
//   return a + callback(b);
// }

// console.log(countSum(2 ,4 , function(num){
//   return num + 2;
// }));


// const money =50000;
// const expenses1 = 200;
// const expenses2 = 800;

// const sumExpenses = function(exp1,exp2){
//   return exp1+exp2;
// }

// const countTotal = function(){
//   return money-sumExpenses(expenses1,expenses2)
// }

// console.log(countTotal());

// const money =50000;
// const expenses1 = 200;
// const expenses2 = 800;

// const countTotal = function(count, call){
//   return count - call(expenses1,expenses2)
// }

// console.log(countTotal(money, function(exp1,exp2){
//   return exp1+exp2;
// }
// ));

// const sendServer = function(call){
//   setTimeout(function(){
//     console.log('Вызов прошёл');
//     call()
//   }, 2000)
// }

// const someFunc = function(){
//   console.log('А теперь отработала вторая функция');
// }

// sendServer(someFunc)


//  СТИЛИ КОДА ПРАВИЛЬНОЕ НАПИСАНИЕ КОДА
// блок объявления переменных
const button = document.querySelector('#btn')

const a = 1
const b = 'second'

let count = 0
let array = []

let g,h,j

// блок описания функций
function foo(){
  const с = 'c'
}

function boo(){
  const d = 'd'
}

//  блок функционала , функциональный блок
button.addEventListener('click', function(){
  console.log("Clicked");
})

g = 3567

if (a === 1) console.log(a);

foo()
boo()

// блок вывода в консоль , мусорный блок
console.log(b);
console.log(array);
alert(count)