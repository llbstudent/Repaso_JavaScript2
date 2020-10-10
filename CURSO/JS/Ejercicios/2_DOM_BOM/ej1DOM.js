'use strict'

//Métodos/Funciones

//Funcion para llamar desde la consola
function cambioColor(color) {
    miCaja.style.background = color;
    miCaja.style.color = "black";
}

//Variables
let miCaja = document.getElementById("miCaja");
let interiormiCaja = document.getElementById("miCaja").innerHTML;

//Obtener por querySelector (más elegante):
let miCajaQry = document.querySelector("div"); //etiqueta
//let miCajaQry = document.querySelector("#miCaja"); //id
//let miCajaQry = document.querySelector(".miCaja"); //class

//Cambiar el interior de 'miCaja'
miCaja.innerHTML = "¡Texto en la caja desde JS!";

//Modificar estilo:
miCaja.style.background = "red";
miCaja.style.color = "yellow";

//Añadir clases a los elementos
miCaja.className = "cajaBasica cajitaFea"

//----------------------------------------
//Conseguir elementos por su etiqueta
let allDivs = document.getElementsByTagName('div');
console.log("Todos los div: \n" + allDivs);

//Ver todos los div (trasteo)
for (let index in allDivs) {
    console.log(index + " " + typeof allDivs[index] + " " + allDivs[index].innerText);

}

//Obtener contenido del '2' elemento del array de 'div':
let contenidoDiv2 = allDivs[2].innerHTML;
let contenidoDiv2Modif = "Me han modificado el texto, pero sigo siendo el segundo";
allDivs[2].innerHTML = contenidoDiv2Modif;
//testeo
console.log(allDivs[2]);


//Capturamos el elemento 'section' y nos creamos un elemento 'hr'
let seccion = document.querySelector("#miSeccion");
let hrEtiqueta = document.createElement("hr");

//Recorremos el array con todos los elementos
for (let valor in allDivs) {
    if (typeof(allDivs[valor]).textContent === 'string' || valor === 0) {
        //document.write(valor);
        let parrafo = document.createElement("p");
        let texto = document.createTextNode(valor + " " + allDivs[valor].textContent);

        parrafo.append(texto);
        seccion.append(parrafo);
    }
}
seccion.append(hrEtiqueta);


//Conseguir elementos por su clase css
let divsRojos = document.getElementsByClassName('rojo');

console.log(divsRojos.length);

for (let index in divsRojos) {
    if (divsRojos[index].className == "rojo") {
        divsRojos[index].style.background = "red";
        console.log(index + " " + divsRojos[index].innerHTML) //Sacalo fuera del consicional
    }
}