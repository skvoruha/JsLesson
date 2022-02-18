// cookie практика
// общаемся к объеккту localStorage
// можно так и так
// localStorage['name'] = 'Alex'
// localStorage.name = 'Alex'

// console.log(localStorage.name);

// // передаём два аргумента одно из них название ключа а второй само значние
// localStorage.setItem('name','Grisha')

// // getItem передаёт только один аргумент
// console.log(localStorage.getItem('name'));
// // удаяем данный ключ
// // localStorage.removeItem('name')

// // данный метод чистит все свойства объёета localStorage
// localStorage.clear()


// console.log(localStorage.getItem('name'));

// const input = document.getElementById('input')
// const btnSave = document.getElementById('btn_save')
// const btnRemove = document.getElementById('btn_remove')
// const text = document.getElementById('text')

// // напише функцию которая будт менять текст параграфа
// const showText = function(){
//   // передаём в парагрф из  localStorage зачние
//   text.textContent = localStorage.getItem('text')
// }

// btnSave.addEventListener('click', function(){
//   // Записывваем по ключу text , занчение с инпута в localStorage
//   localStorage.setItem('text',input.value)
// })
// showText()


// const input = document.getElementById('input')
// const btnSave = document.getElementById('btn_save')
// const btnRemove = document.getElementById('btn_remove')
// const text = document.getElementById('text')

// // напише функцию которая будт менять текст параграфа
// const showText = function(){
//   // передаём в парагрф из  localStorage зачние
//   text.textContent = sessionStorage.getItem('text')
// }

// btnSave.addEventListener('click', function(){
//   // Записывваем по ключу text , занчение с инпута в localStorage
//   sessionStorage.setItem('text',input.value)
//   // dspjdtv функцию чтобы текст обноваляся после его обновления
//   showText()
// })

// btnRemove.addEventListener('click',function(){
//   // Очищаем полность при нажати кнопки sessionStorage  localStorage
//   localStorage.clear()
//   sessionStorage.clear()
//   showText()
//   console.log('rrr');
// })

// showText()
// localStorage 10МБ очень часто приходстя сохранять информаию , лучше всего для корзины
// localStorage сохраняет пока ен удалим эти данные пка их не очистим
// sessionStorage 5МБ хранит пока не закрыли вкладку

// console.log(input);
// console.log(btnSave);
// console.log(btnRemove);
// console.log(text);

// cookie
// в куки так созранятеся информция
// Вторым параеметом max-age=3600 указывается время жихни куки в сек
// document.cookie = 'name=Alex; max-age=3600'


// просто создаём дату
// let date = new Date()

// // кастоманая дата
// // мы передпл свою. дату  месяа начинаются с 0 поэьому март
// let date = new Date(2045,02,22,13,20,0)

// // console.log(date);
// // чтобы перевести дату в нормальный формат без учета
// // GMT +3 Московсок время нужно
// // toUTCString убирает +3 часа на часовой пояс
// console.log(date.toUTCString());

// // expires принимает вот такое значение кукуа будет существовать до
// document.cookie = 'name=Alex; expires='+ date.toUTCString()

// // чтобы сохрнаить оьъект в куки
// // вмеситтмоть куки 4 кб
// const user = {
//   name: 'Alex',
//   city: 'Minsk'
// }
// // stringify переводт объект в строку
// document.cookie = 'user=' + JSON.stringify(user)