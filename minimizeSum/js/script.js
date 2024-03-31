function minimizeSum(tomb) {
    tomb.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < tomb.length / 2; i++) {
        sum += tomb[i] * tomb[tomb.length - 1 - i];
    }
    return sum;
}

console.log(minimizeSum([5, 4, 2, 3]));
console.log(minimizeSum([12, 6, 10, 26, 3, 24]));
console.log(minimizeSum([9, 2, 8, 7, 5, 4, 0, 6]));