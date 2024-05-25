function findDifference(a, b) {
    let setA = new Set(a);
    let setB = new Set(b);
    let all = new Set([...setA, ...setB]);
    let diff = [...all].filter(char => setA.has(char) != setB.has(char));
    return diff.sort();
}

console.log(findDifference(['a', 'a', 't', 'e', 'f', 'i', 'j'], ['t', 'g', 'g', 'i', 'k', 'f']));