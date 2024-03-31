function each_cons(tomb, n) {
    let result = [];
    for (let i = 0; i <= tomb.length - n; i++) {
        result.push(tomb.slice(i, i + n));
    }
    return result;
}

console.log(each_cons([1, 2, 3, 4], 2));
console.log(each_cons([1, 2, 3, 4], 3));