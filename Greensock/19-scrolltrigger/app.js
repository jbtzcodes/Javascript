gsap.to(".box2 h2", {
  duration: 1,
  y: 0,
  scale: 1.5,
  autoAlpha: 1,
  // on rajoute cette propriété qui va declancher lanimation au scroll
  // scrollTrigger: '.b2 h2'

  // on peut donc mettre un objet
  scrollTrigger: {
    // trigger = le declancheur
    trigger: '.b2 h2',
    // markers = affiche les marqeurs
    markers: true
  },
});