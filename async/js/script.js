document.getElementById('load').addEventListener('click', load);
document.getElementById('newCourse').addEventListener('submit', createCourse);
document.getElementById("search").addEventListener("input", search);

function search() {
    let src = document.getElementById("search").value.toLowerCase();
    let courses = document.querySelectorAll("#list > li");
    courses.forEach(course => {
        let courseName = course.firstChild.textContent.toLowerCase();
        let sList = course.querySelector('ul');
        let students = sList.querySelectorAll('li');
        if (!src) {
            course.style.display = "block";
            students.forEach(student => {
                student.style.display = "block";
            });
        } else {
            if (courseName.includes(src)) {
                course.style.display = "block";
                students.forEach(student => {
                    student.style.display = "block";
                });
            } else {
                let result = false;
                students.forEach(student => {
                    let studentName = student.textContent.toLowerCase();
                    if (studentName.includes(src)) {
                        student.style.display = "block";
                        result = true;
                    } else {
                        student.style.display = "none";
                    }
                });
                course.style.display = result ? "block" : "none";
            }
        }
    });
}

function load() {
    document.getElementById("loading").style.display = "block";
    fetch('https://vvri.pythonanywhere.com/api/courses')
        .then(response => response.json())
        .then(data => {
            let list = document.getElementById('list');
            list.innerHTML = '';
            data.forEach(course => {
                let li = document.createElement('li');
                li.innerHTML = '(' + course.id + ') ' + course.name;
                let sList = document.createElement('ul');
                course.students.forEach(student => {
                    let sLi = document.createElement('li');
                    sLi.textContent = '(' + student.id + ') ' + student.name;
                    let editB = document.createElement('button');
                    editB.textContent = 'Szerkesztés';
                    editB.onclick = () => editStudent(student.id, student.name, course.id);
                    let deleteB = document.createElement('button');
                    deleteB.textContent = 'Törlés';
                    deleteB.onclick = () => deleteStudent(student.id);
                    sLi.appendChild(editB);
                    sLi.appendChild(deleteB);
                    sList.appendChild(sLi);
                });
                let addStudentC = document.createElement('input');
                addStudentC.type = "text";
                addStudentC.placeholder = "Új diák hozzáadása";
                let addStudentButton = document.createElement('button');
                addStudentButton.textContent = "Diák hozzáadása";
                addStudentButton.onclick = () => addStudent(course.id, addStudentC.value);
                li.appendChild(sList);
                li.appendChild(addStudentC);
                li.appendChild(addStudentButton);
                list.appendChild(li);
            });
            document.getElementById("loading").style.display = "none";
        })
        .catch(error => {
            console.log('Hiba történt: ' + error);
            document.getElementById("loading").style.display = "none";
        });
}

async function createCourse(event) {
    try {
        event.preventDefault();
        let courseName = document.getElementById('courseName').value;
        const response = await fetch('https://vvri.pythonanywhere.com/api/courses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: courseName })
        })
        const data = await response.json()
        load()
        if (data)
            data.forEach(element => {
                console.log(element)
        })
    }
    catch(error) { 
        console.log("Hiba történt: " + error)
    }
}

async function addStudent(courseId, studentName) {
    try {
        const response = await fetch(`https://vvri.pythonanywhere.com/api/students`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: studentName, course_id: courseId })
        })
        const data = await response.json()
        load()
        if (data)
            data.forEach(element => {
                console.log(element)
        })
    }
    catch(error) { 
        console.log("Hiba történt: " + error)
    }
}

async function editStudent(studentId, currentName, courseId) {
    try {
        let newName = prompt("Adja meg a diák új nevét:", currentName);
        const response = await fetch(`https://vvri.pythonanywhere.com/api/students/${studentId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: newName, course_id: courseId })
        })
        const data = await response.json()
        load()
        if (data)
            data.forEach(element => {
                console.log(element)
        })
    }
    catch(error) { 
        console.log("Hiba történt: " + error)
    }
}

async function deleteStudent(studentId) {
    try {
        if (confirm("Biztosan törölni szeretné ezt a diákot?")) {
            const response = await fetch(`https://vvri.pythonanywhere.com/api/students/${studentId}`, {
                method: 'DELETE'
            })
            load()
        }
    }
    catch(error) { 
        console.log("Hiba történt: " + error)
    }
}
