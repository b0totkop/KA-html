function Submit() {
    let input = document.getElementById("txt").value;
    console.log("Beírt szöveg: " + input);
}

document.getElementById("submit").addEventListener("click", Submit);