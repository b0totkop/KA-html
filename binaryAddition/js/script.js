function binary(a, b) {
    let sum = a + b;
    let binaryS = sum.toString(2);
    return binaryS;
}

console.log(binary(1, 1));
console.log(binary(5, 9));
console.log(binary(10, 20));
console.log(binary(2, 3));