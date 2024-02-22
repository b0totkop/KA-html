function sort(tomb) {
    return tomb.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}

console.log(sort(["Hello", "there", "I'm", "fine"]));
console.log(sort(["C", "d", "a", "B"]));