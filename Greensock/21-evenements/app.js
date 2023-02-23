gsap.to(".box2 h2", {
  duration: 1,
  y: 0,
  scale: 1.5,
  autoAlpha: 1,
  scrollTrigger: {
    trigger: ".box2 h2",
    markers: true,
    start: "top 70%",
    end: "bottom 40%",
    // liste des evenements

    // onEnter = quand on rentre dans notre tween
    // le scroll-start depasse le start

    // onLeave = quand on quitte notre tween par le bas
    // le scroll-end doit etre a end

    // onEnterBack = quand on reviens en arrière
    // le scroll-end revient sur le end

    // onLeaveBack = quand on quitte notre tween par le haut
    // le scroll-start revient sur start

    // A partir de ces evenements on va pouvoir faire des toggle actions
    //           onEnter | onLeave | onEnterBack | onLeaveBack
    toggleActions: "play pause reverse reset",

    // liste d'action
    // play = joue l'animation
    // pause = mest en pause l'animation 
    // resume = rejoue apres une pause
    // reset = reset l'animation
    // restart = sa recommence l'animation depuis 0
    // complete = sa va aller à la fin de l'animation
    // reverse = joue l'animation à l'envers
    // none = sa annule l'animation

    // les evenements peuvent etre écrit comme des propriétés

    onEnter: () => console.log('Enter'),
    onLeave: () => console.log('Leave'),
    onEnterBack: () => console.log('Enter Back'),
    onLeaveBack: () => console.log('Leave back')
  },
});