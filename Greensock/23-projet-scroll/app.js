const img = document.querySelector(".home-img img:nth-child(1)");
const title = document.querySelector("h1");

gsap.to(img, {
  scrollTrigger: {
    trigger: "home-img",
    scrub: true,
  },
  y: 100,
});

gsap.to(title, {
  scrollTrigger: {
    trigger: "home-img",
    scrub: true,
  },
  y: 500,
});
