tomb = [1, 2, 3, 4, 5];
function elso() {
    ki = document.getElementById("kiiras").innerHTML = tomb[0];
}
function masodik() {
    ki = document.getElementById("kiiras").innerHTML = tomb[1];
}
function harmadik() {
    ki = document.getElementById("kiiras").innerHTML = tomb[2];
}
function ossz() {
    ki = document.getElementById("kiiras").innerHTML = tomb;
}
function bevitel() {
    txt = document.getElementById("bevitel").value;
    tomb.push(txt);
}