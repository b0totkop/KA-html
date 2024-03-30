function middleS(input) {
    let sequences = input.split(',');
    if (sequences.length <= 2) {
      return null;
    }
    let middle = sequences.slice(1, -1);
    return middle.join('');
}

console.log(middleS("1, 2, 3"));
console.log(middleS("1, 2, 3, 4"));
console.log(middleS("1, 2, 3, 4, 5"));
console.log(middleS(" "));
console.log(middleS("1"));
console.log(middleS("1, 2"));