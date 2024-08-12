// Agregar elementos al final de un array:
//     ● Crea un array vacío llamado numbers.
//     ● Agrega los números del 1 al 5 al array.
//     ● Imprime el array resultante.
//     ● Eliminar el último elemento del array

let numbers = [];
numbers.push(1, 2, 3, 4, 5);
console.log(numbers);
numbers.pop();

// Utiliza el array numbers del ejercicio anterior.
// ● Elimina el último número del array.
// ● Imprime el array resultante.
// ● Agregar elementos al principio del array.

numbers.pop();
console.log(numbers);
numbers.unshift(23);
console.log(numbers);

// Crea un array vacío llamado colors, agregando cada elemento al principio del array.
// ● Agrega los siguientes colores al array en el siguiente orden: 'red', 'blue', 'green'.

let colors = [];
colors.push("red");
colors.push("blue");
colors.push("green");
console.log(colors);

// Eliminar el primer elemento de un array:
// ● Utiliza el array colors del ejercicio anterior.
// ● Elimina el primer color del array.

colors.shift();
console.log(colors);

// Agregar múltiples elementos al final de un array:
// ● Crea un array vacío llamado fruits.
// ● Agrega los siguientes elementos al array: 'apple', 'banana', 'orange'.

let fruits = [];
fruits.unshift("apple", "banana", "orange");
console.log(fruits);

// Eliminar múltiples elementos al final de un array:
// ● Utiliza el array fruits del ejercicio anterior.
// ● Elimina los últimos dos elementos del array utilizando el método pop.

fruits.pop();
fruits.pop();
console.log(fruits);

// Agregar múltiples elementos al principio de un array:
// ● Utiliza el array fruits del ejercicio 5.
// ● Agrega los siguientes elementos al principio del array: 'grape', 'kiwi'.

fruits.unshift("grape", "kiwi");
console.log(fruits);

// Eliminar múltiples elementos al principio de un array:
// ● Utiliza el array fruits del ejercicio anterior.
// ● Elimina los primeros dos elementos del array.

fruits.shift();
fruits.shift();
console.log(fruits);

// Agregar un elemento específico al final de un array:
// ● Utiliza el array colors del ejercicio 3.
// ● Agrega el color 'yellow' al final del array.

colors.push("yellow");
console.log(yellow);

// Eliminar un elemento específico del principio de un array:
// ● Utiliza el array colors del ejercicio 9.
// ● Elimina el primer color del array

colors.shift();
console.log(colors);

// Desarrollar una función que reciba el nombre de un alumno, las notas de sus materias, y la nota de aprobación (4/6/7) e imprima:
// Nombre del usuario
// Cantidad de materias cursadas
// Cantidad de materias aprobadas
// Las notas de las materias aprobadas
// Cantidad de materias reprobadas
// Las notas de las materias reprobadas
// Si el alumno pasó de año (aprobó todas las materias)

let student = "Lautaro";
let ratings = [8, 9, 7, 6, 6, 4, 4, 9];
let approve = 6;

function college(student, ratings, approve) {
  const subjects = ratings.filter((rating) => rating >= approve);
  const failed = ratings.filter((rating) => rating < approve);

  const nextYear = failed.length === 0;

  console.log(`student name: ${student}`);
  console.log(`assigments approve: ${subjects.length}`);
  console.log(`subjects approved: ${subjects.length}`);
  console.log(`ratings of approved subjects: ${subjects}`);
  console.log(`subjects failed: ${failed.length}`);
  console.log(`rating of subject failed: ${failed}`);
  console.log(`the student approve the year: ${nextYear ? "Yes" : "No"}`);
}

college(student, ratings, approve);
