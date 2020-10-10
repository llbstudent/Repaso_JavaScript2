'use strict'

//Acceder a las dimensiones de la pantalla del navegador
function getBom() {
    console.log("Altura: " + window.innerHeight); //screen.height
    console.log("Anchura" + window.innerWidth); //screen.width

    console.log(window.location);
    console.log(window.location.href);
}

//Redireccionar
function redirect(url) {
    window.location.href = url;
}

//Abrir Pestaña
function abrirNuevaVentana_Pestanna(url) {
    //Pestanna
    window.open = url;

    //Ventana
    window.open = (url, "", "width=500, height=800");
}