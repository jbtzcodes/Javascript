//  la méthode set permet de mettre en place des propriété pour des elements


const img = document.querySelector("img");

// 1) on selectionne un element et on met en place une propriété

// gsap.set(img, {opacity: 0})

// cela sert à remettre des valeurs à zero lorsque vous avez des animations complexes ce qui rend les animations plus modulable.

// je peut selectionner plusieurs element d'un coup

gsap.set('img', { opacity: 0 });