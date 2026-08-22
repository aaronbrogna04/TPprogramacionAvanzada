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

// Actualizacion de propiedades
console.log("\n5. Actualizacion de propiedades");
console.log("Precio anterior: " + producto.precio);

producto.precio = 2000000

console.log("Precio actual: " + producto.precio);

// 6. Comprobacion de propiedades
function tienePropiedad(objeto, propiedad) {
    return propiedad in objeto;
}

console.log("\n6 Comprobacion de propiedades");

console.log("Tiene propiedad marca: "+ tienePropiedad(producto, "marca"));
console.log("Tiene propiedad precio: "+ tienePropiedad(producto, "precio"));

//7.Eliminacion de propiedades
console.log("\n Eliminacion de propiedades");
console.log("Objeto antes de eliminacion");
console.log(producto);

delete producto.disponible;

console.log("Objeto despues de eliminacion");
console.log(producto);

//8. Combinar objetos
const persona1 = {
    nombre: "Juan",
    edad:23
};

const persona2 = {
    nombre: "Tomas",
    edad: 25
};

const personaCompleta = Object.assign({}, persona1, persona2);

console.log("\n8. Combinar objetos");
console.log(personaCompleta);

//9. Copiar objetos
console.log("\n9. Copia de objetos")
const estudianteCopia = JSON.parse(JSON.stringify(estudiante));

estudianteCopia.nombre = "Ramiro";
estudianteCopia.edad = 27

console.log("\nEstudiante original:");
console.log(estudiante);

console.log("Estudiante copia:");
console.log(estudianteCopia);

//10. Metodos Getters y Setters
const libroCopia = JSON.parse(JSON.stringify(libro));

libroCopia.anio = libroCopia.anioDePublicacion;

Object.defineProperty(libroCopia, "añoDePublicacion", {
    get() {
        return this.anio;
    },

    set(nuevoAño) {
        this.anio = nuevoAño;
    }
});

console.log("\n10. Getters y Setters");

console.log("Año original:", libroCopia.añoDePublicacion);

libroCopia.añoDePublicacion = 1950;

console.log("Año modificado:", libroCopia.añoDePublicacion);
