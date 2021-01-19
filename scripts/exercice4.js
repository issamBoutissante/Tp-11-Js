document.getElementById("text").onkeydown = (e) => {
  var length = e.target.value.length;
  if (length > 60) {
    e.preventDefault();
    return alert("le text ne doit pas contenir plus de 60 caracteres");
  }
  document.getElementById("nombreRest").value = e.target.value.length;
};
