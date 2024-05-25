function middle(x, y, n) {
    return n % 2 == 0 ? y.repeat(n / 2 - 1) + x + y.repeat(n / 2 - 1) : y.repeat(Math.floor(n / 2)) + x + y.repeat(Math.floor(n / 2));
}

console.log(middle("A", "*", 10));
console.log(middle("B", "-", 6));