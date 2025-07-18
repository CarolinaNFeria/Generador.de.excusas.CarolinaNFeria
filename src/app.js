import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

  let sujetos = ["Superman", "El chavo del ocho", "Mi novio", "Un ovni"];
  let acciones = ["vendió", "rompió", "quemó", "perforó"];
  let que = ["la tarea", "las llaves", "el brincolin", "mi teléfono"];
  let circunstancias = ["justo antes de venir","con un rayo laser","resbalando por la montaña","en medio de la tormenta"];
 
function numeroAleatorio (a,b) {
  return Math.floor(Math.random() * (b - a) + a);
}

function esAleatorio(AnyArray) {
  let max = AnyArray.length = 4;
  let min = 0;
  console.log(min, max, AnyArray)
  let Aleatorio = numeroAleatorio(min,max);
  return AnyArray[Aleatorio];
}

window.onload = function() {
  console.log();
document.querySelector("#titulo").innerHTML = esAleatorio(sujetos) + " " + esAleatorio(acciones) + " " + esAleatorio(que) + " " + esAleatorio(circunstancias);
};