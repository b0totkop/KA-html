let input = "hell5o wor6ld";

function getNumberFromString(s) {
    let digits = s.replace(/\D/g, '');
    return result = parseInt(digits, 10);
}

console.log(getNumberFromString(input));