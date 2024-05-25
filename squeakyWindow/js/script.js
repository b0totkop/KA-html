function windowS(nums, k) {
    if (nums.length == 0 || k <= 0) {
        return [];
    }
    let result = [];
    let index = [];
    for (let i = 0; i < nums.length; i++) {
        while (index.length > 0 && nums[index.length - 1] <= nums[i]) {
            index.pop();
        }
        index.push(i);
        if (index[0] < i - k + 1) {
            index.shift();
        }
        if (i >= k - 1) {
            result.push(nums[index[0]]);
        }
    }
    return result;
}

console.log(windowS([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(windowS([1, 2, 3, 4], 1));
console.log(windowS([1, 2, 3, 4], 2));
console.log(windowS([1, 2, 3, 4], 3));
console.log(windowS([1, 2, 3, 4], 4));
console.log(windowS([1, 2, 3, 4], 5));