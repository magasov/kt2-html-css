function changeStyle() {
  let menu = document.querySelector(".nav__menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
