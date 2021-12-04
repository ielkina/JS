/* условия  "если"*/
"use strict";
// if (4 == 9) {
//     console.log('Ok!');
// } else {
// console.log('Error');
// }

// const num = 50;
// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok!');
// }

// (num == 50) ? console.log('Ok!'):console.log('Error');
/* тернарный оператор потому что в его работе участвуют 
3 аргумента*/
/*Switch конструкция для упрощения ветвлений if else*/

const num = 50; /*числовое значение*/
switch (num) {
    /*конструкция Switch всегда идет на строгое сравнение или/и 
       соответствие*/
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('Верно!');
        break;
    default:
        console.log('Не в этот раз');
        break;

}
const num1 = '50'; /*строки*/
switch (num1) {
    /*конструкция Switch всегда идет на строгое сравнение или/и 
       соответствие*/
    case '49':
        console.log('Неверно');
        break;
    case '100':
        console.log('Неверно');
        break;
    case '50':
        console.log('Верно!');
        break;
    default:
        console.log('Не в этот раз');
        break;

}