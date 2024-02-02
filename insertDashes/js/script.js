function insertDash(num) {
    let dash = "";
    let string = num.toString().split("");
    for(let i = 0; i < string.length - 1; i++){
        dash += "" + string[i];
        if((string[i] % 2 != 0) && (string[i+1] % 2 != 0)){
            dash += "-";
        }
        if(i + 2 >= string.length){
            dash += string[i+1];
        }
    }
    return dash;
}

console.log(insertDash(454793));