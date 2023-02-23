// La méthode Form est l'inversse de la méthode to. Elle anime un element d'un point definit à sa position original dans le DOM.

// gsap.from("img", {opacity: 0, x: 300, duration: 3 });

// Animons l'image depuis un evenement. Créer un bouton en HTML avec la class "btn"

// selectionner le en javascript

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
gsap.from("img", { opacity: 0,duration: 3 });
});


// si je spam click parconte il va y avoirun bug
//  au premier clique lopacity va de 0 à 1
//  au deuxieme clique il va de 0 à la ou elle cest arreter au premier click. Cela à changer le point d'arret.


// Pour remédier a sa nous avons la méthode from to
