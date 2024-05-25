function findNums(array, mixed) {
    let sumO = (array.length * (array.length + 1)) / 2;
    let sumM = mixed.reduce((acc, num) => acc + num, 0);
    return sumO - sumM;
}

console.log(findNums([1, 2, 3, 4, 5, 6, 7, 8, 9], [3, 2, 4, 6, 7, 8, 1, 9]));
console.log(findNums([1], []));
console.log(findNums([1, 2, 3, 4], [1, 2, 3, 4]));