If:

Crea un bloque de código que compare dos variables numéricas. Si el número A es mayor que el número B, imprimir en consola ‘El número A es mayor a B‘.

let numeroA: 10;
let numeroB: 9;

if (numeroA > numero B){
    console.log(El número A es mayor a B);
}

Crea un bloque de código que tome la edad de un usuario y la compare con un número de referencia. Si la edad es mayor al número de referencia, imprimir en consola un mensaje.

let edadUsuario = 25; 
let numeroReferencia = 18; 

if (edadUsuario > numeroReferencia) {
    console.log('La edad del usuario es mayor al número de referencia');
}

Crea un bloque de código que compare dos números e imprima en consola un valor booleano.

let numeroA = 10; 
let numeroB = 5;  

let esMayor = numeroA > numeroB;
console.log(esMayor);

Crea un bloque de código que compare dos nombres, y si ambos son iguales imprima en consola el nombre.

let nombreA = 'Juan'; 
let nombreB = 'Juan'; 

if (nombreA === nombreB) {
    console.log(nombreA); 
} 

Crea un bloque de código que compare dos nombres, y si ambos son diferentes imprima en consola un mensaje.

let nombreA = 'Juan'; 
let nombreB = 'Pedro'; 

if (nombreA !== nombreB) {
    console.log('Los nombres son diferentes');
} else {
    console.log('Los nombres son iguales');
}

Crea un bloque de código que imprima en consola un número en caso de que sea un número negativo.

let numero = -5; 

if (numero < 0) {
    console.log(numero);
}

Crea un bloque de código que imprima en consola un número en caso de que NO sea un número negativo.

let numero = 5;

if (numero >= 0) {
    console.log(numero);
}

If…else:

Crea un bloque de código que compare dos números. Si el número es par, imprimir en consola ‘El número es par’. De lo contrario, imprimir ‘El número es impar’.

let numeroA = 10;
let numeroB = 5;  

if (numeroA % 2 === 0) {
    console.log('El número A es par');
} else {
    console.log('El número A es impar');
}

if (numeroB % 2 === 0) {
    console.log('El número B es par');
} else {
    console.log('El número B es impar');
}

Crea un bloque de código que compare dos números y luego imprima en consola si es positivo o negativo.

let numero1 = 10;
let numero2 = 5;

let diferencia = numero1 - numero2;

if (diferencia > 0) {
    console.log("La diferencia es positiva.");
} else if (diferencia < 0) {
    console.log("La diferencia es negativa.");
} else {
    console.log("No hay diferencia, los números son iguales.");
}

Crea una función que tome de referencia una variable string cuyo valor sea una letra, y luego imprima en consola si es una vocal o una consonante.

let letra = 'e';

letra = letra.toLowerCase();

const vocales = ['a', 'e', 'i', 'o', 'u'];

if (vocales.includes(letra)) {
    console.log(letra + " es una vocal.");
} else if (letra >= 'a' && letra <= 'z') {
    console.log(letra + " es una consonante.");
} else {
    console.log(letra + " no es una letra válida.");
}

Crea un bloque de código que tome de referencia un nombre. Si el nombre ingresado es ‘Pedro’ imprimir en consola ‘Hola Pedro, como estás?’. De lo contrario, imprimir ‘Hola! Cómo te llamas?’.

let nombre = 'Pedro';

if (nombre === 'Pedro') {
    console.log('Hola Pedro, ¿cómo estás?');
} else {
    console.log('¡Hola! ¿Cómo te llamas?');
}

// Crea un bloque de código que tome de referencia la nota de un examen y devuelva ‘Estás aprobado’ si la nota es mayor o igual a 7, o ‘Estás desaprobado’ si la nota es menor a 7.

let nota = 6;

if (nota >= 7) {
    console.log('Estás aprobado');
} else {
    console.log('Estás desaprobado');
}

Else if:

Crea un bloque de código que tome de referencia un número e imprima en pantalla si el número es menor a 10, mayor a 50, o si está entre esos dos valores.

let numero = 25;

if (numero < 10) {
    console.log('El número es menor a 10.');
} else if (numero > 50) {
    console.log('El número es mayor a 50.');
} else {
    console.log('El número está entre 10 y 50.');
}

Crea un bloque de código que compare dos números. Si ambos números son menores a 10, imprimir en consola el múltiplo. Si ambos números son mayores a 50,  imprimir en consola su suma. Sino, imprimir en consola el primer número menos el segundo.

let numero1 = 8;
let numero2 = 6;

if (numero1 < 10 && numero2 < 10) {
    console.log('El múltiplo es:', numero1 * numero2);
} else if (numero1 > 50 && numero2 > 50) {
    console.log('La suma es:', numero1 + numero2);
} else {
    console.log('La diferencia es:', numero1 - numero2);
}


Crea un bloque de código que tome de referencia un número del 1 al 7 y devuelva el día de la semana correspondiente. 
Por ejemplo: 1 = ‘lunes’.

let numero = 3;

let dia;
if (numero === 1) {
    dia = 'lunes';
} else if (numero === 2) {
    dia = 'martes';
} else if (numero === 3) {
    dia = 'miércoles';
} else if (numero === 4) {
    dia = 'jueves';
} else if (numero === 5) {
    dia = 'viernes';
} else if (numero === 6) {
    dia = 'sábado';
} else if (numero === 7) {
    dia = 'domingo';
} else {
    dia = 'Número no válido';
}

console.log(dia);

Crea un bloque de código que reciba un número e imprima en pantalla si es divisible por 2, 3, o ninguno.

let numero = 18;

if (numero % 2 === 0 && numero % 3 === 0) {
    console.log('El número es divisible por 2 y 3.');
} else if (numero % 2 === 0) {
    console.log('El número es divisible por 2.');
} else if (numero % 3 === 0) {
    console.log('El número es divisible por 3.');
} else {
    console.log('El número no es divisible ni por 2 ni por 3.');
}

Crea un bloque de código que tome de referencia un número del 1 al 12 y devuelva el mes correspondiente. Por ejemplo: 1 = ‘Enero’.


let numero = 5;

let mes;
if (numero === 1) {
    mes = 'Enero';
} else if (numero === 2) {
    mes = 'Febrero';
} else if (numero === 3) {
    mes = 'Marzo';
} else if (numero === 4) {
    mes = 'Abril';
} else if (numero === 5) {
    mes = 'Mayo';
} else if (numero === 6) {
    mes = 'Junio';
} else if (numero === 7) {
    mes = 'Julio';
} else if (numero === 8) {
    mes = 'Agosto';
} else if (numero === 9) {
    mes = 'Septiembre';
} else if (numero === 10) {
    mes = 'Octubre';
} else if (numero === 11) {
    mes = 'Noviembre';
} else if (numero === 12) {
    mes = 'Diciembre';
} 

console.log(mes);


Switch:

Crea un bloque de código que tome de referencia un número del 1 al 7. Utiliza una sentencia Switch para imprimir en consola el día de la semana correspondiente.

let numero = 4;

switch (numero) {
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
        case 3:
            console.log('Miércoles');
            break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sábado');
        break;
    case 7:
        console.log('Domingo');
        break;
    default:
        console.log('Número no válido');
}

Crea un bloque de código que tome de referencia una letra correspondiente al género (‘H’, ‘M’, ‘X’…). Utiliza una sentencia switch para imprimir en consola el género correspondiente.

let genero = 'M';

switch (genero) {
    case 'H':
        console.log('Hombre');
        break;
    case 'M':
        console.log('Mujer');
        break;
    case 'X':
        console.log('No binario');
        break;
    default:
        console.log('Género no válido');
}

Crea un bloque de código que reciba un número del 1 al 10. Utiliza switch para imprimir en consola ‘Uno’, ‘Dos’, ‘Tres’, o ‘Mayor a 3’, según corresponda. 
Crea un bloque de código que tome de referencia una letra. Utiliza switch para imprimir en consola si es una vocal, una consonante, o un caracter especial.
Crea un bloque de código que tome de referencia un número del 1 al 4. Utiliza switch para imprimir en consola la estación del año correspondiente.


Operador ternario:

Crea un bloque de código que tome de referencia una variable ‘edad’. Utiliza el operador ternario para imprimir en consola si es o no mayor de edad.
Crea un bloque de código que tome de referencia un número. Utiliza el operador ternario para determinar si es par o impar y muestra el resultado en consola.
Crea un bloque de código que tome de referencia dos números y utilice el operador ternario para determinar cual de los dos es el mayor. Luego imprime en consola el resultado.
Crea un bloque de código que tome de referencia un número del 1 al 7 y utilice el operador ternario para imprimir en consola el día de la semana correspondiente.
Crea un bloque de código que tome de referencia un número. Utiliza el operador ternario para determinar si es positivo, negativo o cero e imprime el resultado en consola.
Crea un bloque de código que tome de referencia un número del 1 al 100 y utilice el operador ternario para determinar si es múltiplo de 3 y 5 para imprimir el resultado en consola.

Prácticas: 

Crea un bloque de código que tome de referencia un número del 1 al 100 y, utilizando el tipo de condicional que prefieras, imprimir si es múltiplo de 2, 3 o 5 incluyendo las diferentes combinaciones posibles.
Crea un bloque de código que reciba un numero del 1 al 1000. Utiliza el tipo de condicional que prefieras para imprimir en consola si el numero es par o impar, si es divisible por 2, por 3 o por 5, y si es mayor o menor a 50.
Desarrolla 10 nuevas situaciones en donde requieras de utilizar condicionales para su resolución.
