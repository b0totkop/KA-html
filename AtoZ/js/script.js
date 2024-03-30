function letterRange(a) {
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let start = letters.indexOf(a[0]);
    let end = letters.indexOf(a[2]) + 1;
    return letters.substring(start, end);
}

console.log(letterRange("a-z"));
console.log(letterRange("h-o"));
console.log(letterRange("Q-Z"));
console.log(letterRange("J-J"));