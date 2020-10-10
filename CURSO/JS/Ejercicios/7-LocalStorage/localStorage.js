'use strict'

window.addEventListener('load', function() {
    console.log("DOM cargado");


    //Comprobar la disponibilidad del LocalStorage
    if (typeof(Storage) !== 'undefined') {
        console.log("LocalStorage disponible");
    } else {
        console.log("Incompatible con LocalStorage");
    }

    //Guardar datos (Mediante Clave - Valor)
    localStorage.setItem("titulo", "Curso de Symphony de VR");

    //Recuperar Elemento
    localStorage.getItem("titulo");
    console.log(localStorage.getItem("titulo"));


    //Guardar Objetos (JSON)
    // Se tienen que convertir los objetos JSON en String
    let user = {
        nombre: "Laura Lucena",
        email: "llb@gmail.com",
        web: "laupiceroArt.com"
    };

    //El propio navegador lo interpreta como un JSONString
    localStorage.setItem("usuario", JSON.stringify(user));

    //Recuperar Objeto. Hacemos otra conversion
    let ususarioRecuperado = JSON.parse(localStorage.getItem("usuario"));

    //Borrar un elemento
    localStorage.removeItem("usuario");

    //Limpiar el LocalStorage
    localStorage.clear();
});