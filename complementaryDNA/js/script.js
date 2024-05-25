function dna(dna) {
    let dic = {
        'A': 'T',
        'T': 'A',
        'C': 'G',
        'G': 'C'
    };
    return dna.split('').map(a => dic[a]).join('');
}

console.log(dna("ATTGC"));
console.log(dna("GTAT"));