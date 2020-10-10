'use strict'

window.addEventListener('load', function() {
    console.log("DOM cargado");

    //Capturamos el formulario
    let formulario = document.querySelector("#formulario");
    //Div donde mostraremos los datos
    let divUserData1 = document.querySelector("#datosUsuario1");
    let divUserData2 = document.querySelector("#datosUsuario2");
    //Ocultamos los div
    divUserData1.style.display = "none";
    divUserData2.style.display = "none";

    formulario.addEventListener('submit', function() {
        divUserData1.innerHTML = "<h5>Información del usuario</h5>";

        let nombre = document.querySelector("#nombre").value.trim();
        let apellidos = document.querySelector("#apellidos").value.trim();
        let edad = parseInt(document.querySelector("#edad").value.trim());

        let datosUsuario = [nombre, apellidos, edad];

        // Si están rellenos los campos
        if ((nombre != null || nombre.length > 0) &&
            (apellidos != null || apellidos.length > 0) &&
            (edad != null || edad.length > 0 || !isNaN(edad))) {

            console.log(nombre, nombre.length);

            //Primer div
            divUserData1.style.display = "block";

            for (let i in datosUsuario) {
                let parrafo = document.createElement("p");
                parrafo.append(datosUsuario[i]);
                divUserData1.append(parrafo);
            }


            //Segundo div
            divUserData2.style.display = "block";

            let spanNombre = document.querySelector("#pNombre span");
            let spanApellidos = document.querySelector("#pApellidos span");
            let spanEdad = document.querySelector("#pEdad span");

            //Cambiamos el contenido de la etiqueta
            spanNombre.innerHTML = nombre;
            spanApellidos.innerHTML = apellidos;
            spanEdad.innerHTML = edad;

        } else {
            console.log(nombre, nombre.length);
            alert("Rellene todos los campos");

            document.querySelector("#errorUsuario").innerHTML = "Los datos no son válidos"
        }
    });
});