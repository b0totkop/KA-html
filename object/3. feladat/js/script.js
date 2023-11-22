let fizetes = {
    Anna: 2100,
    Cecil: 1890,
    Emil: 2050,
    Gerald: 2920
};

let osszeg = 0;
for (let i in fizetes) {
    console.log(i + ": " + fizetes[i]);
    osszeg += fizetes[i];
}
console.log("Összes: " + osszeg);

let output = document.getElementById("kiiras");
for (let i in fizetes) {
    output.innerHTML += "<p>" + i + ": " + fizetes[i];
}
output.innerHTML += "<p>Összes: " + osszeg;