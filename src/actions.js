// This method named "action creater"
// const inc = () => {
//     return {
//         type: 'INC'
//     }
// }

// const inc = () => ({type: 'INC'}); // This code is same with code on top
// const dec = () => ({type: 'DEC'});
// const rnd = (value) => ({type: 'RND', payload: value}); // action have obligatory (required) property  - type, additional property - usually  named "payload" with some value

// Action creators
export const inc = () => ({type: 'INC'});
export const dec = () => ({type: 'DEC'});
export const rnd = (value) => ({type: 'RND', payload: Math.floor(Math.random() * 10)}); // Внутри actions не всегда удается соблюсти чистую функцию. Поэтому можем поставить сюда случайное значение