var nombre1 = document.getElementById("nombre1");
var nombre2 = document.getElementById("nombre2");
var resultat = document.getElementById("resultat");
var addition = document.getElementById("addition");
var multiplication = document.getElementById("multiplication");
var soustraction = document.getElementById("soustraction");
var division = document.getElementById("division");

addition.onclick = () => {
  resultat.value = parseInt(nombre1.value) + parseInt(nombre2.value);
};
multiplication.onclick = () => {
  resultat.value = parseInt(nombre1.value) * parseInt(nombre2.value);
};
soustraction.onclick = () => {
  resultat.value = parseInt(nombre1.value) - parseInt(nombre2.value);
};
division.onclick = () => {
  resultat.value = parseInt(nombre1.value) / parseInt(nombre2.value);
};
