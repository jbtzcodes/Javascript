// ## la propriété Stagger permet de mettre un decalage entre plusieurs animations d'elements.

// gsap.to("img", { y:200,  ease: "power1", stagger: 0.5});


// ## On peut lui mettre un objet 
// gsap.to("img", { y: 200, ease: "power1", stagger: {
//   // decallage
//   each: 4,
//   // montant = ce partage le temps
//   amount: 1,
//   // from = pour commencer depuis la fin, ou du milieu
//   // from: 'end',
//   from: 'center',
// }});


// ## On peut lui ajouter une fonction qui va grace a des variables va ajouter un stagger spécial

// gsap.to("img", {
//   y: 200,
//   ease: "power1",
//   stagger: function(index){
//     console.log(index);
//     //  cela va me return dans ma console l'index de mes éléments. Cela permet de gerer les animations plus dynamiquement.
//   }
// });


// Decommanter les boutons en HTML
// Stagger peut nous permettre d'animer plusieurs elements d'un coup
gsap.to('.btn', {duration: 0.2, x: 50, stagger: 0.1})
