<<<<<<< HEAD
console.log("DOM Traversing");

const carddetails = document.querySelector(".card-details");
// console.log(carddetails.parentNode);
// console.log(carddetails.parentNode.parentNode);


console.log(carddetails.childNodes);

const card = document.querySelector(".card")
console.log(card.children);

console.log(card.firstChild);
=======
console.log("DOM Traversing file is loaded...");

const cardDetails = document.querySelector('.card-details');

// ==== parentNode/parentElement - Accesses the parent of an element.

// console.log(cardDetails.parentNode);
// console.log(cardDetails.parentNode.parentNode);
// console.log(cardDetails.parentNode.parentNode.parentNode);
// console.log(cardDetails.parentNode.parentNode.parentNode.parentNode);
// console.log(cardDetails.parentNode.parentNode.parentNode.parentNode.parentNode);

// childrenNodes/children - Accesses the children of an element.
console.log(cardDetails.childNodes);

const card = document.querySelector('.card');
console.log(card.children);

console.log(card.children[0]);

// firstChild - Accesses the first child of an element.
console.log(card.firstChild);

// lastChild - Accesses the last child
console.log(card.lastChild);

>>>>>>> 8b4d2d4d734c55fc15d9918ce873d2d46eeb16fd
