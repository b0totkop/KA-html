function api() {
    let id = document.getElementById("input").value;
    fetch(`https://hur.webmania.cc/zips/` + id + `.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(zips => {
            console.log(zips);
            show(zips);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function show(zips) {
    if (zips.zips.length == 0){
        document.getElementById("er").innerHTML = "Nincs a keresésnek megfelelő találat.";
    }
    else {
        for (let i = 0; i < zips.zips.length; i++) {
            let ki = "<tr>"
            ki += "<td>" + zips.zips[i].id + "</td>";
            ki += "<td>" + zips.zips[i].country_id + "</td>";
            ki += "<td>" + zips.zips[i].zip + "</td>";
            ki += "<td>" + zips.zips[i].name + "</td>";
            ki += "<td>" + zips.zips[i].lat + "</td>";
            ki += "<td>" + zips.zips[i].lng + "</td>";
            ki += "<td>" + zips.zips[i].country.id + "</td>";
            ki += "<td>" + zips.zips[i].country.name + "</td>";
            ki += "</tr>"
            document.getElementById("table").innerHTML += ki;
            document.getElementById("er").innerHTML = "";
        }
    }
}