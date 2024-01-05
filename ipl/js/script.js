var tomb = [];

function add() {
    var inputElement = document.getElementById('in');
    var inputValue = inputElement.value.trim();
    if (inputValue !== '') {
        tomb.push(inputValue);
        inputElement.value = '';
        render();
    }
}

function render() {
    var cardsContainer = document.getElementById('cards');
    cardsContainer.innerHTML = '';
    tomb.forEach(function (item) {
    var card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<p>${item}</p>`;
    cardsContainer.appendChild(card);
    });
}