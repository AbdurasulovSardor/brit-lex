const menuBtn = document.getElementById("menu-btn")
const menuClose = document.getElementById("menu-close")
const menu = document.getElementById("menu")

menuBtn.addEventListener("click", () => {
  menu.classList.remove("hidden")
  menu.classList.add("fixed")
})

menuClose.addEventListener("click", () => {
  menu.classList.add("hidden")
  menu.classList.remove("fixed")
})