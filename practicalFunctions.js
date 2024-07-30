// Declara una función llamada saludar que muestre en la consola "Hola, mundo!" cuando se llame.

function saludar() {
    console.log("Hola, mundo!");
}
saludar();

// Declara una función llamada despedirse que muestra en la consola "Adiós, mundo!" y llámala. Ejecutarla.

function despedirse() {
    console.log("Adiós, mundo!");
}
despedirse();

// Declara una función llamada calcularCuadrado que acepte un número como parámetro y devuelva el cuadrado de ese número. Ejecutarla.

function calcularCuadrado(numero) {
    return numero * numero;
}
console.log(calcularCuadrado(4))

// Escribir una función llamada minutosAHoras que reciba un número entero de minutos como parámetro, y devuelva un número representando la misma cantidad de tiempo pero en horas.

function minutosAHoras(minutos) {
    return minutos / 60;
}
console.log(minutosAHoras(120));

// Declara una función llamada saludarPersona que acepte un parámetro nombre y muestre en la consola "Hola, " seguido del nombre.

function saludarPersona(nombre) {
    console.log("Hola, " + nombre);
}
saludarPersona("Carlos"); 

// Declara una función llamada sumarNumeros que acepte dos números como parámetros y devuelva su suma.

function sumarNumeros(num1, num2) {
    return num1 + num2;
}
console.log(sumarNumeros(3, 5));

// Declara una función llamada multiplicarNumeros que acepte tres números como parámetros y devuelva su producto.

function multiplicarNumeros(num1, num2, num3) {
    return num1 * num2 * num3;
}
console.log(multiplicarNumeros(2, 3, 4));

// Escribir una función que se llame concatenar3, que reciba 3 strings como parámetros. Definir dentro de la función una variable que se llame separador. La función debe devolver un solo string, concatenando los 3 ingresados como parámetro y separados por el separador.

function concatenar3(str1, str2, str3) {
    let separador = " ";
    return str1 + separador + str2 + separador + str3;
}
console.log(concatenar3("Hola", "cómo", "estás")); 

// Escribir una función llamada promedioDeCuatroNumero, que reciba 4 números como parámetros y devuelva el promedio de los números introducidos.

function promedioDeCuatroNumero(num1, num2, num3, num4) {
    return (num1 + num2 + num3 + num4) / 4;
}
console.log(promedioDeCuatroNumero(4, 6, 8, 10)); 

// Declara una función llamada presentarPersona que acepta dos parámetros, nombre y edad, y muestre en la consola "Mi nombre es [nombre] y tengo [edad] años."

function presentarPersona(nombre, edad) {
    console.log("Mi nombre es " + nombre + " y tengo " + edad + " años.");
}
presentarPersona("Laura", 25);

// Declara una función llamada areaRectangulo que acepte dos parámetros, ancho y alto, y devuelva el área del rectángulo. Comprobarlo asignando la función a una variable, y mostrando en consola el valor de la misma.

function areaRectangulo(ancho, alto) {
    return ancho * alto;
}
let area = areaRectangulo(5, 3); 

console.log(area);

// Declara una función llamada calcularPropina que acepte un número como parámetro y devuelva la cantidad de propina a dejar en base a cuánto salió el total de la comida. Comprobarlo asignando la función a una variable y mostrando en consola el valor de la misma.

function calcularPropina(total) {
    let propina = total * 0.15;
    return propina;
}
let propina = calcularPropina(100); 
console.log(propina); 

// Declara una función llamada calcularSalario que acepta dos parámetros, horasTrabajadas y tarifaPorHora, y devuelva el salario calculado.

function calcularSalario(horasTrabajadas, tarifaPorHora) {
    return horasTrabajadas * tarifaPorHora;
}
console.log(calcularSalario(40, 15)); 

// Declara una función llamada calcularDescuento que acepte un parámetro precioOriginal. La función debe declarar una variable descuento con un valor de 0.1 (10%). Luego, calcula el precio con descuento y devuelve el resultado.

function calcularDescuento(precioOriginal) {
    let descuento = 0.1;
    let precioConDescuento = precioOriginal * (1 - descuento);
    return precioConDescuento;
}
console.log(calcularDescuento(50)); 

// Declara una función llamada evaluarNumero que acepte un parámetro num. La función debe devolver "positivo" si el número es mayor que 0, "negativo" si es menor que 0, y "cero" si es exactamente 0.

function evaluarNumero(num) {
    if (num > 0) {
        return "positivo";
    } else if (num < 0) {
        return "negativo";
    } else {
        return "cero";
    }
}
console.log(evaluarNumero(10)); 
console.log(evaluarNumero(-5)); 
console.log(evaluarNumero(0)); 

// Declara una función llamada evaluarEdad que acepte un parámetro edad. La función debe devolver "Menor de edad" si la edad es menor de 18, y "Mayor de edad" si es 18 o mayor.

function evaluarEdad(edad) {
    if (edad < 18) {
        return "Menor de edad";
    } else {
        return "Mayor de edad";
    }
}
console.log(evaluarEdad(17)); 
console.log(evaluarEdad(18)); 


// Declara una función llamada esPar que acepte un número como parámetro. Si el número es par, debe mostrar en la consola "El número es par". Si es impar, debe mostrar "El número es impar".

function esPar(numero){
    if (numero % 2 === 0){
        console.log("el numero es par");
    } else {
        console.log("el numero es impar");  
}


// Declara una función llamada compararNumeros que acepte dos números como parámetros. La función debe mostrar en la consola cuál de los dos números es mayor o si son iguales.

function compararNumeros(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + " es mayor que " + num2);
    } else if (num1 < num2) {
        console.log(num2 + " es mayor que " + num1);
    } else {
        console.log(num1 + " y " + num2 + " son iguales");
    }
}

// Declara una función llamada sumaEsPar que acepte dos números como parámetros. La función debe mostrar en la consola si la suma de los dos números es par o impar.

function sumaEsPar(num1, num2) {
    let suma = num1 + num2;
    if (suma % 2 === 0) {
        console.log("La suma es par");
    } else {
        console.log("La suma es impar");
    }
}


// Declara una función llamada ambosPositivos que acepte dos números como parámetros. La función debe mostrar en la consola si ambos números son positivos, si solo uno es positivo, o si ninguno es positivo.

function ambosPositivos(num1, num2) {
    if (num1 > 0 && num2 > 0) {
        console.log("Ambos números son positivos");
    } else if (num1 > 0 || num2 > 0) {
        console.log("Solo uno de los números es positivo");
    } else {
        console.log("Ninguno de los números es positivo");
    }
}


Declara una función llamada calcularImpuesto que acepte un parámetro ingreso. Si el ingreso es menor de 10000, el impuesto es del 10%. Si es entre 10000 y 20000, el impuesto es del 15%. Si es mayor de 20000, el impuesto es del 20%. La función debe devolver el valor del impuesto.

function calcularImpuesto(ingreso) {
    let impuesto;
    if (ingreso < 10000) {
        impuesto = ingreso * 0.10;
    } else if (ingreso >= 10000 && ingreso <= 20000) {
        impuesto = ingreso * 0.15;
    } else {
        impuesto = ingreso * 0.20;
    }
    return impuesto;
}


// Declara una función llamada clasificarNota que acepte un parámetro nota. Si la nota es 90 o más, devuelve "A". Si es entre 80 y 89, devuelve "B". Si es entre 70 y 79, devuelve "C". Si es entre 60 y 69, devuelve "D". Si es menor de 60, devuelve "F".

function clasificarNota(nota) {
    if (nota >= 90) {
        return "A";
    } else if (nota >= 80) {
        return "B";
    } else if (nota >= 70) {
        return "C";
    } else if (nota >= 60) {
        return "D";
    } else {
        return "F";
    }
}
}
