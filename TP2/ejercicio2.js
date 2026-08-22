// EJERCICIOS SOBRE FUNCIONES
//1. funcion suma
function sumar (numero1, numero2) {
    return numero1 + numero2
}

let num1 = 3;
let num2 = 4;

console.log("1. Funcion suma");
console.log(num1 + " + " + num2 + " = " + sumar(num1, num2));

//2. Funcion que multiplica
function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}

console.log("\n2. Funcion multiplicar");
console.log(num1 + " x " + num2 + " = " + multiplicar(num1, num2));

//3. Funcion con parametro por defecto
function saludar(nombre = "Invitado") {
    return `Hola ${nombre}`;
}

console.log("\n3. Parámetro por Defecto");
console.log(saludar());

//4. Funcion que devuelve un objeto
function crearPersona(nombre, edad) {
    return {
        nombre,
        edad
    };
}

console.log("\n4. Función que Devuelve un Objeto");

const persona = crearPersona("Juan", 25);

console.log(persona);

//Funcion que modifica objeto
function actualizarEdad(persona, nuevaEdad) {
    persona.edad = nuevaEdad;
}

console.log("\n5. Función que Modifica un Objeto");
console.log("Antes:", persona);

actualizarEdad(persona, 30);

console.log("Después:", persona);

//6. Funcion recursiva.
function factorial(numero) {

    if (numero === 0) {
        return 1;
    }

    return numero * factorial(numero - 1);
}

let numero = 5;

console.log("\n6. Función Recursiva");
console.log(`Factorial de ${numero}:`, factorial(5));


//7. Funcion con funcion interna
function despedir() {

    function adios() {
        return "Adiós";
    }

    return adios();
}

console.log("\n7. Función con Función Interna");
console.log(despedir());

//8. Funcion que usa otra funcion
function duplicar(numero) {
    return numero * 2;
}

function procesarArray(array, funcion) {

    for (let elemento of array) {
        console.log(funcion(elemento));
    }
}

console.log("\n8. Función que Usa Otra Función");

const numeros = [1, 2, 3, 4, 5];

procesarArray(numeros, duplicar);

//9. Funcion que devuelve otra funcion
function crearMultiplicador(x) {

    return function(numero) {
        return numero * x;
    };
}

console.log("\n9. Función que Devuelve Otra Función");

const multiplicarPor3 = crearMultiplicador(3);

console.log(multiplicarPor3(5));

//10. Funcion anonima
const sumarAnonima = function(numero1, numero2) {
    return numero1 + numero2;
};

console.log("\n10. Función Anónima");
console.log(sumarAnonima(8, 4));