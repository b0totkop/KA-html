function count(candle) {
    let candles = candle.split('')
    let blows = 0;
    while (true) {
        let idx = candles.findIndex(c => c > 0);
        if (idx == -1) {
            break;
        }
        for (let i = idx; i < idx + 3 && i < candles.length; i++) {
            if (candles[i] > 0) {
                candles[i]--;
            }
        }
        blows++;
    }
    return blows;
}

console.log(count("1321"));
console.log(count("0323456"));
console.log(count("2113"));