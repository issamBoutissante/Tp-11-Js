var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");
document.getElementById("permuter").onclick = function (e) {
  e.preventDefault();
  var temp = text1.value;
  text1.value = text2.value;
  text2.value = temp;
};
