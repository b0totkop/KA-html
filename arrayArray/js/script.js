function isArray(tomb) {
    return tomb.every(e => Array.isArray(e));
}

console.log(isArray([[1], [2]]));
console.log(isArray(['1', '2']));
console.log(isArray([{1:1}, {2:2}]));