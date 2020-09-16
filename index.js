setInterval(function() {
    today = new Date();
    hex = "#" + (today.getHours() < 10 ? '0' : '') + today.getHours() + "" + (today.getMinutes() < 10 ? '0' : '') + today.getMinutes() + "" + (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
    document.querySelector("#clock").innerHTML = hex;
    document.body.style.backgroundColor = hex;
}, 1)
