'use strict'

window.addEventListener('load', function() {
    console.log("DOM cargado");

    // JSON JavaScript Objet Notation: Así podemos recibir/enviar datos de una manera muy simple
    //Declaración
    let film = {
        title: 'Batman VS Superman',
        year: 2017,
        country: 'USA'
    };

    //Cómo accedo a las propiedades de mi objeto:
    console.log(film);
    console.log(`This movie is named ` + film.title + `, and it goes public in ` + film.year + ` in ` + film.country);

    //Cambiar sus propiedades:
    film.title = "Avengers"
    console.log(film);

    //También puede ser un array de objetos y añadirlos
    let catalog = [
        { title: 'La verdad duele', year: 2006, country: 'France' },
        film,
        { title: 'TENET', year: 2016, country: 'Italy' },
        { title: 'El silencio de los Corderos', year: 2009, country: 'France' }

    ];
    console.log(catalog);


    //Recorrer peliculas:
    let moviesBox = document.querySelector("#movies");
    for (let i in catalog) {
        let divMovie = document.createElement("div");
        divMovie.style.width = "35%";
        divMovie.style.textAlign = "left";
        divMovie.style.background = "#fff098";

        let p = document.createElement("p");

        p.append(catalog[i].title + '\t\t ' + catalog[i].year);
        divMovie.append(p);
        moviesBox.append(divMovie);
    }

});