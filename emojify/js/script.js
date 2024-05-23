function decode(input) {
    let emojis = {
        ":)": "0",
        ":D": "1",
        ">(" : "2",
        ">:C": "3",
        ":/": "4",
        ":|": "5",
        ":O": "6",
        ";)": "7",
        "^.^": "8",
        ":(": "9"
    };
    return input.split('  ').map(c => String.fromCharCode(parseInt(c.split(' ').map(emote => emojis[emote]).join('')))).join('');
}

console.log(decode(':D :) :/  :D :) :|'));
console.log(decode(':( ;)'));