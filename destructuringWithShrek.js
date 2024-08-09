// Destructuring con Shrek

// Parte 1

// Crear un objeto con las propiedades nombre y especie de Shrek, y luego extraer esas propiedades con destructuring.
let character = {
    name: "Shrek",
    age: 70,
    species: "Ogre",
    friends: ["Burro", "Fiona"],
    }


// let { name, species} = character

console.log(name);
console.log(species);

// Crear un objeto con las propiedades nombre, edad, y especie de Burro, y luego extraer nombre y edad con alias nombrePersonaje y edadPersonaje respectivamente.

let characterTwo = {
    name1: 'Burro',
    age1: '10',
    species1: 'Asno',
}

let { name1: nombrePersonaje, age1: edadPersonaje} = characterTwo

console.log(nombrePersonaje),
console.log(edadPersonaje)

// Crear un objeto con las propiedades nombre y especie de Fiona, y luego extraer nombre y asignar un valor predeterminado de 'desconocida' a ocupacion.

let characterThree = {
    name2: 'Fiona',
    species2: 'Ogra',
}

let { name2, ocupacion = 'Desconocida'} = characterThree

// Crear un objeto con las propiedades nombre, especie, y edad de Shrek, y luego usar destructuring en los parámetros de una función para extraer nombre y especie.

function showCharacter({ name, species, age}){
    console.log( `Mi personaje es ${name}, su especie es ${species} y tiene ${age} anos.`);
}

showCharacter(character);

// Crear un objeto con las propiedades nombre, especie, edad, y amigos de Shrek, y luego extraer nombre, especie, y amigos, asignando un valor predeterminado de [] a enemigos si no existe.

// let { name, species, age, friends, enemies = 'No tiene'} = character

// Crear un objeto con las propiedades nombre, especie, edad, y amigos de Shrek, y luego extraer nombre y amigos, y luego extraer el primer amigo.

let { name, friends} = character
let [friedn1] = friends

// Crear un array de objetos con las propiedades nombre y edad de Shrek, Burro, y Fiona, y luego extraer nombre y edad de cada objeto en el array. Ponerle un alias adecuado a cada uno.

let characters = [ character, characterTwo, characterThree]
let [{name: nameShrek, age: ageShrek},
    {name1: nameBurro, age1: ageBurro},
    {name2: nameFiona, age2: ageFiona}]
    = characters

// Parte 2

// Crear un objeto shrek con las propiedades nombre, especie, edad, y amigos (que es un array de objetos con propiedades nombre y especie). Luego extraer nombre, especie, y los nombres de los amigos.
let character4 = {
    nombre: "shrek",
    especie: "ogro",
    edad: 50,
    amigos:[(
        amigo1 = {
            nombre: 'burro',
            especie: 'burro'
        }
    ),(
        amigo2 = {
            nombre: 'Fiona',
            especie: 'Ogra'
        }
    )]
}

// let {nombre, especie, amigos:[{nombre: primerAmigo},{nombre: segundoAmigo}]} = character4

// Crear un objeto pelicula con las propiedades titulo, año, y personajes (que es un array de objetos con propiedades nombre, especie, y rol). Luego extraer el título de la película y los nombres de los personajes principales (aquellos cuyo rol sea 'principal').
let pelicula = {
    titulo: 'Tron',
    ano: 2010,
    personajes:[
        ( persona1 = {
            nombre: 'SamFlyn',
            especie: 'Humano',
            rol: 'principal'
        } ),
        (persona2 = {
            nombre: 'Quora',
            especie: 'ISO',
            rol: 'principal'
        })
    ]
}

let { titulo, personajes: personajes1} = pelicula

personajes1 = personajes1.filter(function(personaje){
    return personaje.rol == "principal";
});
let personajesNombres = [];
personajes1.map(function (personaje) {
    personajesNombres.push(personaje.name);
});


// Crear un objeto misiones con las propiedades titulo, año, y detalles (que es un objeto con propiedades misionPrincipal y misionSecundaria, ambos con propiedades descripcion y personajes (que es un array de nombres)). Luego extraer la descripción de la misión principal y los nombres de los personajes de la misión secundaria.

let objeto = {
    titulo: "Garfield",
    ano: "2009",
    detalles: {
        misionPrincipal:{
            descripcion:"Comerse todo",
            personajes:["personaje1","personaje2","personaje3"]
        },
        misionSecundaria:{
            descripcion:"No ser atrapado",
            personajes:["personaje1","personaje2","personaje3"]
        }
    }
}

let { detalles:{misionPrincipal:{descripcion}}, detalles:{misionSecundaria:{personajes}}} = objeto

// Crear un objeto evento con las propiedades nombre, fecha, y invitados (que es un array de objetos con propiedades nombre, especie, y confirmado (booleano)). Luego extraer el nombre del evento y los nombres de los invitados confirmados.
let evento = {
    nombre: "Mi cumple",
    fecha: "07/11/2005",
    invitados: [(invitado1 = {
        nombre: "Lautaro",
        especie: "Humano",
        confirmado: true
    }),(invitado2 = {
        nombre: "Malena",
        especie: "Humano",
        confirmado: false
    })]
}

let { nombre, invitados: invitadosC } = evento

invitadosC = invitadosC.filter(function(invitado){
    return invitado.confirmado == true ;
});
let invitadosConfirmados = [];
invitadosC.map(function (invitado) {
    invitadosConfirmados.push(invitado.nombre);
});


// Crear un objeto banda con las propiedades nombre, genero, y miembros (que es un array de objetos con propiedades nombre, instrumento, y experiencia (en años)).
//  Luego extraer el nombre del género y los instrumentos de los miembros con más de 5 años de experiencia.


let banda = {
    nombre:"Imagine Dragons",
    genero:"pop-rock",
    miembros: [(miembro1 = {
        nombre:"Dan Reynolds",
        instrumento:"Piano",
        experiencia: 15,
    }),(miembro2 = {
        nombre:"Daniel Platzman",
        instrumento:"Bateria",
        experiencia: 13,
    })]
}

let {genero, miembros } = banda

miembros = miembros.filter(function(miembro){
    return miembro.experiencia > 5;
});

let miembrosExperimentados = [];
miembros.map(function(miembro){
    miembrosExperimentados.push(miembro.nombre);
})


// Parte 3

// Crear una función crearPareja que reciba dos objetos ogro y princesa y devuelva un nuevo objeto pareja combinando sus propiedades, renombrando nombre a nombreOgro y nombrePrincesa. Además, si la edad de cualquiera de ellos es mayor a 28, agregar un array misiones con una misión inicial.
let ogro = {
    name: "Shrek",
    age: 30
}
let princesa = {
    name: "Fiona",
    age: 31
}
function crearPareja(ogro, princesa){
    let { name: ogroName, age: ogroAge} = ogro;
    let { name: princesaName, age: princesaAge} = princesa;
    let pareja = {ogroName, ogroAge, princesaName, princesaAge};
    if (verEdad(pareja)){
        pareja = anadirMision(pareja);
    }
    return pareja;
}

function anadirMision(pareja){
    pareja.mision = ["Mision Nueva"];
    return pareja
}

function verEdad({ogroAge, princesaAge}){
    return ogroAge > 18 || princesaAge > 18;
}

// Crear una función unirPersonajes que reciba un array de objetos personajes y devuelva un nuevo objeto alianza con propiedades nombres (un array de los nombres de los personajes) y reinos (un array de los reinos de los personajes). Además, si cualquier personaje pertenece al reino 'Pantano', agregar 'Pantano' a un array lugaresImportantes.
let personajes3 = [
    { nombre: 'Shrek', reino: 'Pantano' },
    { nombre: 'Fiona', reino: 'Duloc' },
    { nombre: 'Burro', reino: 'Pantano' }
  ];
  
function unirPersonajes(personajes3){

}
// Crear una función resumenPersonajes que reciba un array de objetos personajes donde cada objeto tiene una propiedad info que a su vez es un objeto con propiedades nombre, edad, y reino. Devuelve un nuevo objeto resumen con propiedades nombres (array de nombres) y edadesMayores (array de edades mayores a 30). Si algún personaje tiene edad mayor a 40, agregar 'mayoresDe40' a un array categorias.

// Parte 4. Agregamos spread operator

// Crea una función agregarHobbies que reciba dos objetos persona y nuevosHobbies. El objeto persona tiene propiedades nombre, edad, y hobbies (un array de hobbies). El objeto nuevosHobbies tiene una propiedad hobbies que también es un array de nuevos hobbies. Usa el spread operator para combinar el array hobbies de persona con el array hobbies de nuevosHobbies en un nuevo objeto personaActualizada. Devuelve personaActualizada.
// Crea una función actualizarDatos que reciba dos objetos datosPersonales y datosContacto. El objeto datosPersonales tiene propiedades nombre y edad, y el objeto datosContacto tiene propiedades direccion y telefono. Usa el spread operator para combinar ambos objetos en un nuevo objeto informacionCompleta. Devuelve informacionCompleta.
// Crea una función agregarCaracteristicas que reciba dos objetos vehiculo y caracteristicas. El objeto vehiculo tiene propiedades marca y modelo, y el objeto caracteristicas tiene propiedades color y tipo. Usa el spread operator para combinar estos objetos en un nuevo objeto vehiculoCompleto. Devuelve vehiculoCompleto, agregando las propiedades de caracteristicas solo si el color es 'rojo'.
// Crea una función eliminarTelefono que reciba un objeto persona y elimine explícitamente la propiedad telefono del objeto. Usa el spread operator para crear un nuevo objeto personaSinTelefono que contenga todas las propiedades del objeto original persona excepto telefono. Devuelve personaSinTelefono.

// Parte 5

// Crea una función combinacionPersonajes que reciba dos objetos personajes1 y personajes2, donde personajes1 tiene propiedades nombre y habilidades (un array de habilidades), y personajes2 tiene propiedades nombre y atributos (un objeto con fuerza y destreza). Usa el spread operator para combinar habilidades y atributos en un solo objeto informacion, y devuelve un nuevo objeto con el nombre y el objeto informacion combinado.
// Crea una función combinarClientes que reciba dos objetos cliente1 y cliente2, donde cliente1 tiene propiedades nombre y datos (un objeto con edad y direccion), y cliente2 tiene propiedades nombre y informacion (un objeto con telefono y email). Usa el spread operator para combinar datos y informacion en un solo objeto perfilCompleto, y devuelve un nuevo objeto con el nombre y el objeto perfilCompleto.
// Crea una función actualizarPerfil que reciba dos objetos usuario y detalles. El objeto usuario tiene propiedades nombre, edad, y colorFavorito, y el objeto detalles tiene propiedades direccion y telefono. Usa el spread operator para actualizar usuario con direccion y telefono de detalles, pero solo si la edad del usuario es mayor de 25. Si la edad es 25 o menor, establece valores predeterminados para direccion y telefono en el objeto resultante. Devuelve el objeto usuarioActualizado.
// Crea una función actualizarInfo que reciba dos objetos usuario y detalles, y un array de palabrasClave. El objeto usuario tiene propiedades nombre, edad, y colorFavorito, y el objeto detalles tiene propiedades direccion, telefono, y ocupacion. El array palabrasClave contiene una lista de palabras que pueden estar presentes en el campo colorFavorito de usuario. Usa el spread operator para actualizar el objeto usuario con direccion, telefono, y ocupacion de detalles solo si el colorFavorito de usuario está presente en palabrasClave. Si el colorFavorito no está en palabrasClave, establece valores predeterminados para direccion, telefono, y ocupacion. Devuelve el objeto usuarioActualizado.
