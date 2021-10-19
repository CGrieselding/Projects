let nav = document.querySelector("nav");
let lastKnownScrollPosition;

document.addEventListener("scroll", function (e) {
  lastKnownScrollPosition = window.scrollY;
  if (lastKnownScrollPosition !== 0) {
    nav.setAttribute(
      "class",
      "navbar navbar-expand-lg bg-secondary bg-gradient navbar-dark"
    );
  } else if (lastKnownScrollPosition == 0) {
    nav.setAttribute(
      "class",
      "navbar navbar-expand-lg bg-transparent navbar-dark"
    );
  }
});