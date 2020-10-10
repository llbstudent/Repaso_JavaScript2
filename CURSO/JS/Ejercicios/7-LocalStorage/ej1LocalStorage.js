'use strict'

window.addEventListener('load', function() {
    console.log("DOM cargado");

    let formulario = document.querySelector("#formPeliculas");

    //Evento añadir película
    formulario.addEventListener('submit', function() {
        let tituloPelicula = document.querySelector('#tituloPelicula').value;

        if (tituloPelicula.length >= 1 || tituloPelicula !== undefined ||
            tituloPelicula !== null || tituloPelicula !== '') {

            localStorage.setItem(tituloPelicula, tituloPelicula);
        }
        mostrarListadoPeliculas();
    });

    //Evento para borrar película
    let btnBorrar = document.querySelector("#borrarPelicula");

    btnBorrar.addEventListener('click', function() {
        let tituloPelicula = document.querySelector('#tituloPelicula').value;

        if (tituloPelicula.length >= 1 || tituloPelicula !== undefined ||
            tituloPelicula !== null || tituloPelicula !== '') {
            localStorage.removeItem(tituloPelicula);
        }
        location.reload();
        //mostrarListadoPeliculas();
    });


    //Acción de mostrar películas
    mostrarListadoPeliculas();

    //funcion
    function mostrarListadoPeliculas() {
        // Las mostramos desde el localStorage
        let ulPeli = document.querySelector("#listPelis");

        for (let i in localStorage) {
            console.log(localStorage[i]);

            if (typeof localStorage[i] == 'string') {
                let liElement = document.createElement("li");
                liElement.append(localStorage[i]);
                ulPeli.append(liElement);
            }
        }
    }
});