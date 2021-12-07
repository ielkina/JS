/* Классификация типов данных в JS*/
"use strict";
/*I. Простые типы данных 
Числа 
Строки 'String', 'name'
Логический тип (boolean) true/false
null - когда чего-то не существует
undefined -когда что-то существует но значения никакого нет
Symbol 
BigInt - большие числа

II. Объекты 
1. Спец. объекты
Массивы []
Функции function
Объект даты
Регулярные выражения
Ошибки
2. Обычные объекты */

let number = 4; /*числовой тип данных*/
let NUmber = 4.45; /*числовой дробный тип данных*/
console.log(4 / 0); //infinity(числовой тип данных, примитивные) бесконечность
console.log(-4 / 0);
/*-infinity(отрицательный числовой тип данных,
примитивные) отрицательная бесконечность*/

console.log('string' * 9); /* NaN Not A Number*/

const person = "Alex";
/* В строчных типах данных обязательно должны присутствовать кавычки.
Не имеет значение и двойные и одинарные (косая `) будут считаться 
правильными. Главное не комбинировать их. В строке могут содержаться 
как числовое значение так и буевы, обернутые в кавычки. */

const bool = true; /*boolean тип данных*/

console.log(something); //null обращение к несуществующей переменной

let und;
console.log(und);
/*undefined обращение к переменной которая существует 
но у нее нет никакого значения */

const obj = { /*объект (в примере человек)*/
    name: 'John',
    /*свойства объекта и действия (методы)(имя объекта)*/
    age: 25,
    /*свойства объекта и действия (методы)(возраст объекта)*/
    isMarried: false,
    /*свойства объекта и действия (методы)(статус объекта)*/
};
console.log(obj.name); /*обращение к объекту.к имени объекта*/
console.log(obj['name']);
/*два варианта вывода в консоль. предпочтительный первый*/

/*Массивы в JS отсчет начинается с 0  
            0        1        2        3  4   5  */
let arr = ['1.png', '2.jpg', '3.bmp', {}, 6, []];
/* Массив не является отдельным типом данных
Массив это частный случай объекта, которые идут строго по порядку.
Каждый элемент массива имеет свой порядковый номер и начинается он 
с 0. В массив можно добавить различные типы фаилов и данных
(картинки, тексты, числа, массивы, объекты)*/

console.log(arr[2]); /*консоль выведет 3.bmp*/