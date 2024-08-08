// let persona = {
//     nombre: "lautaro",
//     apellido: "fernandez",
//     edad: 18,
//     altura: 1.81,
//     esEstudiante: true,
//     amigos: ["maite"],
// }

// persona.nombre = "Maite"

// console.log(persona)

// persona["nombre"] = "pepito"

// console.log(persona)

// function getName(persona){
//     return {
//         nombre: persona.nombre,
//         apellido: persona.apellido
//     };
// }

let personaje = {
  name: "Gandalf",
  race: "Maiar",
  age: 55000,
  class: "Bard",
  weapon: " Foe-hammer",
};

personaje.ally = "Bladorthin";
personaje.age += 1;
personaje["age"] += 1;
console.log(personaje);

function ageIncrement(personaje) {
  if ("age" in personaje) {
    personaje.Edad += 1;
  }
}

function verifyAlly(personaje) {
  if ("ally" in personaje) {
    return personaje.ally.length === 10;
  }
  return false;
}

function verifyNameAlly(personaje) {
  return (
    "name" in personaje &&
    "ally" in personaje &&
    personaje.name === personaje.ally
  );
}

function describePersonaje(personaje) {
  let { name, age, weapon, race } = personaje;
  return `Name: ${name}, Age: ${age}, Weapon: ${weapon}, Race: ${race}`;
}

function verifyMayorDe100Anos(personaje) {
  if ("age" in personaje) {
    return personaje.age > 100;
  }
  return false;
}

function nameAge(personaje) {
  return {
    name: personaje.name,
    age: personaje.age,
  };
}

personaje.skills = ["Manejo de la luz", "Manejo del fuego"];

function skills(personaje, newSkill) {
  return personaje.skill.push(newSkill);
}

function verifySkills(skills) {}

function manySkills(personaje) {
  return personaje.skills.length;
}

personaje.allys = ["pepito", "candelita", "jaz"];

function addAlly(personaje, ally) {
  personaje.allys.push(ally);
  return (personaje.allys = [ally]);
}

function deleteAlly(personaje, ally) {
  personaje.allys = personaje.allys.filter((a) => a !== ally);
}

function allysNames(personaje) {
  return personaje.allys;
}

function weapons(personaje, newWeapon) {
  return personaje.weapons.push(newWeapon);
}

function tieneClase(personaje, clase) {
  return personaje.Clase === clase;
}

function haveClass(personaje, Class) {
  return personaje.class === Class;
}

function updatePersonaje(personaje, propiedad, newValue) {
  personaje[propiedad] = newValue;
  return personaje;
}
console.log(updatePersonaje(personaje, "edad", 18));
