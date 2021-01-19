setInterval(() => {
  var date = new Date();
  document.getElementById("temp").textContent =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}, 1000);
