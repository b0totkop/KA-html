function removeFirstAndLast(string) {
    let s = string.split(',');
    if (s.length <= 2) {
      return null;
    }
    let mid = s.slice(1, -1);
    return mid.join(' ');
}

console.log(removeFirstAndLast("1,2,3"));
console.log(removeFirstAndLast("1,2,3,4"));
console.log(removeFirstAndLast("1,2,3,4,5"));
console.log(removeFirstAndLast(""));
console.log(removeFirstAndLast("1"));
console.log(removeFirstAndLast("1,2"));