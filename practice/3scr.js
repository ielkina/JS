alert('Я люблю JavaScript');

// alert(1)//Выведет модальное сообщение с текстом "1"
// [0, 3].push() //ошибка не хватает точки с запятой
/*Консоль в браузере
Вкладка элементы - видны все элементы сайта примененные к ним стили и т.д.
Консоль - ошибки, предупреждения и сообщение от разработчиков и т.д
подсказывает где ошибка в каком файле, строчке и описание.
Источники - все доступные к нашему сайту материалы, приложения.
Сеть = отслеживание каких либо запросов
Производительность
Память и т.д.

В JS есть 2 вида комментариев

//однострочный
и
/*много
строчный*/
// console.log(second);//Cannot access 'second' before initialization другими словами переменной еще не сущ
// console.log(leftBorderWidth);//undefined переменная созданная но пока не имеет никакого значения
// var leftBorderWidth = 1;
// let second = 2;
// const pi = 3.14;
// console.log(leftBorderWidth);//1
// console.log(second);//2
// //////////////////////
// {
// 	let second = 2;
// }
// console.log(second);//second is not defined не видит переменную 

/*объявление переменной 
Если в коде объявлена переменная var то она уже существует до выполнения скрипта и она 
видна везде. 
Переменная let создается только тогда когда код до нее доходит.
Такое понятие называется - Хойстинг(всплытие переменных).
Такое поведение помогает избежать многих ошибок и код ускоряется так как не храниться в памяти а 
всплывает когда это необходимо. let видна только в блоке кода ограниченного фигурными скобками.
const создает переменную которую нельзя поменять.
