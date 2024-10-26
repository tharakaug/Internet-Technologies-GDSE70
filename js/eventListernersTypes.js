console.log("event listerners types");

const box = document.querySelector(".box");

box.addEventListener("click", function () {
  console.log("box clicked");
});

box.addEventListener("dbclick", function () {
  console.log("box double clicked");
});

box.addEventListener("mousedown", function () {
  console.log("mouse press");
});

box.addEventListener("mouseup", function () {
  console.log("mouse release");
});

box.addEventListener("mousemove", function () {
  console.log("mouse move");
});

box.addEventListener("mouseover", function () {
  console.log("mouse over");
});

box.addEventListener("mouseout", function () {
  console.log("mouse out");
});
