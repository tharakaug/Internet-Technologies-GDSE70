console.log("elements handing");

const newdiv = document.createElement("div");
console.log(newdiv);
newdiv.className = "alert";
newdiv.id = "alert alert-success";
console.log(newdiv);
newdiv.textContent = "you have successfully registered";
newdiv.style.backgroundColor = "lightgreen";
newdiv.style.color = "white";
newdiv.style.padding = "10px";
newdiv.style.borderRadius = "12px";
console.log(newdiv);

const card = document.querySelector(".card");

card.append(newdiv);

// card.appendChild(newdiv);

// card.insertBefore(newdiv, card.firstChild);

// card.removeChild(newdiv);

const newdiv2 = document.createElement("div");
console.log(newdiv2);
newdiv2.className = "alert1";
newdiv2.id = "alert1 alert-success";
newdiv2.textContent = "warning";
newdiv2.style.backgroundColor = "red";
newdiv2.style.color = "white";
newdiv2.style.padding = "10px";
newdiv2.style.borderRadius = "12px";

card.replaceChild(newdiv2, card.appendChild(newdiv));  

const clonediv = newdiv2.cloneNode(true);
card.appendChild(clonediv);

// console.log(card.hasChildNodes());

// card.remove();