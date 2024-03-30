function repeat(tomb) {
    return tomb.filter(num => tomb.indexOf(num) == tomb.lastIndexOf(num)).reduce((acc, num) => acc + num, 0);
}

console.log(repeat([4, 5, 7, 5, 4, 8]));