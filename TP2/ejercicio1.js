// EJERCICIOS SOBRE OBJETOS
// 1. Creacion de un objeto

const libro = {
    titulo: "Titulo",
    autor: "Autor",
    anioDePublicacion: 1234

};

console.log("1. Creacion de un objeto");
console.log(libro.titulo);
console.log(libro.autor);
console.log(libro.anioDePublicacion);

// 2. Anidación de objetos
const estudiante = {
    nombre: "Pepe Perez",
    edad: 21,
    direccion: {
        calle: "Av. Peron",
        ciudad: "Concepcion del Uruguay",
        pais: "Argentina"

    }
};

console.log("\n2. Anidacion de Objetos");
console.log("Estudiante: " + estudiante.nombre);
console.log("Dirección: " + estudiante.direccion.calle + " " + estudiante.direccion.ciudad + ", " + estudiante.direccion.pais);

// 3. Metodos en Objetos
libro.descripcion = function() {
    return "El libro " + this.titulo + " fue escrito por " + this.autor;
};

console.log("\n3.Metodos en Objetos");
console.log(libro.descripcion());

// 4. Iteracion sobre propiedades de un objeto.
const producto = {
    nombre: "Notebook",
    precio: 1500000,
    disponible: true
};

console.log("\n4. Iteracion sobre propiedades de un objeto")

for (let propiedad in producto) {
    console.log(propiedad + ": " + producto[propiedad]);
}