console.log("DOM manipulation");

const heading = document.getElementById("heading");
// console.log(heading.textContent)
heading.textContent = "kavindu";

const card = document.querySelector(".card");
// console.log(card.innerHTML)
card.innerHTML = "<h2>My card</h2><p>this  is a card</p>";

console.log(card.innerText);
card.innerText = "i am kavindu";

const input  = document.querySelector("input");
console.log(input)
input.value = "kavindu";