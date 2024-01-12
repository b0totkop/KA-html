function minimum(tomb, toR) {
    if(toR == "value"){
        return Math.min(...tomb)
    }
    else{
        return tomb.indexOf(Math.min(...tomb))
    }
}
document.getElementById("kiV").innerHTML += "Minimum: " + minimum([1,2,3,4,5], 'value');
document.getElementById("kiI").innerHTML += "Minimum index: " + minimum([1,2,3,4,5], 'index');