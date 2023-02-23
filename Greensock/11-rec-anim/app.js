// Nous pouvons enresgitre des animations pour les réutiliser sur d'autre elements. Cela est pratique pour ne pas ce repeter.

const img = document.querySelector('img')

// 1) on enregistre un tween
gsap.registerEffect({
  // on lui donne un nom
name: "imgAnim",
// On lui applique une fonction avec un parametre
effect: (targets, config)=> {
return gsap.to(targets, {duration: config.duration, y:200, scale: 1.4, rotation: 360})
},
// on peut rajouter des valeurs par default
defaults: {duration: 2}
})

// ensuite on peut appeler notre tween

gsap.effects.imgAnim(img)
gsap.effects.imgAnim('img:nth-child(3)')

// je peut ajouter une duration

gsap.effects.imgAnim(img, {duration: 3});