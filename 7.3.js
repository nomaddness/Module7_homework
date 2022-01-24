//Task 3
// Написать функцию, которая создает пустой объект, но без прототипа.

const emptyObject = () => Object.create(null);
console.log(emptyObject());

