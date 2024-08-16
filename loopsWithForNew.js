// EJERCICIO 1:
// Imagina que sos parte del equipo de desarrollo de Boca, y tu tarea es gestionar el
// presupuesto del club de fútbol. Cada categoría de gasto del club, como sueldos de
// jugadores, mantenimiento del estadio, y costos de viajes, se representa como una
// propiedad en un objeto. Tu tarea es crear una función que calcule el total de todos los
// gastos del club utilizando un bucle for...in.
// La función debe:
// a. Recibir un objeto gastos donde cada propiedad representa una categoría de
// gasto y su valor es el monto de gasto en esa categoría.
// b. Utilizar un bucle for...in para recorrer las propiedades del objeto gastos y
// sumar los valores de cada propiedad.
// c. Mostrar el total de los gastos en la consola

// function calcularGastoTotal(gastos) {
//   let total = 0;

//   for (let categoria in gastos) {
//     console.log(`${categoria}: $${gastos[categoria]}`);
//     total += gastos[categoria];
//   }

//   console.log("Total de gastos es : $" + total);
// }

// let gastos = {
//   sueldoJugadores: 5000000,
//   mantenimientoCancha: 1500000,
//   iluminacion: 980000,
//   pelotas: 230400,
// };

// calcularGastoTotal(gastos);

// EJERCICIO 2:
// Después de haber calculado el total de gastos , ahora necesitas saber cómo se
// distribuyen esos gastos en diferentes categorías. Tienes un objeto que representa las
// categorías de gastos del club, con cada propiedad indicando el tipo de gasto y su
// monto.
// Tu tarea es crear una función que:
// a. Reciba un objeto gastos donde cada propiedad representa una categoría de
// gasto y su valor es el monto gastado en esa categoría.
// b. Utilice un bucle for...in para recorrer las categorías de gasto.
// c. Imprima el monto gastado en cada categoría y calcule el total general de los
// gastos.
// d. Muestre en la consola cuánto se gastó en cada categoría y el total general, para
// entender mejor cómo se distribuyen los gastos.

// EJERCICIO 3:
// Imagina que trabajás en el equipo de desarrollo de FIFA y necesitás actualizar las
// estadísticas de los jugadores cada año después de la temporada. Tu tarea es crear una
// función que tome un objeto con las estadísticas actuales del jugador y un objeto con los
// nuevos valores a añadir. La función debe usar un bucle for...in para recorrer las
// propiedades del objeto de estadísticas y actualizar los valores correspondientes.
// La función debe:
// a. Recibir un objeto jugador con las propiedades nombre, asistencias, y
// goles, que contienen las estadísticas actuales del jugador.
// b. Recibir un objeto nuevasEstadisticas con los valores de asistencias y
// goles que deben añadirse.
// c. Usar un bucle for...in para recorrer las propiedades de
// nuevasEstadisticas y añadir los valores a las estadísticas del jugador.
// d. Verificar que los nuevos valores sean números válidos (mayores o iguales a
// cero) antes de realizar la actualización.
// e. Devolver un objeto con las estadísticas actualizadas para el jugador.
// let jugador = {
//   nombre: "Romero",
//   asistencias: 5,
//   goles: 0,
// };
// const nuevasEstadisticas = {
//     asistencias: 5,
//     goles: 10,
// };

// function updateStatistics(jugador, newStatistics) {
//   for (let estadistica in newStatistics) {
//     if(newStatistics[estadistica] >= 0){
//         jugador[estadistica] += newStatistics[estadistica];
//     }

//   } return jugador;
// }

// EJERCICIO 4:

// Imaginá que trabajás en el equipo de análisis de datos del Mundial de la FIFA.
// Necesitás saber cuántas veces aparece una letra específica en el nombre de un
// jugador.
// Tu tarea es escribir un programa que:
// a. Reciba una cadena de texto cadena que contiene el nombre de un jugador y un
// carácter caracter que deseas contar.
// b. Utilice un bucle for...of para recorrer cada carácter en la cadena de texto.
// c. Cuente cuántas veces aparece el carácter dado en el nombre del jugador.
// d. Muestra el resultado indicando cuántas veces aparece el carácter en el nombre

// function contarCaracteres(cadena, caracter) {
//   let contador = 0;
//   for (let letra of cadena) {
//     if (letra === caracter) {
//       contador++;
//     }
//   }
//   console.log(
//     `El caracter ${caracter} aparece ${contador} veces en el nombre ${cadena}`
//   );
// }

// let nombreJugador = 'Lionel Messi'
// let caracterBuscado = 'e'

// contarCaracteres(nombreJugador, caracterBuscado)

// EJERCICIO 5:
// Imaginá que estás trabajando en el sistema de compras del Mundial de la FIFA y
// necesitas calcular el costo total de todos los productos en el carrito de compras de un
// fanático. Tienes un array que contiene objetos, donde cada objeto representa un
// producto con propiedades como nombre y precio.
// Tu tarea es crear un programa que:
// a. Reciba un array de objetos productos, donde cada objeto tiene propiedades
// nombre y precio.
// b. Utilice un bucle for...of para recorrer cada objeto en el array.
// c. Sume los precios de todos los productos en el carrito.
// d. Muestra el costo total acumulado, que será el monto que debe pagar el cliente
// por su compra.

// function calcularCostoTotal(productos) {
//     let costoTotal = 0;

//     for (let producto of productos) {
//       costoTotal += producto.precio;
//     }

//     console.log("El costo total de los productos en el carrito es: $" + costoTotal);
//   }

//   let carritoCompras = [
//     { nombre: "Camiseta oficial", precio: 80 },
//     { nombre: "Gorra conmemorativa", precio: 25 },
//     { nombre: "Balón de fútbol", precio: 50 },
//     { nombre: "Bufanda del equipo", precio: 20 },
//   ];

//   calcularCostoTotal(carritoCompras);

// Ejerccio 6:

// estás trabajando en el sistema de ventas de tickets para la Copa América. Tienes un
// array de objetos donde cada objeto representa un ticket disponible, con propiedades
// nombre (del evento) y disponible (un booleano que indica si el ticket está disponible
// o agotado).
// Tu tarea es escribir un programa que:
// a. Reciba un array de objetos tickets, donde cada objeto tiene propiedades
// nombre y disponible.
// b. Utilice un bucle for...of para recorrer cada objeto en el array.
// c. Genere un informe que muestre, para cada ticket, si está disponible o agotado.
// d. Presenta el nombre del evento seguido de su estado de disponibilidad.

let tickets = [
  {
    nombre: "Miley Cyrus",
    precio: 17.55,
    disponibilidad: true,
  },
  {
    nombre: "Maneskin",
    precio: 13.5,
    disponibilidad: false,
  },
];

function ticketsSystem(tickets) {
  for (let ticket of tickets) {
    let estado = ticket.disponible ? "Disponible" : "Agotado";
    console.log(`${ticket.nombre}: ${estado}`);
  }
}
// Ejercicio 7:
// Han decidido ofrecer un descuento especial del 15% en todas las categorías de tickets.
// Tenés un array de objetos donde cada objeto representa un ticket, con propiedades
// nombre (del tipo de ticket) y precio (el precio actual del ticket).
// Tu tarea es escribir una función que:
// a. Reciba un array de objetos tickets, donde cada objeto tiene propiedades
// nombre y precio.
// b. Utilice el método forEach para recorrer cada ticket en el array.
// c. Aplique un descuento del 15% al precio de cada ticket.
// Devuelve el array con los precios actualizados pero necesitamos un backup de los
// precios viejos

function aplicarDescuento(tickets) {
  const preciosOriginales = tickets.map((ticket) => ({
    nombre: ticket.nombre,
    precio: ticket.precio,
  }));

  tickets.forEach((ticket) => {
    ticket.precio = ticket.precio * 0.85;
  });

  return {
    preciosActualizados: tickets,
    preciosOriginales: preciosOriginales,
  };
}

aplicarDescuento(tickets)


// Como encargado de ajustar los precios de los videojuegos en Steam para una nueva
// región, debes convertir los precios a dólares y realizar ajustes basados en la
// popularidad de cada juego. Mantén una copia del precio original para referencia.
// Escribe una función que reciba:
// Un array de objetos juegos, donde cada objeto tiene propiedades nombre, precio, y
// popularidad.
// Una tasa de cambio a dólares.
// La función debe:
// a) Convertir los precios a dólares.
// b) Aplicar un ajuste adicional:
// i. $5 si la popularidad es 8 o más.
// ii. $2 si la popularidad es menos de 8.
// c) Calcular y mostrar el precio promedio de los juegos.
let listaJuegos = [
    { nombre: "Juego A", precio: 100, popularidad: 9 },
    { nombre: "Juego B", precio: 80, popularidad: 7 },
    { nombre: "Juego C", precio: 60, popularidad: 8 },
    { nombre: "Juego D", precio: 50, popularidad: 6 },
  ];
  let tasaDeCambio = 1.350
function ajustarPrecios(juegos, tasaDeCambio) {
    let sumaPrecios = 0;
  
    juegos.forEach(juego => {
      
      juego.precioOriginal = juego.precio;
  
      juego.precio = juego.precio * tasaDeCambio;
  
      if (juego.popularidad >= 8) {
        juego.precio += 5;
      } else {
        juego.precio += 2;
      }
  
      sumaPrecios += juego.precio;
    });
  
    let precioPromedio = sumaPrecios / juegos.length;
}


ajustarPrecios(listaJuegos, tasaDeCambio)