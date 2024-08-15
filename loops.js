// Crea una función sumarHastaLimite que reciba un número límite. Usa un bucle while para sumar números consecutivos (1, 2, 3,...)
//  hasta que la suma alcance o supere el límite. Muestra el resultado en la consola.

// function sumarHastaLimite (limite){
//     let n = 0
//     result
//     while (result <= limite){
//         n++
//         result = result
//         console.log(n)
//     }
//     return n

// }
// sumarHastaLimite(900)
// // 2. Escribe una función contarPares que reciba un número n. Usa un bucle while para contar cuántos números pares hay entre 1 y n. Muestra el resultado en la consola.

// function contarPares(n){
//     let cuenta = 0;
//     let i = 1;
//     while (i <= n) {
//         if (i % 2 === 0){
//             cuenta++
//             console.log(i)
//         }
//     i++;

//     }

// }
// contarPares(10)

// // 3. Crea una función multiplicar que reciba dos números a y b. Usa un bucle while para multiplicar a por b mediante sumas sucesivas. Muestra el resultado en la consola.

// function multiply(a, b) {
//   let resultado = 0;
//   let i = 1;
//   while (i <= b) {
//     resultado = resultado + a;
//     i++;
//   }
//   return resultado;
// }

// console.log(multiply(8, 4));
// // 4. Escribe una función mostrarImpares que reciba un número límite. Usa un bucle while para mostrar en la consola todos los números impares desde 1 hasta el límite.

// function mostrarImpares (n){

//     while (i <=n){
//        if (i%2 !== 0){
//         console.log(i)
//        }
//        i++
//     }

// }
// // 5. Escribe una función calcularFactorial que reciba un número n. Usa un bucle while para calcular el factorial de n. Muestra el resultado en la consola.

// function calcularFactorial(n){

//     while ()

// }
// // 6. Crea una función cuentaRegresiva que reciba un número n. Usa un bucle do while para realizar una cuenta regresiva desde n hasta 1, mostrando cada número en la consola.
// function cuentaRegresiva(n){
//      do{
//         console.log(n);
//         n--;

//      }while(n >= 1)
//     }

// cuentaRegresiva(8)

// // 7. Escribe una función sumarDigitos que reciba un número n. Usa un bucle while para sumar todos los dígitos de n. Muestra el resultado en la consola.

// // 8. Escribe una función encontrarMayor que reciba un array de números. Usa un bucle while para encontrar y mostrar el mayor número en la consola.
// aN = [1,2,3,4,5,6]
// function encontrarMayor(aN){

// }

// // 9. Escribe un programa que use un bucle do while para contar y mostrar en la consola todos los números pares desde 1 hasta 20.
// let numero1 = 1;

// do {
//     if (numero1 % 2 == 0) {
//       console.log(numero1);
//     }
//     numero1++;
//   } while (numero1 <= 20);
// // 10. Escribe un programa que use un bucle do while para contar y mostrar en la consola todos los números impares desde 1 hasta 20.

// let numero = 1;

// do {
//     if (numero % 2 !== 0) {
//       console.log(numero);
//     }
//     numero++;
//   } while (numero <= 20);

// let usuarios = ["juan", "maria", "admin", "carlos"];
// let usuarioBuscado = "juan";

// function verificarUsuario(usuarios, usuarioBuscado) {
//   let n = 0;
//   let userExists = false;

//   while (usuarios.length > n) {
//     if (usuarios[n] === usuarioBuscado) {
//       userExists = true;
//       console.log("Usuario encontrado");
//       return;
//     }
//     n++;
//   }
//   console.log("Usuario no encontrado");
//   return userExists;
// }

// verificarUsuario(usuarios, usuarioBuscado);

// let contrasenas = ["password", "1234567", "supersecret", "contraseña123"];
// function passwordLength(contrasenas) {
//   let n = 0;
//   let contrasenaCumple = 0;
//   while (n < contrasenas.length) {
//     console.log("c", contrasenas[n].length);
//     if (contrasenas[n].length === 8) {
//       contrasenaCumple++;
//       console.log(contrasenaCumple);
//     }
//     n++;
//     console.log(n);
//   }
//   return contrasenaCumple;
// }

// console.log(passwordLength(contrasenas));
// let correos = [
//   "correo1@example.com",
//   "correo2@example.com",
//   "correo3@example.com",
// ];
// function verificarCorreo(correos) {
//   let n = 0;
//   while (n < correos.length) {
//     // console.log(correos[n].includes("@") && correos[n].includes("."),correos[n])
//     if (!correos[n].includes("@") | !correos[n].includes(".")) {
//       console.log("Correo invalido encontrado");
//       return;
//     }
//     n++;
//   }
//   console.log("Correos Validos");
//   return n;
// }

// console.log(verificarCorreo(correos));

// function primeNumber(num5) {
//   let checker = 2;
//   let prime = true;
//   do {
//     if (num5 % checker === 0) {
//       prime = false;
//     }
//     checker++;
//   } while (checker < num5);
//   return prime;
// }
// let resultExcercise5P2 = primeNumber(7);
// console.log(resultExcercise5P2);

// function countComments(arrayComments) {
//   let counter = 0;
//   while (arrayComments.length > counter) {
//     counter++;
//   }
//   return counter;
// }
// let resultExcercise6P2 = countComments([
//   "Muy bueno",
//   "Demasiado bueno",
//   "Pero que pedazo de basura",
// ]);
// console.log(resultExcercise6P2);

// Escribe una función llamada contarGoles que reciba un array de goles anotados en un
// partido. Cada elemento del array es un objeto que tiene dos propiedades: equipo y jugador.
// Usa un bucle while para recorrer el array y contar cuántos goles anotó cada equipo.
// let goles=[{equipo: "Argentina", jugador:"lionel messi"},{equipo: "Brasil", jugador:"Neymar"}];

// function contarGoles(goles){
//     let n = 0
//     let result = 0
//     while(n < goles.length){
//         if ()
//     }

// }

// Crea una función llamada contarToques que reciba un array con el nombre de los
// jugadores que tocan el balón en una jugada. Usa un bucle while para contar cuántos
// toques hubo antes de que el balón saliera del campo. La jugada termina cuando encuentres
// el string "fuera" en el array.
// Ej del array:
// let jugada = ["Messi", "Di Maria", "Doye", "fuera"];

// function contarToques(jugada) {
//   let n = 0;
//   let toques = 0;
//   while (n < jugada.length) {
//     if (jugada[n] === "fuera") {
//       return toques;
//     }
//     n++;
//   }
//   return toques;
// }

// En una clase, tienes un array con las notas de los alumnos. Escribe una función
// contarAprobados que reciba este array y cuente cuántos alumnos aprobaron (nota
// mayor o igual a 6). Usa un bucle for para recorrer el array, continúe para saltar las
// notas menores a 6 y break para detener el conteo si encuentras una nota igual a 10
// (porque es la nota máxima). Muestra el resultado en la consola.

// let notas = [6,6,5,7,10]

// function contarAprobados(notas) {
//   let aprobados = 0;

//   for (let i = 0; i < notas.length; i++) {
//     if (notas[i] < 6) {
//       continue;
//     }
//     if (notas[i] === 10) {
//       break;
//     }
//     aprobados++;
//   }

//   console.log(`Número de alumnos aprobados: ${aprobados}`);
// }

// Un canal de TV quiere saber si un programa específico está en la programación del día.
// Escribe una función buscarPrograma que reciba un array con la lista de programas
// del día y un nombre de programa para buscar. Usa un bucle for para recorrer el array y
// break para detener la búsqueda una vez que encuentres el programa. Muestra en la
// consola si el programa fue encontrado o no.

// programas = ["Noticias", "Deportes", "Película", "Documental", "Serie"];

// function buscarPrograma(programas, nombrePrograma) {
//   let encontrado = false;

//   for (let i = 0; i < programas.length; i++) {
//     if (programas[i] === nombrePrograma) {
//       encontrado = true;
//       break;
//     }
//   }

//   if (encontrado) {
//     console.log(`El programa "${nombrePrograma}" fue encontrado`);
//   } else {
//     console.log(`El programa "${nombrePrograma}" no está.`);
//   }
// }
// buscarPrograma(programas, "Deportes");

// En una clase, un profesor quiere saber cuántos alumnos obtuvieron notas menores a 4
// para ofrecerles clases de apoyo. Escribe una función contarNotasBajas que reciba
// un array con las notas y cuente cuántas son menores a 4. Usa for para recorrer el
// array y continue para saltar las notas que no sean menores a 4
// let notas = [3,2,4,4,5,4,4,6,7]
// function contarNotasBajas(notas) {
//   let contador = 0;

//   for (let i = 0; i < notas.length; i++) {
//     if (notas[i] >= 4) {
//       continue; // Saltar a la siguiente iteración si la nota es 4 o mayor
//     }
//     contador++;
//   }

//   console.log(`notas menores a 4: ${contador}`);
// }

// contarNotasBajas(notas)

// Tienes una lista de programas en un canal de televisión, y quieres seleccionar tus
// favoritos, pero solo los primeros tres que te gustan. Escribe una función
// seleccionarFavoritos que reciba un array con la lista de programas y un array con
// tus programas favoritos. Usa for para recorrer la lista, continue para saltar los que no
// están en tus favoritos, y break para detenerte una vez que hayas encontrado tres
// programas favoritos

// function seleccionarFavoritos(programas, favoritos) {
//   let seleccionados = [];

//   for (let i = 0; i < programas.length; i++) {
//     if (!favoritos.includes(programas[i])) {
//       continue;
//     }

//     seleccionados.push(programas[i]);

//     if (seleccionados.length === 3) {
//       break;
//     }
//   }

//   console.log("Tus tres programas favoritos son:", seleccionados);
// }

// const programasDelDia = ["Noticias", "Deportes", "Película", "Documental", "Serie", "Comedia"];
// const misFavoritos = ["Película", "Serie", "Comedia", "Deportes"];

// seleccionarFavoritos(programasDelDia, misFavoritos);
// let notas = [1,2,3,4,10,6,7,7,7,8,9,9,9]
// function evaluarDesempeño(notas) {
//   for (let i = 0; i < notas.length; i++) {
//     if (notas[i] < 9) {
//       continue;
//     }

//     console.log(`Alumno ${i + 1}: Desempeño Excelente con nota ${notas[i]}`);
//   }
// }
// evaluarDesempeño(notas);

// Tienes un objeto alumno que contiene un array de materias, donde cada materia es un
// objeto con el nombre y la nota. Escribe una función filtrarAprobadas que recorra el
// array de materias, filtre aquellas con nota mayor o igual a 6 y las guarde en un nuevo
// array aprobadas. Usa for para recorrer las materias, continue para saltar las
// materias desaprobadas, y break si el alumno ya ha aprobado 5 materias. Muestra el
// array aprobadas en la consola.

// let alumnox = {
//   nombre: "Juan",
//   materias: [
//     { nombre: "Matemáticas", nota: 7 },
//     { nombre: "Historia", nota: 5 },
//   ],
// };

// function filtrarAprobadas(alumnox) {
//   let aprobadas = [];

//   for (let i = 0; i < alumnox.materias.length; i++) {
//     if (alumnox.materias[i].nota < 6) {
//       continue;
//     }

//     aprobadas.push(alumnox.materias[i]);

//     if (aprobadas.length === 5) {
//       break;
//     }
//   }

//   console.log("Materias aprobadas:", aprobadas);
// }

// filtrarAprobadas(alumnox);

// function buscarMejorPrograma(programas) {
//   let mejorPrograma = null;

//   for (let i = 0; i < programas.length; i++) {
//     if (programas[i].calificacion < 7) {
//       continue;
//     }

//     if (mejorPrograma === null || programas[i].calificacion > mejorPrograma.calificacion) {
//       mejorPrograma = programas[i];
//     }

//     if (programas[i].calificacion === 10) {
//       break;
//     }
//   }

//   if (mejorPrograma) {
//     console.log(`El mejor programa es "${mejorPrograma.nombre}" con una calificación de ${mejorPrograma.calificacion}.`);
//   } else {
//     console.log("No hay programas con una calificación mayor o igual a 7.");
//   }
// }

// let programasDelDia = [
//   { nombre: "Noticias", calificacion: 6 },
//   { nombre: "Deportes", calificacion: 8 },
//   { nombre: "Película", calificacion: 7 },
//   { nombre: "Documental", calificacion: 9 },
//   { nombre: "Serie", calificacion: 10 },
//   { nombre: "Comedia", calificacion: 5 }
// ];

// buscarMejorPrograma(programasDelDia);

