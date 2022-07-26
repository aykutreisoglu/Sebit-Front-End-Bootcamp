//HTML Tagname ile elemente ulaşma

// const button = document.querySelector("button");
// console.log(button);

//id ile elemente ulaşma

// const button =document.querySelector("#buttonId")

//classname ile elemente ulaşma

// const button =document.querySelector(".buttonClass")

const button = document.getElementById("buttonId");
// const button=document.getElementsByClassName("buttonClass")

//butona click eventi ekleme ilk yöntem
// button.addEventListener("click", () => {
//   console.log("Butona tıklandı.");
// });

//2.yöntem

// function add() {
//   console.log(" Butona tıklandı");
// }

const liElemanları = document.querySelectorAll("li");
console.log(liElemanları);

// liElemanları.forEach((eleman) => {
//   eleman.addEventListener("click", (e) => {
//     e.target.style.color = "blue";
//   });
// });
// liElemanları.forEach((eleman) => {
//   eleman.addEventListener("click", (e) => {
//     e.target.remove();
//   });
// });

// const newElement = document.createElement("li");
// newElement.textContent = "JavaScript";

//append sona eleman ekler
//prepend başa eleman ekler

//STEP 1
const newUl = document.querySelector("ul");

//UL SEÇ

//STEP 2
//li oluştur

//step 3
//butona tıklandığında ekle

button.addEventListener("click", () => {
  const newElement = document.createElement("li");
  newElement.textContent = "JavaScript";
  newUl.appendChild(newElement);
});
