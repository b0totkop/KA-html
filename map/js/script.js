function map(arr, func) {
    if (typeof func !== 'function') {
        return 'given argument is not a function';
    }
    if (!arr.every(element => typeof element === 'number')) {
        return 'array should contain only numbers';
    }
    return arr.map(element => func(element));
}

function isEven(num) {
    return num % 2 == 0;
}

console.log(map([1, 2, 3, 4], isEven));