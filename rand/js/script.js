let tomb = [];

function legyenVeletlenSorrend(tomb) {
    let random = Math.floor(Math.random() * tomb.length);

    tomb.push(tomb[random]);
    tomb.splice(random, 1);
  
    random = Math.floor(Math.random() * (tomb.length - 1));

    tomb.push(tomb[random]);
    tomb.splice(random, 1);
  
    random = Math.floor(Math.random() * (tomb.length - 2));

    tomb.push(tomb[random]);
    tomb.splice(random, 1);
  
    random = Math.floor(Math.random() * (tomb.length - 3));

    tomb.push(tomb[random]);
    tomb.splice(random, 1);
  
    random = Math.floor(Math.random() * (tomb.length - 4));

    tomb.push(tomb[random]);
    tomb.splice(random, 1);
  
    random = Math.floor(Math.random() * (tomb.length - 5));

    tomb.push(tomb[random]);
    tomb.splice(random, 1);

    tomb.push(tomb[0]);
  
    return tomb;
}
  
console.log(legyenVeletlenSorrend(["hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat", "vasárnap"]));
console.log(legyenVeletlenSorrend(["h", "k", "sze", "cs", "p", "szo", "v"]));
console.log(legyenVeletlenSorrend([1, 2, 3, 4, 5, 6, 7, 8, 9]));