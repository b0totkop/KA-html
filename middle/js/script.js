function gimme(tomb) {
    let middle = tomb.slice().sort((a, b) => a - b)[1];
    return tomb.indexOf(middle);
}

console.log(gimme([2, 3, 1]));
console.log(gimme([5, 10, 14]));