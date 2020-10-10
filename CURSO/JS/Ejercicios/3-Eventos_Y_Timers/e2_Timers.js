'use strict'

//Para que primero carge todos los elementos del DOM
window.addEventListener('load', function() {
    let btnStart = document.querySelector("#start");
    let btnStop = document.querySelector("#stop");
    let intervaloPagina = init_Intervalo();

    //Evento para iniciar el intervalo
    btnStart.addEventListener('click', function() {
        alert("Intervalo iniciado");
        init_Intervalo();
    });


    //Evento para parar el intervalo
    btnStop.addEventListener('click', function() {
        alert("Has parado el intervalo");
        clearInterval(intervaloPagina);
    });


    //Función
    function init_Intervalo() {
        //Se realiza 'X' función cada 2000miliSeg
        //SetInterval - Se realiza en un interválo
        //SetTimeOut - Sólo una vez/Cuenta atrás
        let intervalo = setInterval(function() {
            console.log("Ejecutando cada 2seg");

            let encabezado = document.querySelector("h1");

            if (encabezado.style.color == "green") {
                encabezado.style.fontSize = "35px";
                encabezado.style.color = "red";
                console.log(encabezado.style.color + ' ' + encabezado.style.fontSize);

            } else {
                encabezado.style.fontSize = "60px"
                encabezado.style.color = "green";
                console.log(encabezado.style.color + ' ' + encabezado.style.fontSize);
            }
        }, 2000);

        return intervalo;
    }
});