let heroes = [
    { firstName: "Ahsoka", lastName: "Tano", job: "padawan" },
    { firstName: "Boba", lastName: "Fett", job: "fejvadász" },
    { firstName: "Han", lastName: "Solo", job: "csempész" },
    { firstName: "Leia", lastName: "Organa", job: "szenátor" }
];

function heroesK(heroes) {
    let output = document.getElementById("hero");
    for (let i of heroes) {
        output.innerHTML += `<div class="hero"><p>` + i.firstName + i.lastName + `<p>` + i.job + `</div>`;
    }
}

heroes.push({ firstName: "Luke", lastName: "Skywalker", job: "jedi" });
heroes.push({ firstName: "Darth", lastName: "Vader", job: "sith" });
heroesK(heroes);

function heroesT(heroes) {
    let table = document.getElementById("table");
    for (let i = 0; i < heroes.length; i++) {
      let hero = heroes[i];
      let row = table.insertRow();
      row.insertCell(0).textContent = hero.firstName;
      row.insertCell(1).textContent = hero.lastName;
      row.insertCell(2).textContent = hero.job;
    }
}

heroesT(heroes);