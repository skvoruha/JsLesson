'use strict'

// let name = 'Alex'

// let person = {
//    name: 'Alex',
//    namer: name
// }
// // первый вариант используется асто, и они одинаковые let person = {}
// let job = new Object()

// console.log(name);
// console.log(person);
// console.log(job);

// let name = 'Alex'

// let person = {
//    name: 'Alex',
//    naming: name,
//    'agetwo': 55
// }
// agetwo можно и в виде строки обявить ключ и это тбудет тоже самое что просто age
// такой способ keit посольку можно использовать в названни ключа тире
// первый вариант используется часто, и они одинаковые let person = {}

// let job = new Object()
// job.position = 'developer'

// // воженный объект внутри объекта
// person.job = job
// // Объект можно записать и в таком виде
// person.age = 33

// console.log(name);
// console.log(person);
// console.log(job);

// console.log(person.age);
// // можно и в таком варианте получить значение
// console.log(person['age']);

// // эти два объекта одинаковые
// console.log(person.job === job)


// let person = {
//    name: 'Alex',
//    age: 33
// }

// let job = {
//   position: 'middle-developer',
//   salary: '1.000.000'
// }

// // воженный объект внутри объекта
// person.job = job
// person.job.position = 'senior'


// console.log(person);
// console.log(job);
// console.log(person['age']);
// console.log(person.job === job)

// let person = {
//    name: 'Alex',
//    age: 33,
//    job : {
//         position: 'middle-developer',
//         salary: '1.000.000'
//   }
// }

// const say = function(str){
//   console.log(str);
// }

// person.say = say

// person.say("Hello world")

// console.log(person);



// let person = {
//    name: 'Alex',
//    age: 33,
//    job : {
//         position: 'middle-developer',
//         salary: '1.000.000'
//   }
// }
// //  Можно сразу записать функцию
// //  или сразу записать в объект при иницилиазции то есть создании объекта
// person.say = function(str){
//   console.log(str);
// }

// person.say("Hello world")

// console.log(person);

// let key = "city"
// let city = 'Minsk'

// let person = {

//   [key]: city,
//    name: 'Alex',
//    age: 33,
//    job : {
//         position: 'middle-developer',
//         salary: '1.000.000'
//   },
//   say : function(str){
//     console.log(str);
//   }
// }
// //  Можно сразу записать функцию
// //  или сразу записать в объект при иницилиазции то есть создании объекта

// person.say("Hello world")
// // person[key] = city
// // Можно или так записать пара ключ значение или сразу в инициизации
// console.log(person);

// let array = [1, 2, 3, 4]

// array[0] = 'cat'
// array[10] = 'dog'
// console.log(array);
// console.log(array[2]);
// console.log(array[7]);
// // длина массива
// console.log(array.length);

// let array2 = new Array(1,2,3,4)
// console.log(array2);

// //  если передать ожно занчение то будет покащываться длина массива
// let array3 = new Array(3)
// console.log(array3);
// // чаще всего массивы созадаются из квадаратных скобок

// // при создании массива мы можем писать пустые элементы через запятую
// let array4 = [, , , 4]
// console.log(array4);

// // также мы можем насильно указать длину ммассива
// let array5 = [1,2,3,4]
// // можно указать длину массива 0 и массив очищается
// array5.length = 0
// console.log(array5);


// let array = ['apple','Banana','Orange']
// // методоы  push в самый конец добваляют элементы в массив
// //  методоы unshift добавляем элемент в самое начало и при этом пересматривается индекс
// array.push('Kiwi')
// array.unshift('papaya','mango')

// // есть противоположные методы это pop и ыршае
// // pop удаляет элемент с самого конца
// array.pop()
// // shift удаляет элемент с самого начала
// // данные методы возвращют удалённый ими элемент
// array.shift()
// console.log(array.shift());

// console.log(array);


// let array = ['apple','Banana','Orange']

// array.push('Kiwi')
// array.unshift('papaya','mango')


// let lastElement = array.pop()
// // метод можно записать в переменнюу
// console.log(lastElement);

// array.shift()

// console.log(array);



// let array = ['apple','Banana','Orange']

// array.push('Kiwi')
// array.unshift('papaya','mango')

// // помогает сортировать элменнты в массиве по алфавиту
// array.sort()
// console.log(array);
// array.reverse()
// console.log(array);



// let array = ['apple','Banana','Orange']

// array.push('Kiwi')
// array.unshift('papaya','mango')

// array.reverse()
// // метод join возвращает наш массив в строку
// // метод скливает элементы массива
// console.log(array.join());
// // можно добавить параметр наприер двоеточие и строка будет разделена ими
// console.log(array.join('-'));
// // этот  метод только возвращет строку но не меняет сам массив


// вариатны перебора массива

// let obj = {
//   name: 'Alex',
//   age: 23,
//   isStudent: false
// }

// for (let key in obj){
//   console.log("Ключ:"  + key + " Значение:" + obj[key]);
// }

// console.log(Object.keys(obj));


// let array = [1,2,3,4,5]
// // цикл возвращает элмент массива
// for (let key of array) {
//   console.log(key);
// }
// // цикл возвращает индекс массива
// //  можно через ключ получить значение
// for (let key in array) {
//   console.log(key+ " " + array[key]);
// }


// let array = [1, 2, 3, 4, 5]

// delete array[2]

// console.log(array);

// let obj = {
//   name: 'Alex',
//   age: 23,
//   isStudent: false
// }

// console.log(obj);
// //  в объекте он удаляет и индекс и элемент
// delete obj.age
// console.log(obj);


// ПСЕВдоМАССИВЫ
// const func = function(a) {
//   console.log(arguments);
//   console.log(a+b+c);
// }

// func(3,6,9)

// ПЕРЕБОР МАССИВОВ

// const books = [
//   {id: 0, name: "русская дорога", author: "Виталий грищук", price: 7300},
//   {id: 1, name: "морохз и солнце", author: "Масксим воронец", price: 3300},
//   {id: 2, name: "летний проьбег", author: "Олень Иванович", price: 15300},
//   {id: 3, name: "русская дорога", author: "Леонтий Котктебелевич", price: 31300},
//   {id: 4, name: "русская дорога", author: "Иван  Суворов", price: 16060}
// ]

// добавление и удалние элментов
// CONCAT

// const newArr = books.concat(  {id: 5, name: "Дрожь врагов", author: "Дмитрий  Суворов", price: 1600})
// console.log(newArr);

// arr.slice([start],[end])

// const newArr = books.slice(0,3)

// console.log(newArr);
// arr.splice(index, deleteConcat,elements)
// books.splice(2, 3, {id: 5, name: "Дрожь врагов", author: "Дмитрий  Суворов", price: 1600})
// console.log(books);


// const books = [
//   {id: 0, name: "русская дорога", author: "Виталий грищук", price: 7300},
//   {id: 1, name: "морохз и солнце", author: "Масксим воронец", price: 3300},
//   {id: 2, name: "летний пробег", author: "Олень Иванович", price: 15300},
//   {id: 3, name: "русская дорога", author: "Леонтий Котктебелевич", price: 31300},
//   {id: 4, name: "русская дорога", author: "Иван  Суворов", price: 16060}
// ]

// поиск элментов в массиве

// const result = books.find(function(item,index,array){
//   return item.name === "летний пробег"
// })
// const result = books.find(function(item,index,array){
//   return item.id === 3
// })
// findIndex вернёт индес найденнго элемента
// const result = books.findIndex(function(item,index,array){
//   return item.id === 3
// })

// books.splice(result,1)

// console.log(books);


// const books = [
//   {id: 0, name: "русская дорога", author: "Виталий грищук", price: 7300},
//   {id: 1, name: "морохз и солнце", author: "Масксим воронец", price: 3300},
//   {id: 2, name: "летний пробег", author: "Олень Иванович", price: 15300},
//   {id: 3, name: "русская дорога", author: "Леонтий Котктебелевич", price: 31300},
//   {id: 4, name: "русская дорога", author: "Иван Суворов", price: 16060},
//   {id: 5, name: "морская дорога", author: "Иван Суворов", price: 16060}
// ]

// Перебор массива удобные методы
// forEach просто перебирает и в полне может изменть масссив
// map создает новый массив и возвращает item
// books.forEach(function(item){
//   item.price = item.price + ' руб'
// })

// const newArr = books.map(function(item){
//   item.price = item.price + "руб"
//   return item
// })

// console.log(newArr);
// const newArr = books.map(function(item){
//   const newObj = {
//     id: item.id,
//     name: item.name
//   }
//   return newObj
// })

// console.log(newArr);

// метод filter
// ФИЛЬТР ЭЛЕМЕНТОВ
// провреяет на соттветсвие массивов
// const newArr = books.filter(function(item){
//   return item.author === "Иван Суворов"
// })

// console.log(newArr);

const books = [
  {id: 0, name: "русская дорога", author: "Виталий грищук", price: 7300},
  {id: 1, name: "морохз и солнце", author: "Масксим воронец", price: 3300},
  {id: 2, name: "летний пробег", author: "Олень Иванович", price: 15300},
  {id: 3, name: "русская дорога", author: "Леонтий Котктебелевич", price: 31300},
  {id: 4, name: "русская дорога", author: "Иван Суворов", price: 16060},
  {id: 5, name: "морская дорога", author: "Иван Суворов", price: 16060}
]

// const result = books.reduce(function(sum, item){
//   return sum + item.price
// }, 0)
const result = books.reduceRight(function(sum, item){
  return sum + item.price
}, 0)

console.log(result);