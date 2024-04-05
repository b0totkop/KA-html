function array(tomb) {
    return tomb.every(e => Array.isArray(e));
}

console.log(array([[1],[2]]));
console.log(array(['1','2']));
console.log(array([{1:1},{2:2}]));