let burger = document.querySelector(".burger");
let icon = document.querySelector(".icon");
let header = document.querySelector(".toggleHeader");

icon.addEventListener("click", () => {
  if (icon.style.display == "block") {
    header.style.display = "block";
  } else if (header.style.display == "none") {
    header.style.display = "block";
  } else {
    header.style.display = "none";
  }
});
