function fibonacci(number, n){
    for (let i = 1; i < n; i++) {
        let idx = number[i - 1] + number[i]
        number.push(idx);
    }
    return number
}

console.log(fibonacci([0, 1], 10))