// delay et repeat sont des proprietés utilitaires. Il existe énormement de propriétés mais toutes ne sont pas utilisées.

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
// delay permet d'ajouter un delay
// cest mieux d'utiliser les timeline mais delay peut etre utilisé
// repeat va repeter l'animation le nombre de fois que l'ont veut en plus de la premier execution
// repeatDelay = permet de mettre un delay entre chaque repetion
gsap.to("img", { x: 150, y:200, opacity: 1 , scale: 2, duration: 2, delay: 2, repeat: 2, repeatDelay: 2});

});


