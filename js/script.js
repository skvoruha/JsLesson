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
// const foo = (name,age = 20) => {
//     // console.log('Привет, меня зовут ' + name + '!\n'
//     // + 'Мне ' + age + ' года!');

//     // поставим обрантые скробки ``
//     // чтобы поставить переменнюу
//     // СОВЕРМЕННЫЙ СТАНДАРТ ВЫВОДА
//     console.log(`Привет, меня зовут ${name} ! Мне  ${age + 3 } года!`);
// }
// foo('Alex')




// // CLASSES
// const Person1 = function(name,age){
//     this.name = name
//     this.age = age
// }

// Person1.prototype.sayHello = function(){
//     console.log(`Приве! Меня зовутт ${this.name}`);
// }

// // на основе данного функции конструтора мы создаём новый объект

// const person1 = new Person1('Vlad', 23)
// person1.sayHello()
// console.log(person1);


// class Person dscneftn конструтором нашего новго объекта
// разница в том что в классе мы можем записать метод и потом
// и он будет в протоипе а не в объеекте
// class Person {
//     constructor(name,age){
//         this.name = name
//         this.age = age
//         Person.incrementCount()
//     }
//     // будет считать количетсво созданный объектов на основе класса  Person
//     // перменная созданная внутри класа статическая, то есть она доступна общему классу
//     // но экземплярам класа она не достуна
//     //  то есть console.log(person.count); получим undefined
//     //  то есть console.log(Person.count); получим 0
//     static count = 0
//     // статический метод
//     //данный метод позволит нам получить статический  count
//     static getCount(){
//         return Person.count
//     }
//     // и при каждой иницилизации конструктора вызывать наш метод для подсчёта
//     static incrementCount(){
//         Person.count++
//     }

//     sayHello() {
//         console.log(`Приве! Меня зовутт ${this.name}`);
//     }
// }
// const person = new Person('Vlad', 24)

// // проерим вес нашего person
// // превращем наш объект в строчку и проверяем количество символов
// // если убрать статисеские мтодоты то количество символ не измениться
// console.log(JSON.stringify(person).length);
// person.sayHello()

// console.log(person);
// console.log(Person.count);


// // ТЕМА НАСЛЕДОВАНИЕ КЛАССОВ
// class Person {
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }

//     sayHello() {
//         console.log(`Приве! Меня зовутт ${this.name}`);
//     }
// }
// // пишу название класса методо extends унаследовать от  Person
// class FrontEndDev extends Person{
//     // в данный констурктор мы передадим одно значение и дадим ему пол умолчанию массив
//     // и мы получим ошибку если выведем так :
//     // constructor(skills = []){
//     //     this.skills = skills
//     // }
//     // Чтобы ошибки не было нужно нужно передать аргументы унаследованного объекта(класса)
//     constructor(name,age, skills = []){
//         // метод super
//         // связывабщее звено между наследником
//         // через данный метод мы можем обращться к методоам родительскго класса
//         super(name,age)
//         this.skills = skills
//     }
//     // метод тест который вызовет супер который вызовет  sayHello из родительского класса
//     test(){
//         super.sayHello()
//     }
// }

// const dev = new FrontEndDev('Vlad',23)

// console.log(dev);
// dev.sayHello()
// dev.test()





// class Person {
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }

//     sayHello() {
//         console.log(`Приве! Меня зовутт ${this.name}`);
//     }
// }

// class FrontEndDev extends Person{
//     constructor(name,age, skills = []){ super(name,age)
//         // нижнее подчёркивание для работы с get а такеъже для того что нельзя его ментья
//         this._skills = skills
//     }
//     // с таким кодом будет ошибка get работает только со свойствами у котороых есть нижнее подчёркивание
//     get skills(){
//         return this._skills
//     }
//     // данный метод будет получать опреденную строчку
//     // set записывает данные который ему преедали
//     set skills(str){
//         console.log(str);
//         // для того чтобы заисать в масив push
//         this.skills.push(str)
//     }
// }

// const dev = new FrontEndDev('Vlad',23)
// dev.skills = 'Первое свойство'
// dev.skills = 'Второе свойство'
// dev.skills = 'Третье свойство'

// console.log(dev);
// console.log(dev._skills);



// Деструктуризация

// const user = {
//     name:'Alex',
//     age:33,
//     isAuth: false,
//     projects:{
//         firstProject:'firstProject',
//         secondProject:'secondProject'
//     }
// }
// // // раньеit мы создавал переменую чтобы обратиться к нужному объекту
// // // в обоих случаем получим ожин и тот же резулттат
// // const name = user.name
// // const age = user.age
// // const isAuth = user.isAuth


// // ВЫПОЛНИМ ТОТ ЖЕ КОД ЧТО ВЫШЕ ТОЛЬКО ЧЕРЕЗ ДЕСТРКТИРИЗАЦИЮ
// // const {name,age,isAuth} = user;
// // ЧТОБЫ ИЗМЕНИТЬ переменную МОЖНО ДОБАВИТЬ ДВОЕТОЧНИЕ
// //
// // const {name: nameUser,age,isAuth} = user;

// // получаем объект в виде массива
// // const {name: nameUser,age,isAuth,projects} = user;
// // тобы полкчить вложннный элемент в объекте

// // в итоге мы имеем доступ к объекту и каждому вложенному свойтсву
// const {name: nameUser,age,isAuth,projects,projects:{firstProject,secondProject}} = user;

// console.log(projects);
// console.log(firstProject);
// console.log(secondProject);

// Деструктуризация МАССИВОВ

// const names = ['Artem','Vlad', 'Alex', 'Maks']
// // Деструктуризация создание переменных сразу и бе испольование индексов
// const [art,vlad,alex,maks] = names

// console.log(art);
// console.log(vlad);
// console.log(alex);
// console.log(maks);



// const names = ['Artem','Vlad', 'Alex', ['Maks','Kozlov']]
// // Деструктуризация создание переменных сразу и бе испольование индексов
// // получаем сами занчение со ложенного массива
// const [art,vlad,alex,[maks, kozlov]] = names

// console.log(art);
// console.log(vlad);
// console.log(alex);
// console.log(maks);
// console.log(kozlov);



// // ГДЕ бдуем применяять дитркутризаци
// const logger = (first,second,third)=>{
//     console.log(`${first} ${second} ${third}`);
// }

// // logger('l', 'o', 'g')

// // чтобы не создавать три разные переменну=ые
// const logger = ({first,second,third})=>{
//     console.log(second);
// }
// // передаём параменты как в функции подписывая их
// // спосбо предачи объекта
// logger({first:'I', second:'o',third:'g'})


// Операторы Rest и Spread

// ПРИМЕР как не работет
// const sum = (a,b,c) =>{
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// // мы передаем 6 аргументов но функция принимает только 3
// sum(1,2,3,4,5,6)


// const sum = (a,b,c, ...params) =>{
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     // мы получим массив которые не перечиеслены в остаточно параметре
//     console.log(params);
// }
// // мы передаем 6 аргументов но функция принимает только 3
// sum(1,2,3,4,5,6)



// // ...params ЗАБИРАЕТ ВСЕ ОСТАТОНЕ ПАРАМЕТЫ
// const sum = (...params) =>{
//     // мы получим массив которые не перечиеслены в остаточно параметре
//     // получим сумму всех чисел
//     return params.reduce((sum,num) => sum +num)
// }
// // мы передаем 6 аргументов но функция принимает только 3
// // не важно сколько передали аргументов наша функция их сложит
// console.log(sum(6,42,63,94,25,563));


const firstAr = [1,2,3,4]
const secondAr = [5,6,7,8]
// собираем новый массив из этих двух
// spred оператор и он собёрет два массива в один
// также можно дописать дорполнительные элементы
console.log([55,66,77,...firstAr, ...secondAr]);