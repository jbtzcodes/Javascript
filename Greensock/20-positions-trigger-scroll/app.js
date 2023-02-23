gsap.to(".box2 h2", {
  duration: 1,
  y: 0,
  scale: 1.5,
  autoAlpha: 1,
  scrollTrigger: {
    trigger: ".box2 h2",
    markers: true,
    // start modifie la position du trigger de depart. il prend deux arguments (top, center, et bottom)
    // a gauche cest le trigger et a droite le scroller
    // start: "top center"
    // je peut utiliser des nombre += pour pousser -= pour revenir
    // start: "top center-=200"
    // ou des pourcentage
    // start: "top 50%",
    start: "top-=50% 10%",
    // end = modifie laposition du trigger de fin. il prend deux arguments (top, center, et bottom)
    // end permet de declancher l'animation en meme temps que le scroll. Il marche avec bottom
    end: "bottom 10%",
  },
});