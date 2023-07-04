// Action creators
export const inc = () => ({type: 'INC'});
export const dec = () => ({type: 'DEC'});
export const rnd = (value) => ({type: 'RND', payload: Math.floor(Math.random() * 10)}); // Внутри actions не всегда удается соблюсти чистую функцию. Поэтому можем поставить сюда случайное значение