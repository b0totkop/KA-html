function sum(tomb) {
    let sum = 0;
    tomb.forEach((num, index) => {
        if (num > 0) {
            num = num * num;
        }
        if ((index + 1) % 3 === 0) {
            num = num * 3;
        }
        if ((index + 1) % 5 === 0) {
            num = num * -1;
        }
        sum += num;
    });
    return sum;
}

console.log(sum([-2, -1, 0, 1, 2]));