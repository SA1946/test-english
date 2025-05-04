// ------- navbar start -----------
// for navbar when scroll
const body = document.body;

let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    body.classList.remove("scroll-up");
  }
  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  }
  if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-down");
    body.classList.add("scroll-up");
  }

  lastScroll = currentScroll;
});
// ------- navbar end -------------
var typed = new Typed(".highlight-text", {
  strings: ["Take your learning with you!"],
  typeSpeed: 100,
  loop: true,
  backSpeed: 100,
});
