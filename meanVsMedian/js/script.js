function meanVsMedian(tomb) {
    let sum = 0;
    for (let i = 0; i < tomb.length; i++) {
        sum += tomb[i];
    }
    let mean = Math.floor(sum / tomb.length);
    let median = Math.floor(tomb.length / 2);
    median = tomb.slice(median, median + 1);
    if (mean > median) {
        return "mean";
    }
    else if (mean < median) {
        return "median";
    }
    else {
        return "same"
    }
}

console.log(meanVsMedian([1, 2, 3, 4, 5]));