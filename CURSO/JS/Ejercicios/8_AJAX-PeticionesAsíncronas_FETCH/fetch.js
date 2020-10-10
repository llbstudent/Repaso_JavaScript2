'use strict';

window.addEventListener('load', function() {
    let divUsuarios = document.querySelector("#usuarios");

    getUsuarios()
        .then(data => data.json()) //primera promesa: convertimos los datos a json usable
        .then(allData => {
            mostrarListadoDeUsuarios(allData.data);
        })

    //FUNCIONES
    //Obtiene la respuesta de la APIRes
    function getUsuarios() {
        return fetch('https://reqres.in/api/users');
    }

    //Obtiene sólo un usuario
    function getUsuario() {

    }

    //Función que nos crea el listado de usuarios
    function mostrarListadoDeUsuarios(usuarios) {
        //Recorremos con un 'map' en vez de con un 'for'
        usuarios.map((usuario, i) => {
            let nombreUsuarioParrafo = document.createElement('p');
            let avatar = document.createElement('img');

            nombreUsuarioParrafo.innerHTML = i + '. ' + usuario.first_name + ' ' + usuario.last_name;
            avatar.src = usuario.avatar;

            divUsuarios.appendChild(nombreUsuarioParrafo);
            divUsuarios.appendChild(avatar);
        });

    }
});