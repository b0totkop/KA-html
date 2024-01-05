var tomb = [];

function show(index) {
    if (tomb.length > index) {
        document.getElementById('output').innerHTML = 'Kiválasztott elem: ' + tomb[index];
    } else {
        document.getElementById('output').innerHTML = 'Nem található elem.';
    }
}

function showAll() {
    document.getElementById('output').innerHTML = 'Az összes elem: ' + tomb.join(', ');
}

function add() {
    var newElement = document.getElementById('add').value;
    tomb.push(newElement);
}

function tLength() {
    document.getElementById('output').innerHTML = 'A tömb ' + tomb.length + ' elemet tartalmaz.';
}

function remove() {
    var indexToRemove = document.getElementById('remove').value;
    tomb.splice(indexToRemove, 1);
}