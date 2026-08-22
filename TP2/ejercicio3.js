//Ejercicios sobre Funciones (Consumo de Datos,
//Mapeo de Información, Autenticación de Usuarios)

//1. Consumo de datos desde una API
async function obtenerUsuarios() {

    const respuesta = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    return await respuesta.json();
}

//2. Procesamiento de Datos de una API
async function imprimirNombresDeUsuarios() {

    const respuesta = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    const datos = await respuesta.json();

    datos.forEach(usuario => {
        console.log(usuario.name);
    });
}

//3. Autenticación Simulada
function autenticarUsuario(usuarioIngresado) {

    const usuarioRegistrado = {
        usuario: "admin",
        password: "1234"
    };

    if (
        usuarioIngresado.usuario === usuarioRegistrado.usuario &&
        usuarioIngresado.password === usuarioRegistrado.password
    ) {
        return true;
    }

    return false;
}

//4. Transformación de Datos
function mapearUsuarios(listaUsuarios) {

    return listaUsuarios.map(usuario => {
        return {
            nombre: usuario.name,
            email: usuario.email
        };
    });
}

//5. Validacion de formularios
function validarFormulario(datosFormulario) {

    if (
        datosFormulario.nombre &&
        datosFormulario.email &&
        datosFormulario.password
    ) {
        return true;
    }

    return false;
}

//6. Paginación de Datos
function obtenerPagina(datos, numeroPagina) {

    const limite = 5;

    const inicio = (numeroPagina - 1) * limite;

    return datos.slice(
        inicio,
        inicio + limite
    );
}

//7. Envío de Datos a una API
async function enviarDatos(datos) {

    const respuesta = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datos)
        }
    );

    const resultado =
        await respuesta.json();

    console.log(resultado);
}

//8. Búsqueda de Usuarios
function buscarUsuarioPorEmail(listaUsuarios, emailBuscado) {

    return listaUsuarios.find(
        usuario =>
            usuario.email === emailBuscado
    );
}

//9. Generación de Token
function generarToken(usuario) {

    const token =
        btoa(JSON.stringify(usuario));

    return token;
}

//10. Actualización de Información del Usuario
function actualizarUsuario(usuario, nuevosDatos) {
    return {
        ...usuario,
        ...nuevosDatos
    };
}


async function main() {

    console.log("1. Consumo de datos desde una API");
    const usuarios = await obtenerUsuarios();
    console.log(usuarios);
    
    console.log("\n2. Procesamiento de Datos de una API");
    await imprimirNombresDeUsuarios();
    
    console.log("\n3. Autenticación Simulada")
    console.log(
    autenticarUsuario({
        usuario: "admin",
        password: "1234"
    }));
        console.log(
    autenticarUsuario({
        usuario: "admin",
        password: "11234"
    }));

    console.log("\n4. Transformacion de datos");
    obtenerUsuarios().then((usuarios)=>{
        console.log(mapearUsuarios(usuarios))
    });

    console.log("\n5. Validación de Formularios");
    console.log(
        validarFormulario({
            nombre: "Juan",
            email: "juan@gmail.com",
            password: "1234"
        })
    );

    console.log("\n6. Paginación de Datos")
    const numeros = [
        1,2,3,4,5,6,7,8,9,10
    ];

    console.log(
        obtenerPagina(numeros, 1)
    );

    console.log(
        obtenerPagina(numeros, 2)
    );

    console.log("\n7. Envío de Datos a una API")
    enviarDatos({
        name: "Nombre Prueba",
        username: "prueba",
        email: "prueba@gmail.com",
        id: 11
    });

    console.log("\n8. Búsqueda de Usuarios")
    obtenerUsuarios().then(
        usuarios => {
            console.log(
                buscarUsuarioPorEmail(usuarios, "Karley_Dach@jasper.info")
            );
        }
    );

    console.log("\n9. Generación de Token")
    console.log(
        generarToken({
            usuario: "admin"
        })
    );

    console.log("\n10. Actualización de Información del Usuario")
    console.log(actualizarUsuario({
        nombre: "Juan",
        edad: 20
    },
    {
        edad: 21,
        ciudad: "Colón"
    }))
    
}

main();