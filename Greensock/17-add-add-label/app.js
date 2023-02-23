const img1 = document.querySelector('img:nth-child(1)')
const img2 = document.querySelector('img:nth-child(2)')
const img3 = document.querySelector('img:nth-child(3)')
const title = document.querySelector('.title')
const subtitle = document.querySelector('.subtitle')


const TL = gsap.timeline({
  defaults: {
    duration: 1,
    ease: 'bounce'
  },
  paused: true,
});

TL
.to(img1, { y: 0, autoAlpha: 1 })
.to(img2, { y: 0, autoAlpha: 1, ease: 'power4' })
.to(img3, { y: 0, autoAlpha: 1 })
// 1) on peut rajouter un label cela va ajouter un point precis à notre animation. Nous pourrons par la suite jouer notre animation à partir de ce point précis
.to(title, { y: 0, autoAlpha: 1 })
// 3) je peut changer "addLabel" avec juste "add"
// .addLabel('endAnim', '-=0.75')
.add(()=> {
  console.log('hello');
})
// enlever endAnim - ceci est pratique si par exemple vous voullez afficher des données apres une animation
.to(subtitle, { y: 0, autoAlpha: 1 });


setTimeout(()=> {
  // 2) on le play au moment du label
  // TL.seek('endAnim')
  // TL.play('endAnim')
  TL.play()
},1000)