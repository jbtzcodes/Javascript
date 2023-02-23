const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  // La méthode from to possède 3 parametres
  // premier objet = element que l'ont veut animé
  // second objet = méthode from
  // troisième objet = méthode to

// gsap.fromTo("img", { opacity: 0}, { opacity: 1 });

// si je veut changer la duration
gsap.fromTo("img", { opacity: 0}, { opacity: 1 , duration: 3});
});


