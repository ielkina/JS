/*Методы и свойства строк и чисел*/
"use strict";
/* Методы - это вспомогательные функции.
А свойства - это вспомогательные значения.*/
const str = "test";
console.log(str.length); //консоль 4  - количество букв в строке 
console.log(str[2]); //s - 3 символ в строке
/*console.log(str[2]='d'); - в током исполнении изменить символы
в строке мы не можем. Для этого есть другие методы.
console.log(str); //консоль d test */
const arr = [1, 2, 3];
console.log(arr.length); // консоль 3 - количество элементов в массиве
/* Документация синтаксиса методов 
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String
В браузере console.dir(Number);
Методы изменения регистра */
console.log(str.toUpperCase());
/* при запуске консоли получим значение TEST.
str.toUpperCase обозначает новое значение так как изначально в переменной слово 
test маленькими буквами а с toUpperCase большими */
console.log(str.toLowerCase());
/* Если в набранном коде есть какие то буквы 
большие то этот метод меняет все буквы на маленькие(нижний регистр). метод 
превращает строку в нижний регистр */
let fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));
/* консоль - 5 (с 5й позиции начинается слово fruit). Метод - Поиск подстроки.
Может принимать какой то аргумент */
console.log(fruit.indexOf('q'));
/* консоль - -1(такая буква или кусок строки
не был найден в значениях).  */
const loge = "Hello World";
console.log(loge.slice(6, 11));
/* консоль - World. Если указать (6, 10) 
консоль - worl. Вырезается необходимый участок данных. 
Первый аргумент начало строки второй конец не включая(6-W, 11-").
Так же можно указать только первый аргумент - это означаете с какого 
элемента начнется вырезаться строка и до конца. 
Так же этот  этот метод может принимать и отрицательные значения и тогда
они будут начинаться с конца строки.
(-5, -1) - консоль worl (-5 -" ", -1 - l)*/
console.log(loge.substring(6, 11));
/*Консоль - World.  Метод похож на slice, 
разница в том что здесь можно задавать первый аргумент больше чем второй и он 
не поддерживает отрицательные значения (-6 - консоль 0).*/
console.log(loge.substr(6, 5));
/* консоль - World. Отличием в том что вместо 
второго аргумента мы указываем количество символов
которых нам необходимо вырезать

Для работы с числами существует отдельная мини библиотека 
которая существует уже в браузере Math. Увидеть ее можно в консоли
браузера набрав слов Math. (С большой буквы обязательно)*/

const num = 12.2;
console.log(Math.round(num));
/* консоль 12. Математический метод округления
числа.*/

const test = "12.2px";
console.log(parseInt(test));
/*Консоль  12 ((минус .2px) числовой тип данных). Метод который
вызывается на числах и переводит число в другую систему исчисления.*/
console.log(parseFloat(test));
/* консоль 12,2. Переводит данные 
в другую систему исчисления но при этом возвращает с плавающей точкой
(дробные значения).
Это были самые частые методы.*/