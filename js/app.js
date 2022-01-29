/*
0. Mensaje: Esta es una una herramienta de cotizado web para programadores
1. Preguntar: Programador ¿Cual es tu nombre?
2. Preguntar: ¿Cuantas paginas tendrá el sitio web?
3. Preguntar: ¿Cual es el costo de cada página?
3. Calcular:  Costo de pagina x cantidad de paginas
4. Resultado: El costo de tu web será x
*/
let boton = document.getElementById("boton");

const cotizador = () => {
// Primera Parte
alert("Bievenido a Asthar Desig -  Desarrollo Web");
let nombre = prompt("Escriba aquí su nombre");
alert("Los sitios web tienen secciones: Inicio, Nosotros, Galeria entre otros..");
let cantidad = parseInt(prompt("¿Cuantas paginas tendrá el sitio web a cotizar? Escribe un número"));
alert("Cada seccion tiene un costo predefinido entre los 50.000 y 300.000 COP, define tu presupuesto");

//Resultado
let costounidad = parseInt(prompt("¿Cual es el costo aproximado de cada página que puedes asumir de acuerdo a lo anterior?"));

//Operacion Matematica
let resultado = cantidad * costounidad;

//mensaje
alert("Hola " + nombre + " El costo aproximado que puedes pagar por tu web es: " + resultado + " COP");

//Descuento
let operacion = (resultado/100) *10;
let descuento = resultado - operacion;

// Suerte
alert("Ahora juegos algo interesante :D");
alert("Obtén 10% de descuento en tu web si adivinas el nombre de alguna sección popular de una web");
alert("Prueba tu suerte, escribe el nombre de una sección, ejemplo: Inicio, Nostros, etc");
let seccion = prompt("Escribe el nombre de una sección");

// Ruleta
switch (seccion) {
    case "Contactenos":
        alert ("Has ganado un 10% de descuento sobre el valor de tu web, felicidades!");
        alert ("tu nuevo valor es" + descuento + " COP");
        break;
    
    case "Galeria":
        alert ("Has ganado un 10% de descuento sobre el valor de tu web, felicidades!");
        alert ("tu nuevo valor es" + descuento + " COP");
        break;    

    default:
        alert("Lo siento, tienes mala suerte, será a la proxima, adiós.");
        break;
}
}

boton.onclick = function () {
    cotizador();
}





