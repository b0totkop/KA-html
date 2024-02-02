function leonardoNumbers(n, L0, L1, add) {
    let tomb = [];
    if (n >= 1) {
      tomb.push(L0);
    }
    if (n >= 2) {
      tomb.push(L1);
    }
    for (let i = 2; i < n; i++) {
      let next = tomb[i - 1] + tomb[i - 2] + add;
      tomb.push(next);
    }
    return tomb;
}
  
console.log(leonardoNumbers(5, 1, 1, 1));