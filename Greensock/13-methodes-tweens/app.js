// 1) nous pouvons créer un effet de yoyo
// gsap.to("img:nth-child(1)", {y:250, repeat: 1, yoyo:true})


// 2) nous pouvons mettre ces animations dans des constantes afin d'appliquer des méthodes dessus et gerer sa lecture, sa pause, sont arret etc...

const anim = gsap.to("img:nth-child(1)", { y: 250, repeat: 1, yoyo: true });

//  je peut maintenant ajuster les proprietés
anim.duration(1)

// mest l'animation en pause
anim.pause()

// continue une animation apres une pause
anim.resume()

// joue l'animation
anim.play()

// supprime le tween
// anim.kill()

// change le point du début de l'animation
// anim.seek(2.25)

// ajoute un delay
anim.delay(1)

// 3) on peut utiliser setTimeOut

setTimeout(()=> {
  anim.restart()
},3000)