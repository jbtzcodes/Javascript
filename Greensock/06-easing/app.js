//  les easings c'est la mannière dont l'animation va s'éxécuter. Es ce que cest lent au début, lent a la fin ou rapide etc...

// Je rajoute deux copie de mon image. Je peut tous les séléctionner de cette mannière.

// gsap.to("img", { x: 150, y:200, opacity: 1 , scale: 1.2, duration: 2, delay: 1, repeat: 1, repeatDelay: 2});


//je peut utilise ease et changer la mannière dont lanimation va s'éxecuter
// gsap.to("img", { y:200,  ease: "power4.in"});
// gsap.to("img", { y:200,  ease: "power4.out"});
// gsap.to("img", { y:200,  ease: "bounce"});
// gsap.to("img", { y:200,  ease: "back.out(4)"});
// gsap.to("img", { y:200,  ease: "elastic"});
// gsap.to("img", { y:200,  ease: "circ"});
// gsap.to("img", { y:200,  ease: "sine"});
// gsap.to("img", { y:200,  ease: "expo.in"});
// gsap.to("img", { y:200,  ease: "slow.out"});
// gsap.to("img", { y:200,  ease: "rought.in"});
gsap.to("img", { y:200,  ease: "steps(40)"});



