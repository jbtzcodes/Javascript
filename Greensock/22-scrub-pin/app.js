gsap.to(".box2 h2", {
  duration: 1,
  y: 0,
  scale: 1.5,
  autoAlpha: 1,
  scrollTrigger: {
    trigger: ".box2 h2",
    // markers: true,
    start: "top 70%",
    end: "bottom 40%",
    toggleActions: "play pause reverse reset",

// pin va nous permetre d'epingler un element
//  srub va nous permettre de jouer l'animation même temps que le scroll
    onEnter: () => console.log('Enter'),
    onLeave: () => console.log('Leave'),
    onEnterBack: () => console.log('Enter Back'),
    onLeaveBack: () => console.log('Leave back'),
    // 1) le scrub
    // scrub: true,
    // vous pouvez mettre une seconde si jamais votre animation fait des acoups. cela donne un effet smooth plus naturelle
    scrub: 1,

  },
});
// 2)pin

// gsap.to('.box2',{
// scrollTrigger: {
//   trigger: '.box2',
//   pin: true,
//   // pin va utiliser sous le capot position fixed
//   // mettre en commentaireles markers au dessus
//   markers: true
// }
// })

// si vous utiliser juste scroolTrigger sans animer le contenu vous pouver créer une instance

ScrollTrigger.create({
  trigger: ".box2",
  pin: true,
  markers: true,

  // je peut egalement utiliser start et end pour modifier les scrollers
  end: "bottom 50%"
});