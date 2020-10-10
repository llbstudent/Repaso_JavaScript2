'use strict'

//Evento 'load':
window.addEventListener('load', () => {
    //---------------------
    //Eventos del ratón
    //---------------------
    let boton1 = document.querySelector("#boton1");

    //Evento 'click'
    boton1.addEventListener('click', function() {
        cambiarColor();
    });

    //Evento 'mouseover'
    // * THIS = hace referencia al elemento 'boton1'
    boton1.addEventListener('mouseover', function() {
        this.style.background = '#ccc';
    });

    //Funcioncita
    //click
    function cambiarColor() {
        let colorBCK = boton1.style.background;

        if (colorBCK == "red") {
            boton1.style.background = "blue";
        } else {
            boton1.style.background = "red";
        }

        boton1.style.padding = "10px";
        boton1.style.border = "1px solid #ccc";
    }

    //---------------------
    ///Otras
    //---------------------
    let inputNombre = document.querySelector("#campoNombre");

    //Focus
    inputNombre.addEventListener('focus', function() {
        console.log("Evento focus");
    });

    //Blur
    inputNombre.addEventListener('blur', function() {
        console.log("Evento blur, estás fiera del input");
    });

    //KeyDown
    inputNombre.addEventListener('keydown', function(event) {
        console.log("Evento 'keydown', pulsando tecla ", String.fromCharCode(event.keyCode));
    });

    // KeyPress
    inputNombre.addEventListener('keypress', function(event) {
        console.log("Evento 'keypress', tecla presionada: ", String.fromCharCode(event.keyCode));
    });

    //KeyUp
    inputNombre.addEventListener('keyup', function(event) {
        console.log("Evento 'keyup', tecla soltada: ", String.fromCharCode(event.keyCode));
    });

}); //Final del load, para que se carge primero la página