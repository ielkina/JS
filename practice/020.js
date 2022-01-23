'use strict';
const options = { //шкаф с вещами
    name: 'test',
    with: 1024,
    height: 1024,
    colors: { //коробки с вещами в шкафу
        border: 'black',
        bg: 'red'
    }
};
// console.log(option.name);
// delete options.name;
// console.log(option);



for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойства ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойства ${key} имеет значение ${options[key]}`);
    }
}