function allOrNothing(key, answers) {
    let t = 0;
    let f = 0;
    for (let i = 0; i < key.length; i++) {
        if (key[i] == answers[i]) {
            t++;
        }
        else if (key[i] == "_") {
            t++;
            f++;
        }
        else {
            f++;
        }
    }
    if (t == key.length || f == key.length) {
        return true;
    }
    else {
        return false;
    }
}

console.log(allOrNothing(["B", "A", "_", "_"], ["B", "A", "C", "C"]));
console.log(allOrNothing(["A", "B", "A", "_"], ["B", "A", "C", "C"]));
console.log(allOrNothing(["A", "B", "C", "_"], ["B", "A", "C", "C"]));
console.log(allOrNothing(["B", "_"], ["C", "A"]));
console.log(allOrNothing(["B", "A"], ["C", "A"]));
console.log(allOrNothing(["B"], ["B"]));
console.log(allOrNothing(["_"], ["B"]));