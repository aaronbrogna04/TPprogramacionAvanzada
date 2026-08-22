// EJERCICIOS SOBRE OBJETOS
// 1. Creacion de un objeto

const libro = {
    titulo: "Titulo libro",
    autor: "Autor libro",
    anioDePublicacion: 1234

};

console.log("1. Creacion de un objeto");
console.log(libro.titulo);
console.log(libro.autor);
console.log(libro.anioDePublicacion);

// 2. Anidación de objetos
const estudiante = {
    nombre: "Nombre Estudiante",
    edad: 21,
    direccion: {
        calle: "Nombre Calle",
        ciudad: "Concepcion del Uruguay",
        pais: "Argentina"

    }
};

console.log("\n2. Anidacion de Objetos");
console.log(estudiante.direccion.calle);
console.log(estudiante.direccion.ciudad);
console.log(estudiante.direccion.pais);