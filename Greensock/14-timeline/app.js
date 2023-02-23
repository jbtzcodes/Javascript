const img1 = document.querySelector('img:nth-child(1)')
const img2 = document.querySelector('img:nth-child(2)')
const img3 = document.querySelector('img:nth-child(3)')
const title = document.querySelector('.title')
const subtitle = document.querySelector('.subtitle')



// Les timelines permette de gerer nos animation de manniere plus organisé

// 1) on créer une variable

const TL = gsap.timeline();

// 2) on configure la timeline
// TL
// .to(img1, {y:50})
// .to(img2, {y:50})
// .to(img3, {y:50})

// cela va jouer les animations les unes apre les autres sans utiliser de delay

// TL
// .from(img1, { y: -50, opacity: 0 })
// .from(img2, { y: -50, opacity: 0 })
// .from(img3, { y: -50, opacity: 0 })
// .from(title, { y: -50, opacity: 0 })
// .from(subtitle, { y: -50, opacity: 0 });

// rajouter opacity: 0 et transform: translateY(-50px) et visibility:hidden pour les chacher aux lecteurs d'ecrans aux elements pour eviter les flash. From peut avoir un beug car le css ce charge avant le script ce qui peut causer des bugs.
// autoAlpha va passer opacity et visibility à 1
TL
.to(img1, { y: 0, autoAlpha: 1 })
.to(img2, { y: 0, autoAlpha: 1 })
.to(img3, { y: 0, autoAlpha: 1 })
.to(title, { y: 0, autoAlpha: 1 })
.to(subtitle, { y: 0, autoAlpha: 1 });
