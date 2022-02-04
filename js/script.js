'use strict'
// // рекурския
// const potato = 10

// const peelPotato = function (potatoIndex) {
//   if (potatoIndex > 0){
//     console.log('Картошка №' + potatoIndex + ' почищена');
//     potatoIndex--
//     peelPotato(potatoIndex)
//   }
// }

// peelPotato(potato)
let potato = 10

// for (let i = 10; i > 0; i--){
//     console.log('Картошка №' + i + ' почищена');
// }

// for (let i = 1; i < 11; i++){
//     console.log('Картошка №' + i + ' почищена');
// }

// while (potato > 0) {
//   console.log('Картошка №' + potato + ' почищена');
//   potato--
// }

// do {
//   console.log('Картошка №' + potato + ' почищена');
//   potato--
// }
// while (false)


// for (let i = 10; i > 0; i--){
//   if(i === 5) continue
//     console.log('Картошка №' + i + ' почищена');
// }


// for (let i = 10; i > 0; i--){
//   if(i === 5) break
//     console.log('Картошка №' + i + ' почищена');
// }


for (let i = 1; i < 11; i++){
  if(i !== 5)  console.log('Картошка №' + i + ' почищена');
}