// Declarar una variable de tipo string cuyo nombre represente de forma clara su contenido.

let chanchitoFeliz = "Vive feliz en su granja";

// Declarar una variable de tipo number cuyo nombre represente de forma clara su contenido.

let myAge = 18;

// Declarar una variable de tipo boolean cuyo nombre represente de forma clara su contenido.

let imLearning = true;

// Declarar dos variables de tipo string. Luego declarar una nueva variable cuyo valor sea 
// la concatenación de las dos variables previamente creadas. 

let myAddress = "Hilarion de la Quintana";
let granyAddress = "Ayacucho";
let familyAddress = myAddress + granyAddress;

// Declarar dos variables de tipo number.

let age = 18;
let height = 180;

// Luego declarar una nueva variable cuyo valor sea la suma de las dos variables previamente creadas. 

let sum = age + height;

// Luego declarar una nueva variable cuyo valor sea la resta de las dos variables previamente creadas. 
let resta = age - height;
// Luego declarar una nueva variable cuyo valor sea la multiplicación de las dos variables previamente creadas. 
let multi = age * height;
// Luego declarar una nueva variable cuyo valor sea la división de las dos variables previamente creadas. 
let div = age / height;
// Luego declarar una nueva variable cuyo valor sea el módulo entre las dos variables previamente creadas. 
let mod = age % height;

// Declarar una variable de tipo number y otra de tipo string. Luego sumar ambas variables y guardar su resultado en una nueva variable. De qué tipo será la tercera variable?

let money = 44000;
let balance = "Mi balance actual es de "

let cuenta = balance + money;

// Declarar una variable de tipo booleano cuyo nombre represente su valor. Luego declarar una nueva variable cuyo valor sea opuesto a la variable previamente creada.

let esMayordeEdad <= 18;
let esMenordeEdad >= 18;

//Crear una variable de tipo number. 
let herAge = 20;
// Reasignar un nuevo valor a esa misma variable para que sea su valor + 1. 
hisAge = hisAge + 1;
// Repetir la operación anterior utilizando una estrategia diferente
herAge += 1;
// Repetir ambas operaciones con operadores de resta, multiplicación y división.
// Operadores de resta
hisAge = hisAge - 1; // Primera forma
hisAge -= 1;         // Segunda forma

// Operadores de multiplicación
hisAge = hisAge * 2; // Primera forma
hisAge *= 2;         // Segunda forma

// Operadores de división
hisAge = hisAge / 2; // Primera forma
hisAge /= 2;         // Segunda forma

// Declarar una constante e intentar reasignarle otro valor luego de su declaración. Que output recibis? E
const mutable = 18;
const mutable = 81;
// Error de sintaxis porque una constante no se puede declarar de nuevo

// Crear dos variables de tipo string y dos variables de tipo number. 
let myAddress = " Hilarion de la Quintana ";
let granyAddress = " Ayacucho ";
let myAddressNumber = 2144;
let hisAddressNumber = 3376;
// Crear una nueva variable cuyo valor sea un string que incluya las cuatro variables previamente creadas. 
let combinedAddress = myAddress + myAddressNumber + granyAddress + hisAddressNumber;
// Repetir el punto anterior utilizando una estrategia diferente.
let combinedAddress = myAddress.concat(myAddressNumber, ", ", granyAddress, hisAddressNumber);
// Crear dos variables de tipo number.
// Crear cuatro nuevas variables de tipo boolean comparando los dos valores utilizando operadores de comparación.
let numero1 = 10;
let numero2 = 5;

let esIgual = numero1 === numero2; // false, porque 10 no es igual a 5
let esDistinto = numero1 !== numero2; // true, porque 10 es distinto de 5
let esMayor = numero1 > numero2; // true, porque 10 es mayor que 5
let esMenorOIgual = numero1 <= numero2; // false, porque 10 no es menor o igual a 5

// Declarar cinco variables de tipo string cuyo valor contenga operaciones aritméticas. Intenta utilizar diferentes estrategias. 
// Variables de tipo string con operaciones aritméticas
let operacion1 = "5 + 3 = " + (5 + 3);  // "5 + 3 = 8"
let operacion2 = "10 - 4 = " + (10 - 4);  // "10 - 4 = 6"
let operacion3 = "7 * 2 = " + (7 * 2);    // "7 * 2 = 14"
let operacion4 = "20 / 4 = " + (20 / 4);  // "20 / 4 = 5"
let operacion5 = "5^2 = " + Math.pow(5, 2); // "5^2 = 25"

// Crea un bloque de código que, utilizando variables con nombres representativos, calcule la cantidad de propina a dejar en un restaurante, basada en el total de la cuenta y el porcentaje de propina ingresado por el usuario.

let totalCuenta = 100; // Monto total de la cuenta
let porcentajePropina = 15; // Porcentaje de propina

let cantidadPropina = (totalCuenta * porcentajePropina) / 100;
let totalConPropina = totalCuenta + cantidadPropina;


// Crea un bloque de código que calcule el precio final de un producto luego de aplicar un descuento. 
let precioOriginal = 200; // Precio original del producto
let porcentajeDescuento = 10; // Porcentaje de descuento

let descuento = (precioOriginal * porcentajeDescuento) / 100;
let precioFinal = precioOriginal - descuento;


// Crea un bloque de código que, tomando el año de nacimiento de una persona, devuelva su edad actual.
let anoNacimiento = 1990; // Año de nacimiento de la persona
let anoActual = new Date().getFullYear(); // Año actual

let edadActual = anoActual - anoNacimiento;
// Crea un bloque de código que, definiendo las variables necesarias, calcule el área de un círculo, un cuadrado y un triángulo.

let radioCirculo = 5; // Radio del círculo
let ladoCuadrado = 4; // Lado del cuadrado
let baseTriangulo = 6; // Base del triángulo
let alturaTriangulo = 3; // Altura del triángulo

let areaCirculo = Math.PI * Math.pow(radioCirculo, 2);
let areaCuadrado = Math.pow(ladoCuadrado, 2);
let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
