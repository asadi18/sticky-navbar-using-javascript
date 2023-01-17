const navEl = document.querySelector(".navbar");
const btEl = document.querySelector(".bottom-container");

window.addEventListener("scroll", () => {
  if (window.scrollY > btEl.offsetTop - navEl.offsetHeight - 50) {
    navEl.classList.add("active");
  } else {
    navEl.classList.remove("active");
  }
});
console.log("Body = " + btEl.offsetTop, "navbar = " + window.scrollY);
