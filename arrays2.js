// Declara un array llamado pelisFavoritas con tres elementos y muéstralo en la consola.

let pelisFavoritas = ["tron", "ironman", "avengers"];
console.log(pelisFavoritas);

// Accede y muestra en la consola el segundo elemento del array pelisFavoritas.

console.log(pelisFavoritas[0]);

// Declara un array vacío llamado libros y agrega tres elementos.

let libros = [];
libros.push("the song of aquiles", "harry potter", "demon");

// Elimina el último elemento del array libros y muéstralo en la consola.

libros.pop();
console.log(libros);

// Declara un array llamado colores con cuatro elementos y muestra su longitud en la consola.

let colores = ["blanco", "negro", "gris", "verde"];
console.log("${colores.length}");

// Del array de colores usando anteriormente, agrega 2 elementos al inicio del mismo y muéstralo en la consola.

colores.unshift("azul", "naranja");
console.log(colores);

// Elimina el primer elemento del array colores y muéstralo en la consola.

colores.pop();

// Declara un array llamado frutas con tres elementos y verifica si contiene 'Manzana'. Muestra el resultado en la consola.

let frutas = ["banana", "manzana", "naranja"];
frutas.find(function (fruta) {
  return fruta === "manzana";
});

// Declara un array de numeros del 1 al 15 y encuentra el primer número mayor que 3 en el array numeros.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
numeros.find(function (numeros) {
  return numeros > 3;
});

// Ecuentra todos los números menores que 4 en el array numeros.

numeros.find(function (numeros) {
  return numeros < 4;
});

// Declara una función llamada agregarElemento que acepte un array y un elemento como parámetros, agregue el elemento al final del array y devuelva la nueva longitud del array.

function agregarElemento(numeros1, numero) {
  numeros1.push(numero);
}

let numeros1 = [1, 2, 3];
agregarElemento(numeros1, 4);
console.log(numeros1.length);

// Declara una función llamada eliminarPrimerElemento que acepte un array como parámetro, elimine el primer elemento del array y devuelva el elemento eliminado.

function eliminarPrimerElemento(elemento) {
  elemento.shift();
}
let elemento = [1, 2, 3];
eliminarPrimerElemento(elemento);
console.log(elemento);

// Declara una función llamada longitudArray que acepte un array como parámetro y devuelva la longitud del array mostrado en un mensaje como estee “La longitud de mi array es de [longitud]”.

function longitudArray(array) {
  console.log(`la longitud de mi array es de: ${array.length}`);
}
let array = [1, 2, 3, 4, 5, 6, 7, 8];

longitudArray(array);

// Declara una función llamada verificarElemento que acepte un array y un elemento como parámetros, y devuelva true si el elemento está en el array o false si no lo está.

function verificarElemento() {}
// Declara una función llamada encontrarElemento que acepte un array y un elemento como parámetros, y devuelva el primer elemento del array que sea igual al elemento dado. Si no se encuentra, devuelve undefined.
// Declara una función llamada filtrarArray que acepte un array y un número como parámetros, y devuelva un nuevo array con todos los elementos mayores al número dado.

// Usando Every o Some, realiza estos ejercicios

// Dado un array de números, verifica si todos son mayores que cero. Devuelve en consola el resultado

let positivos = numeros.every(function (num) {
  return num > 0;
});

console.log(positivos);

// Validar que todos los strings son no vacíos

// Comprueba si todos los elementos en un array de strings contienen algún carácter. Devuelve en consola el resultado

// Confirmar que todos los estudiantes pasaron el examen:

// Comprueba si todos los estudiantes en un array tienen una calificación mayor o igual a 6. Devuelve en consola el resultado
// Ej:
// [1,2,4,5,6,7,8,3,2,4,6]
// [6,7,8,9,10]

// Verificar si todas las edades son de adultos:

// Dado un array de edades, verifica si todas las personas son mayores de 18 años.

// Comprobar si todos los números son divisibles por 5:

// Verificar si al menos un número en un array es mayor que 10.

// Comprobar si al menos un string en un array está vacío.

// Verificar si al menos un estudiante no pasó el examen (calificación menor a 6).

// Comprobar si al menos una edad en un array corresponde a un adolescente (13-17 años).

// destructuring

let pelisDisney = [
  "rey leon",
  "cenicienta",
  "toy story",
  "ratatouille",
  "monster inc",
  "intensamente",
];

let [peli1, peli2, peli3, peli4, peli5, peli6] = pelisDisney;
