// random est une fonction qui permet d'appliquer des valeurs de manniere aleatoire

// cela va donner une valeur entre une interval vomme ici de 0 à 100
// gsap.to('.btn', {duration: 0.2, x: "random(-100,100)", stagger: 0.1})

// je peut arrondire à 10 par exemple
// gsap.to('.btn', {duration: 0.2, x: "random(-100,100,10)", stagger: 0.1})

// on peut lui mettre un tableau avec plusieurs valeurs ce qui va rendre une valeur aleatoire a partir de mon tableau
gsap.to(".btn", { duration: 0.2, x: "random([50,20,-40,-60])", stagger: 0.1 });