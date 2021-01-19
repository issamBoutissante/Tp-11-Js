var jours = [
  "dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "samedi",
];
function afficher() {
  document.write(jours[new Date().getDay()]);
}
