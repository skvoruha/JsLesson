// ООП JS
// ООП это методика организации программы
// главная мысль его это структурирование кода
// протоип это скрытаяя ссылка объекта
'use strict'

// let arr = [1,2,3,4,5]

// console.log(arr);
// // метод join htplktnb наши элменты на запятые с проблом как ниже
// console.log(arr.join(', '));
// // toString это прототип метода [[Prototype]]: Array(0) ---> [[Prototype]]: Object -->toString
// // он выведет протсо в строку значение массива
// console.log(arr.toString());
// // обращение к прототипу
// // в консоль выйдет прототип нашего массива
// console.log(arr.__proto__);
// // выведем протоип контурктора массива в коносль
// console.log(Array.prototype);
// // сравние данных прототипов
// console.log(arr.__proto__ == Array.prototype);


// НАПИШЕМ ОБЪЕКТ ОБСТРАКЦИЮ ОБЪЕКТА ЧЕЛОВЕКА
// const man = {
//     hands:2,
//     lags:2,
//     eyes:2,
//     walk: function(){
//         console.log('Я хожу');
//     },
//     talk: function(){
//         console.log('Я говорю');
//     }
// }
// // создаим новый объект на основе объекта man
// const newMan = Object.create(man)
// // создадим еще один объект
// const newWoman = Object.create(man)
// // даный объект облдает всеми методоами и переменный которые были в том объекте
// // newMan.walk()
// // newMan.talk()

// // Добавим новые переменный в объект
// newMan.name = 'Ivan'
// newMan.age = 23


// // Добавим новые переменный в объект
// newWoman.name = 'Sasha'
// newWoman.age = 17


// console.log(newMan);
// console.log(newWoman);



// // ПРИМЕР С ДОЛЖНОСТЯМИ
// const worker = {
//     worplace: 1,
//     dinner: 1,
//     goToWork:function(){
//         console.log('Иду на работу');
//     },
//     leaveToWork:function(){
//         console.log('Ухлжу с работы');
//     },
//     work:function(){
//         console.log('работаю');
//     },
//     // Метод скажи е првиет но ткже использует this.name);
//     sayHellow: function () {
//         console.log("Привет/ Меня зовут " + this.name);
//     }
// }

// const frontEndDev = Object.create(worker)
// const backEndDev = Object.create(worker)
// //  у всего подраздение фронтенд м ы увеличи число обедов  dinner до 2
// frontEndDev.dinner = 2

// frontEndDev.role = "Front End Developer"
// backEndDev.role = "Back End Developer"
// // преопределяем метод которй уже был в базовом протоипе
// frontEndDev.work = function () {
//     console.log(' Пишу качественый фронтенд, пью чай');
//   }
// backEndDev.work = function () {
//     console.log(' Муюабс с бд дайте выходной');
// }


// frontEndDev.work()
// backEndDev.work()

// console.log(frontEndDev);
// console.log(backEndDev);

// const developer1 = Object.create(frontEndDev)
// const developer2 = Object.create(frontEndDev)
// const developer3 = Object.create(backEndDev)
// const developer4 = Object.create(backEndDev)

// developer1.name = 'alex'
// developer2.name = 'oleg'
// developer3.name = 'misha'
// developer4.name = 'artem'

// developer1.sayHellow()
// developer2.sayHellow()
// developer3.sayHellow()
// developer4.sayHellow()

// // console.log(developer1.dinner);
// // console.log(developer2.dinner);
// // console.log(developer3.dinner);
// // console.log(developer4.dinner);

// // Методы для объектов
// // hasOwnProperty
// // в данный метод мы предеаим название свойства котрй мы ъотимпроверить
// //  возрващет булевое значние
// //  hasOwnProperty игнорирует прототип
// console.log(developer1.hasOwnProperty('name'));
// // чтобы достать протоип нужно нужно обрактиться,  к нему
// console.log(developer1.__proto__.hasOwnProperty('role'));
// // чтобы получить протоип еще глубдже нужно еще раз вести __proto__
// console.log(developer1.__proto__.__proto__.hasOwnProperty('worplace'));

// // проверяет является ли прототипои frontEndDev для объекта (developer3)
// console.log(frontEndDev.isPrototypeOf(developer3));



// ФУНКЦИЯ КОНСТРУКТОР -- этто абсолютно любая функция которая используетя оператр new
//  va один раз опишем её, на её основе склко захотим стольок и вызовем раз
// const Person = function (name) {
//     // контект вызова
//     this.name = name
//     // на самом деле возвращется здесь так
//     // return this
//     // скрытая переменная
//     const age = 33
//     // метод можно положить внутрь объекта и он не будте леать в пртотипе
//     this.sayHellow = function(){
//         console.log('Привет меня зовут ' + this.name);
//         console.log('Мне  ' + age + ' года');
//  }
// }
// // Онас всегда вызывается с помощью new,
// // сначла создается пустой объект
// // Моно создать метод в протоипе
// // мы эокномим память при таком спобое
// // Person.prototype.sayHellow = function(){
// //     console.log('Привет меня зовут ' + this.name);
// // }

//  const person0 = new Person
//  const person1 = new Person('Vlad')
//  const person2 = new Person('Alex')
//  const person3 =new Person('Ivan')

//  const person4 = {
//     name:'Annd'
//  }

//  console.log(person0);
//  console.log(person1);
//  console.log(person2);
//  console.log(person3);
//  console.log(person4);

//  person1.sayHellow()

// //  мы можем обратиться к переменой в не объекта но получим undefined
// console.log(person1.age);




const Person = function (name) {
     this.name = name
}

Person.prototype.sayHellow = function(){
    console.log('Привет меня зовут ' + this.name);
}


// ЦЕПОЧКА НАСЛЕДОВАНИЯ
const Student = function (name,role){
    Person.call(this,name)
    this.role = role
}
//  СВЯЗКА СУЩНОСТЕЙ
// связвываем прототип студента Student с прототипом персонаPerson
Student.prototype = Object.create(Person.prototype)
// создадим констурктор для Student
Student.prototype.constructor = Student

const newStudent = new Student('Vald', 'student')

console.log(newStudent);