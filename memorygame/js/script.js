let cards = ["a", "a", "b", "b", "c", "c", "d", "d", "e", "e", "f", "f"];
let rand = [];
let hit = 0;
let clicked = 0;
let clickedIndex = [];
let c1;
let c2;

function Random() {   
    let random = Math.floor(Math.random() * cards.length);
    for(let i = cards.length - 1; i >= 0; i--) {
        rand.push(cards.splice(random, 1));
        random = Math.floor(Math.random() * i);
    }
}

function Turn(clickedCard) {
    let idx = document.querySelector(".card:nth-of-type(" + clickedCard.dataset.index + ")");
    if(clickedCard.dataset.value == "a") {
        idx.classList.add("img1");
    }
    else if(clickedCard.dataset.value == "b") {
        idx.classList.add("img2");
    }
    else if(clickedCard.dataset.value == "c") {
        idx.classList.add("img3");
    }
    else if(clickedCard.dataset.value=="d") {
        idx.classList.add("img4");
    }
    else if(clickedCard.dataset.value=="e") {
        idx.classList.add("img5");
    }
    else {
        idx.classList.add("img6");
    }
}

function TurnB() {
    for(let i = 0; i < 2; i++){
        document.querySelector(".card:nth-of-type("+clickedIndex[i]+")").classList = "card";
    }
    clicked = 0;
    clickedIndex = [];
}

function Disappear() {
    if(hit >= 10) {
        setTimeout(() => {
            alert("Gratulálok!");
            setTimeout(() => {
                Render();
            }, 2000);
        }, 500);
    }
    for(let i = 0; i < 2; i++) {
        document.querySelector(".card:nth-of-type(" + clickedIndex[i] + ")").style.visibility = 'hidden';
        hit += 1;
    }
}

function Match(clickedCard) {
    if(clicked + 1 == 2) {
        if(clickedIndex[0] == clickedCard.dataset.index) {
        }
        else{
            clickedIndex.push(clickedCard.dataset.index);
            clicked += 1;
            c2 = clickedCard.dataset.value;
            Turn(clickedCard);
            if(c1 == c2) {
                setTimeout(() => {
                    Disappear();
                }, 1000);
            }
            setTimeout(() => {
                TurnB();
            }, 1000); 
        }    
    }
    else if(clicked >= 2) {
    }
    else {
        clickedIndex.push(clickedCard.dataset.index);
        clicked += 1;
        c1 = clickedCard.dataset.value;
        Turn(clickedCard);
    } 
}

function Render() {
    document.getElementById("flex").innerHTML = "";
    for(let i = 1; i <= rand.length; i++){
        document.getElementById("flex").innerHTML += '<div class="card" onclick="Match(this)" data-value="' + rand[i-1] + '" data-index="' + i + '"></div>';
    } 
}

Random();
Render();
