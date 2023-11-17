let item = document.getElementById("item");
let index = document.getElementById("item").dataset.indexNumber;
let color = ["red", "blue", "red", "blue"];

function changeColor(){
    if (color[index] == "red") {
        document.item.style.backgroundColor = "red";
    }
    else {
        document.item.style.backgroundColor = "blue";
    }
}