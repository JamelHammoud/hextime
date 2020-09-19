setInterval(function() {
    today = new Date();
    hex = '#' + new Date().toISOString().substr(11, 8).replace(/:/g, '');
    document.querySelector("#clock").innerHTML = hex;
    document.body.style.backgroundColor = hex;
}, 500);
