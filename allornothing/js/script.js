let key = ["A", "_", "C", "_", "B"];
let answers = ["A", "D", "C", "E", "B"];
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
    console.log("True");
}
else {
    console.log("False");
}