//EJERCICIOS SOBRE OPERACIONES CON ARRAYS

//1. Agregar y Eliminar Elementos:
console.log("\n1. Agregar y Eliminar Elementos:")
const frutas = ["manzana", "banana", "pera"];

console.log ("Array original:");
console.log(frutas);

console.log ("Array agregando naranja:");
frutas.push("naranja"); 
console.log(frutas);

console.log ("Array eliminando el ultimo:");
frutas.pop(); 
console.log(frutas);

//2. Array Bidimensional:
console.log("\n2. Array Bidimensional:")
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(`Elemento 5: ${matriz[1][1]}`)

//3. Iterar sobre un Array:
console.log("\n3. Iterar sobre un Array");

for(let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}

//4. Uso de map:
console.log("\n4. Uso de map:");
const elevarAlCuadrado = numeros => {
    return numeros.map(numero => numero * numero)
}

console.log(elevarAlCuadrado([1, 2, 3, 4]))

//5. Uso de filter:
console.log("\n5. Uso de filter: ");
function filtrarMayoresDe (numeros, referencia) {
    return numeros.filter(numero => numero > referencia);
}

console.log(filtrarMayoresDe([5, 10, 15, 20], 12))

//6. Uso de reduce:
console.log("\n6. Uso de reduce: ");
function sumarElementos (numeros) {
    return numeros.reduce((total, numero) => total + numero, 0);
}

console.log(sumarElementos([1, 2, 3, 4, 5]))

//7. Uso de some:
console.log("\n7. Uso de some: ");
const numeros = [2, 4, 6, 8, 12]
const resultadoSome = numeros.some(numero => numero > 10)

console.log(resultadoSome)

//8. Uso de every:
console.log("\n8. Uso de every: ");
const resultadoEvery = numeros.every(numero => numero > 0);

console.log(resultadoEvery)

//9. Uso de find:
console.log("\n9. Uso de find: ");
const personas = [
    { nombre: 'Sofía', edad: 19 },
    { nombre: 'Tomás', edad: 24 },
    { nombre: 'Valentina', edad: 31 },
    { nombre: 'Mateo', edad: 38 }
]

const persona = personas.find(persona => persona.edad > 30)

console.log(persona)

//10. Uso de sort:
console.log("\n10. Uso de sort: ");
const palabras = ['pera', 'manzana', 'banana', 'uva']

palabras.sort()
console.log(palabras)
