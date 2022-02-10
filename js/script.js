// const title = document.getElementById('title')

// title.textContent =  "DOM!"

// console.dir(title.style.backgroundColor = "green");
// данные методы возвращают элементы, в  массив
// const listItem = document.getElementsByTagName('header')
// const links = document.getElementsByClassName('links')

// console.log(listItem);

// const title1 =  document.querySelector('h1')
// const title2 =  document.querySelector('.title')
// // образение по атрибутуу
// const title3 =  document.querySelector('[title="Document Object Model"]')
// const title4 = document.querySelector('.link')
// const links = document.querySelectorAll('.link')

// console.log(title1);
// console.log(title2);
// console.log(title3);
// console.log(title4);
// links.forEach(function(item){
//    console.log(item);
// });


// const title =  document.getElementById('title')
// // образение по атрибутуу

// const listItem = document.getElementsByTagName('li')
// const links = document.getElementsByClassName('link')


// const list = document.querySelector('header > ul')
// const listItems2 = list.querySelectorAll('li')

// console.log(listItems2);


// const title =  document.getElementById('title')
// // добавлчем класс green-color'
// title.classList.add('green-color')
// // удаляем классс
// title.classList.remove('title')
// // метод toggle включать выключатель
// title.classList.toggle('title')

// // метод contains возвращет либо true либо false
// console.log(title.classList.contains('title'));


// console.log(title);


// const title =  document.getElementById('title')
// // получаем значение атрибута
// console.log(title.getAttribute('title'));
// // переопредение атрибута id class
// title.setAttribute('title', 'new value title');
// console.log(title.getAttribute('title'));
// // проверяет есть ли атрибут или нет hasAttribute
// console.log(title.hasAttribute('title'));

// console.dir(title);


const title =  document.getElementById('title')

title.style.backgroundColor = 'red'
// передаемм в getComputedStyle элемент в котором хотим увидить стили
// мы можем прочитать свойство
// console.dir(getComputedStyle(title));
console.dir(getComputedStyle(title).backgroundColor);
console.dir(getComputedStyle(title).fontSize);

console.dir(title);
