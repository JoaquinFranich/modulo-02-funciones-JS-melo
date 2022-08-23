let nombre = "";
let edad = 13;

function saludar(nombre) {
  alert("Hola " + nombre);
  console.log(edad);
}

saludar("Pedro");
saludar("Juan");
console.log(edad);

let persona = {
  nombre: "Juan",
  edad: 29,
  mascotas: ["perro", "gato"],
};

persona.sexo = "M";
persona.edad = 22;
persona.mascotas[0] = "tortuga";
console.log(persona);

//PROMESAS ---------------------------------
console.log("antes de promesa...");
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(), 5000);
}).then((resp) => {
  console.log("termino timeout...");
});
console.log("despues de promesa...");

//ESTRUCTURA   JSON---------------------------------
var typePoints = [
  //key: value
  {
    id: 001, //numer
    label: "String", //string
    otherLanguage: ["C++", "Java", "Python"], //Array
    theBest: true, //Boolean
  },
  {
    id: 002, //numer
    label: "String", //string
    otherLanguage: ["C++", "Java", "Python"], //Array
    theBest: true, //Boolean
  },
  {
    id: 003, //numer
    label: "String", //string
    otherLanguage: ["C++", "Java", "Python"], //Array
    theBest: true, //Boolean
  },
  {
    id: 004, //numer
    label: "String", //string
    otherLanguage: ["C++", "Java", "Python"], //Array
    theBest: true, //Boolean
  },
];
