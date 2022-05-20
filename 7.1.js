//Task 1
// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

const education = {
	platform: 'Skillfactory',
	speciality: 'Frontend-developer' 
};

const student = Object.create(education);
    student.name = 'Alex';
    student.age = 39;
    
function showOwnProp(obj) {
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) 
        console.log(`${key} - ${obj[key]}`);
	}
}
showOwnProp(student);

//Я в начале решил так
//const student = Object.create(education)
// student.name = 'Alex',
// student.age = 40

//   for (let key in student) {
//     if (student.hasOwnProperty(key))
//       console.log(key)
// }

// console.log(student)
