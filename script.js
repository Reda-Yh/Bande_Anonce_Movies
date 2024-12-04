var t1 = gsap.timeline();

t1.from("nav", {
  y: -150,
  opacity: 0,
  duration: 1,
});

t1.from(".home-text", {
  x: -150,
  opacity: 0,
  duration: 1,
});

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
