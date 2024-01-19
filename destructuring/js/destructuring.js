//1. feladat
let car = ['Ford', 'Mustang', 2022, 'blue'];

let [brand, model, year, color] = car;

console.log(brand);
console.log(model);
console.log(year);
console.log(color);

//kérdések
//1. bármilyen nevet ami jól leírja a benne lévő adatot
//2. igen

//2. feladat
let book = {
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    publicationYear: 2008,
    language: 'English'
    };

let {title, author, publicationYear, language} = book;

console.log(title);
console.log(author);
console.log(publicationYear);
console.log(language);

//kérdések
//1. ugyan azt kell megadni ami az objben szerepel
//2. nem

//3. feladat
function printStudentInfo({ name, age, grade, subjects}) {
    console.log(`${name}, ${age} éves, ${grade} osztályba jár, a következőket tanulja: ${subjects}`);
}

let student = {
    name: 'John Doe',
    age: 20,
    grade: 'B',
    subjects: ['Math', 'English', 'History']
    };

printStudentInfo(student);