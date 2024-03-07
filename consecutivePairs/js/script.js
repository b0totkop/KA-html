function consecutivePairs(tomb) {
    let db = 0;
    for (let i = 0; i < tomb.length - 1; i++) {
        if (Math.abs(tomb[i] - tomb[i + 1]) == 1) {
            db++;
            i++;
        }
    }
    return db;
}

console.log(consecutivePairs([1, 2, 5, 8, -4, -3, 7, 6, 5]));