const colors = ["", "", "", ""];
let color = "red";

function changeColor(element) {
  const index = element.dataset.indexNumber - 1;
  if (colors[index] == "") {
    element.style.backgroundColor = color;
    colors[index] = color;
    color = color == "red" ? "blue" : "red";
  }
}
document.querySelectorAll(".item").forEach(item => {
  item.addEventListener("click", function() {
    changeColor(this);
  });
});