let arrowFunction = () => {
    let szo = document.getElementById('txt').value;
    let ki = "";
    for (let i = szo.length - 1; i >= 0; i--) {
        ki += szo[i];
    }
    document.getElementById('output').innerHTML = ki;
}
