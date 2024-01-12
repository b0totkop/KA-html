let tomb = [1, 2, 3, 4, 5];
let sum = 0;

function odd(tomb) {
    tomb.forEach(element => {
        if(element % 2 == 1){
            sum += Math.pow(element, 3);
        }
        if(isNaN(element)){
            sum = undefined;
        }
    });
    return sum;
}

document.getElementById("ki").innerHTML = "Páratlan számok összege a köbön: " + sum;