// const lists = document.querySelectorAll('.list')
// const elems = document.querySelectorAll('.elem')


// console.log(lists);
// console.log(elems);

// elems[2].remove()
// elems[4].remove()

// // сохраняет элемент в конце списка
// lists[1].append(elems[2])
// lists[1].append(elems[4])
// lists[1].append(elems[3])
// // сохраняет элемент в начале списка
// lists[1].prepend(elems[5])

// // переставть перед первым списком список номер два
// lists[0].before(lists[1])

// elems[3].before(elems[0])
// // ставит после елемента заданный элемент
// elems[3].after(elems[0])

// // заменяет один элемент другим
// elems[4].replaceWith("привет номер 4")
// // В ЛЮБЫЕ МЕТОДЫ М  МОЖЕМ ПЕРЕДАТЬ СТРОКУ
// // клонирвование 'элементов'
// // в константе лежит не копич элемена 3 а ссылка на него на странице
// const cloneElem = elems[3]
// // чтобы поулчать не сслку а сам элемент ? чтобы поулчить все элементы нужно передать занчение true
// const cloneElemTwo = elems[3].cloneNode(true)

// console.log(cloneElem);
// console.log(cloneElemTwo);
// //  добавляем касс элементу
// cloneElemTwo.classList.add("greeen-color")
// // изменяем контетнт элемента
// // textContent менят менно текст контетнта а innerHTML заменяет теги если есть в конететнте
// cloneElemTwo.innerHTML = "<strong> stepp 66 </strong> "
// lists[1].append(cloneElemTwo)

// const lists = document.querySelectorAll('.list')
// const elems = document.querySelectorAll('.elem')

// console.log(lists);
// console.log(elems);

// // Создали новый элемент
// const newElem = document.createElement('li')
// newElem.textContent = 'new step 9'
// newElem.classList.add('elem')

// lists[0].append(newElem)

// console.log(newElem);

const lists = document.querySelectorAll('.list')
const elems = document.querySelectorAll('.elem')
const title = document.getElementById('title')

// // даанный метод получает 1ым аргументом одну настройку а 2ым текст
// title.insertAdjacentText('beforebegin','beforebegin')
// title.insertAdjacentText('afterend','afterend')
// // вставляет текст после заголовка title

// // beforeend вставляет справа, контент после основного текста контетнт
// title.insertAdjacentText('beforeend',' beforeend')
// // afterbegin вставляет слева, контент после основного текста контетнт
// title.insertAdjacentText('afterbegin','afterbegin ')

//  тут мы передали элемент
// title.insertAdjacentElement('beforebegin', elems[0])
// title.insertAdjacentElement('afterend', elems[1])
// title.insertAdjacentElement('beforeend', elems[2])
// title.insertAdjacentElement('afterbegin', elems[3])

//  тут предаём куски вёрстки в
// title.insertAdjacentHTML('beforebegin', '<span>step 0 </step>')
// title.insertAdjacentHTML('afterend', '<span>step 1 </step>')
// title.insertAdjacentHTML('beforeend', '<span>step 2 </step>')
// title.insertAdjacentHTML('afterbegin', '<span>step 3 </step>')

// СТАРЫЕ МЕТОДЫ
// lists.append(elems[4], elems[2],elems[3])
// // appendChild ПРИНИМАЕТ ТОЬКО ОДИН ЭЛЕМЕНТ И ТЕМ ОН ХУЖЕ append
// //  мы не можем передатьпросту строку в append можно и он вывведет а  appendChild нет
// // н возвращет тот элемент который он и обработал
lists[1].appendChild(elems[5])

// в ё ый аргумент передаёт тот элемент которйы мбудем перемещать а второй который мы вставим первый аргумент
lists[1].insertBefore(elems[5] ,elems[1])  // before удобнее

lists[1].replaceChild(elems[5]) // remove

lists[1].removeChild(elems[5])  // remove

console.log(title);