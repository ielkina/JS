/*14 урок циклы*/
'use strict';
// let num = 50;   /*первый синтаксис*/
// while (num <= 55) {
//     console.log(num);
//     num++;
// }
// do {  /* второй синтаксис While */ 
//     console.log(num);
//     num++;
// }
// while (num <=55);
/* третий синтаксис For */
let num = 50;
for (let index = 1; index < 10; index++) {
    if (index === 6) {
        // break; /* оператор break прерывает на 6*/
        continue;
        /* оператор continue пропускает 6 и 
               продолжает выполнять операцию*/
    }
    console.log(index);

}