/*Простое общение с пользователем*/
"use strict";
alert('Hello'); /* простое модальное окно встроенное в браузер */

const result = confirm('Are You Here?');
/*модальное окно с вариантами ответа
и результат сохраняется в переменную*/
console.log(result); /*true при ОК false при ОТМЕНА*/

const answer0 = prompt('Вам Есть 18?', "18");
/*модальное окно с вводом данных от пользователя*/
console.log(typeof(answer0));
/*typeof определяет тип данных при вводе информации.
Вся информация от пользователя приходит в виде string в не зависимости 
какие символы были введены*/

const answer1 = +prompt('Вам Есть 18?', "18");
/*prompt строчный тип данных (string) - можно преобразовать с помощью +
+prompt числовой тип данных*/
console.log(answer1 + 5);
/*+ 5 добавляем число 5 в консоли к введенным данным.
при числовом значении данных + 5 будет прибавляться(10 + 5 = 15)
при строчных типах данных будет добавляться(10 + 5 = 105)*/

const answers = []; /*опрос пользователя с занесением данных в массив*/
answers[0] = prompt('Как Ваше имя?', '');
/*'' параметр по умолчанию как пустая строка */
answers[1] = prompt('Как Ваша фамилия?', '');
answers[2] = prompt('Сколько Вам лет?', '');
answers[3] = prompt('Где Вы живете?', '');
/*document.write(answers); /* тестовая команда устаревшая команда

prompt, alert, confirm эти команды блокируют построение HTML документа 
до того как они будут выполнены */

console.log(typeof(answers));
/* определение на тип данных.
Object - так как массив является частым случаем объекта.*/

console.log(typeof(null));
/*ошибка.

Команда prompt работает только внутри браузера. При запуске в консоли 
будет выдавать ошибку так как нет модального окна.

ЗАДАЧА

Создайте страницу, которая спрашивает имя у пользователя и выводит его.
HTML документ
<!DOCTYPE html>
<html>
<body>

  <script>
    'use strict';

    let name = prompt("Ваше имя?", "");
    alert(name);
  </script>

</body>
</html>

Скрипт*/

let name1 = prompt("Ваше имя?", "");
alert(name1);