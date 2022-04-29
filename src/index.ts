import "./styles.css";
const cantidadDeVueltas: number = 4;
let vueltaUno: number = Number(prompt("Ingrese vuelta 1"));
let vueltaDos: number = Number(prompt("Ingrese vuelta 2"));
let vueltaTres: number = Number(prompt("Ingrese vuelta 3"));
let vueltaCuatro: number = Number(prompt("Ingrese vuelta 4"));
let promedioVueltas =
  (vueltaUno + vueltaDos + vueltaTres + vueltaCuatro) / cantidadDeVueltas;
alert("El promedio de vueltas es: " + promedioVueltas);
