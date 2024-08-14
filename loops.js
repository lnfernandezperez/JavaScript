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
let goles=[{equipo: "Argentina", jugador:"lionel messi"}];

function contarGoles(goles){
    let n = 0
    while(n < goles.length){
        if ()
    }

}
