// les fonction callback peuvent etre appeler dans le cycle de vie d'une animation

// gsap.to("img:nth-child(1)", {
//   y: 100,
//   repeat: 1,
//   onComplete: () => console.log("animation terminée"),
//   onStart: () => console.log("début animation"),
//   onUpdate: () => console.log("animation en cours"),
//   onRepeat: () => console.log("animation repetée"),
// });

// cela est pratique lorsque vous voulez mannipuler des variables, des données, de lancer une animation quand une autre animation est terminé etc...


// on peut écrire la fonction en dehort du block
const complete = () => console.log('terminé');

gsap.to("img:nth-child(1)", {
  y: 100,
  repeat: 1,
  onComplete: complete,
});
