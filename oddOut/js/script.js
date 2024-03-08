function oddOnesOut(nums) {
    let count = [];
    for (let i of nums) {
        count[i] = (count[i] || 0) + 1;
    }
    let e = [];
    for (let i of nums) {
        if (count[i] % 2 == 0) {
            e.push(i);
        }
    }
    return e;
}

console.log(oddOnesOut([1, 2, 3, 1, 3, 3]));
console.log(oddOnesOut([75, 68, 75, 47, 68]));
console.log(oddOnesOut([42, 72, 32, 4, 94, 82, 67, 67]));
console.log(oddOnesOut([100, 100, 5, 5, 100, 50, 68, 50, 68, 50, 68, 5, 100]));
console.log(oddOnesOut([82, 86, 71, 58, 44, 79, 50, 44, 79, 67, 82, 82, 55, 50]));