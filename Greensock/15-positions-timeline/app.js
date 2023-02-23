const img1 = document.querySelector('img:nth-child(1)')
const img2 = document.querySelector('img:nth-child(2)')
const img3 = document.querySelector('img:nth-child(3)')
const title = document.querySelector('.title')
const subtitle = document.querySelector('.subtitle')


// Il existe 3 parametres de positions avec greensock

const TL = gsap.timeline();

// 2) position absolute

// TL
// .to(img1, { y: 0, autoAlpha: 1, duration: 1 })
// .to(img2, { y: 0, autoAlpha: 1, duration: 1 })
// // 1) le positionement absolu (cela va le demarer en meme temps que ma premier image). Attention cependant à ne pas mettre un chiffre au dessus de son positionement de la timeline
// .to(img3, { y: 0, autoAlpha: 1, duration: 1 },0)
// .to(title, { y: 0, autoAlpha: 1, duration: 1 })
// .to(subtitle, { y: 0, autoAlpha: 1, duration: 1 });



// 2) position relative

// TL.to(img1, { y: 0, autoAlpha: 1, duration: 1 },'-=0.25')
//   .to(img2, { y: 0, autoAlpha: 1, duration: 1 },'-=0.50')
//   .to(img2, { y: 0, autoAlpha: 1, duration: 1 }, "+=0.75")
//   // 2) le positionement relative pratqiue pour les animation en cascade. on peut mettre - ou +
//   .to(img3, { y: 0, autoAlpha: 1, duration: 1 }, "-=1")
//   .to(title, { y: 0, autoAlpha: 1, duration: 1 })
//   .to(subtitle, { y: 0, autoAlpha: 1, duration: 1 });


// avec les signes < ou >

TL
.to(img1, { y: 0, autoAlpha: 1, duration: 1 })
// < = cela va demarerdemarer en meme temps que le tween precedent
// > = cela va demarer à la fin de l'animation du tween precedent
.to(img2, { y: 0, autoAlpha: 1, duration: 1 }, '>')
// on peut changer la duréé en rajoutant un nombre
.to(img3, { y: 0, autoAlpha: 1, duration: 1 }, '<0.5')
// on peut egalement mettre des nombres negatives
.to(title, { y: 0, autoAlpha: 1, duration: 1 }, '<-0.5')
.to(subtitle, { y: 0, autoAlpha: 1, duration: 1 });