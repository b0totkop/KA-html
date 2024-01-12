let arrowFunction = () => {
    let szo = document.getElementById('txt').value;
    let ki = "";
    for (let i = szo.lenght - 1; i >= 0; i--) {
        ki += szo[i];
    }
    console.log(szo);
    console.log(ki);
    document.getElementById('output').innerHTML = ki;
}