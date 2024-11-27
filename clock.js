setInterval(() => {
  const today = new Date();
  const pad = (s) => s.toString().padStart(2, "0");

  const hex = `#${pad(today.getHours())}${pad(today.getMinutes())}${pad(today.getSeconds())}`;

  document.getElementById("clock").innerHTML = hex;
  document.body.style.backgroundColor = hex;
}, 500);
