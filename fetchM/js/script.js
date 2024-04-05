//GET
fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(json => {
        let ki = `<tr><th>id</th><th>title</th></tr>`;
        json.forEach(user => {
            ki += `<tr>
                <td>${user.id} </td>
                <td>${user.title}</td>
            </tr>`;
        });
    document.getElementById("ki").innerHTML = ki;
});

//POST
fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify({
        userId: 1,
        title: "asd",
        completed: true
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(response => response.json())
.then(json => console.log(json));

//PUT
fetch("https://jsonplaceholder.typicode.com/todos/188", {
    method: "PUT",
    body: JSON.stringify({
        title: "vel",
        completed: false
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(response => response.json())
.then(json => console.log(json));

//PATCH
fetch("https://jsonplaceholder.typicode.com/todos/189", {
    method: "PATCH",
    body: JSON.stringify({
        title: "vel non beatae est",
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(response => response.json())
.then(json => console.log(json));

//DELETE
fetch("https://jsonplaceholder.typicode.com/todos/190", {
    method: "DELETE",
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(response => {
    if (response.ok) {
        return response.json();
    }
    throw new Error('Network response was not ok.');
})
.then(json => console.log(json))
.catch(error => console.error('There was a problem with the fetch operation:', error));