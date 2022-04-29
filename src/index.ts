import "./styles.css";
const cantidadDeVueltas: number = 4;
let tiempoVueltaUno: number = Number(prompt("Ingrese tiempo de vuelta 1"));
let tiempoVueltaDos: number = Number(prompt("Ingrese tiempo de vuelta 2"));
let tiempoVueltaTres: number = Number(prompt("Ingrese tiempo de vuelta 3"));
let tiempoVueltaCuatro: number = Number(prompt("Ingrese tiempo de vuelta 4"));
let promedioVueltas =
  (tiempoVueltaUno + tiempoVueltaDos + tiempoVueltaTres + tiempoVueltaCuatro) /
  cantidadDeVueltas;
alert("El promedio de vueltas es: " + promedioVueltas);
