function fetchData() {
    let userid = parseInt(document.getElementById("input").value);
    fetch(`https://jsonplaceholder.org/users/?id=` + userid)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(user => {
            console.log(user);
            show(user);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function show(user) {
    let ki = "<tr>"
    ki += "<td>" + user.id + "</td>";
    ki += "<td>" + user.firstname + "</td>";
    ki += "<td>" + user.lastname + "</td>";
    ki += "<td>" + user.email + "</td>";
    ki += "<td>" + user.birthDate + "</td>";
    ki += "<td>" + user.login.username + "</td>";
    ki += "<td>" + user.address.street + "</td>";
    ki += "<td>" + user.phone + "</td>";
    ki += "<td>" + user.website + "</td>";
    ki += "<td>" + user.company.name + "</td>";
    ki += "</tr>"
    document.getElementById("table").innerHTML += ki;
}
