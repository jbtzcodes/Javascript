const img1 = document.querySelector('img:nth-child(1)')
const img2 = document.querySelector('img:nth-child(2)')
const img3 = document.querySelector('img:nth-child(3)')
const title = document.querySelector('.title')
const subtitle = document.querySelector('.subtitle')



// 1) nous pouvons mettre des parametre par default.Pour cela il faut créer un objet à l'interieur de la fonction de notre variable.

const TL = gsap.timeline({
  defaults: {
    // 2) ici nous placons les parametres par defaults
    duration: 1,
    // 4)  on peut egalement rajouter les easings
    ease: 'bounce'
  },
  // 6) default est une propriété mais on peut egalement rajouter d'autre propriété
  repeat: 2,
  //  si vous mettez -1 ca ce fera à l'infinit
  repeatDelay: 2,
  // 7) on as egalement accès aux fonction sur les cycles de vie
  onComplete: ()=> console.log('anim complete'),

  // 8) onpeut mettre pause/ star / etc...
  paused: true,

});

// 3) je peut l'enlever ici cela aura une duration  de 1 segonde
TL
.to(img1, { y: 0, autoAlpha: 1 })
// 5) on peut passer au dessus de ce parametre par default en indiquant directement un easings
.to(img2, { y: 0, autoAlpha: 1, ease: 'power4' }, '>')
.to(img3, { y: 0, autoAlpha: 1 }, '<0.5')
.to(title, { y: 0, autoAlpha: 1 }, '<-0.5')
.to(subtitle, { y: 0, autoAlpha: 1 });

// 4) je peut mettre une timeline dans un settimeout (marche quand l'animation a paused:true)

setTimeout(()=> {
  TL.play()
},3000)