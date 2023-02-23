const box = document.querySelector('.box');

document.addEventListener('click', ()=> {
  box.classList.add('active')
})

// click = quand je click
// dblclick = double click
// load = fin du chargement de la page
//  keydown = quand une touche est appuyée
//  keypress = quand une touche est maintenu enfoncée
//  keyup = quand une touche est relâchée
//  mouseenter = quand le curseur entre dessus l'element
//  mouseup = quand le curseur entre dessus l'element
//  mouseleave = quand le curseur quitte l'element
//  mouseout = quand le curseur quitte l'element
//  mousemouve = quand la souris parcour l'element
// mousedown:  lorsqu'on appuie sur le bouton de la souris par exemple pendant que le curseur est sur l'élément.
//  select = quand on selectionne avec un select
//  change = quand il y a un changement de valeur dans un select ou un checkbox
// submit = quand il y a une soumission d'un formulaire
// focus = quand un input recoit un focus
// blur = quand un input perd le focus
// scroll = quand on scroll un element ou la page