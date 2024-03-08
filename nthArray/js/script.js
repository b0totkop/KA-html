function every(arr, interval = 1, start = 0) {
    let result = [];
    for (let i = start; i < arr.length; i += interval) {
        result.push(arr[i]);
    }
    return result;
}

console.log(every([0, 1, 2, 3, 4]));
console.log(every([0, 1, 2, 3, 4], 1));
console.log(every([0, 1, 2, 3, 4], 2));
console.log(every([0, 1, 2, 3, 4], 3));
console.log(every([0, 1, 2, 3, 4], 3, 1));