const liste = document.querySelector('ul')
const items = document.querySelectorAll('li')


// children = tout les enfants du parent
console.log(liste.children);

// childNodes = renvoi tout les noeuds du parent. text correspond aux espaces qui sont des noeuds
console.log(liste.childNodes);

// parentElement = renvoi le parent du parent
console.log(liste.parentElement);

//  nextElementSibling = noeud frere qui suit mon element
console.log(liste.nextElementSibling);

// nextSibling = me renvoi le noeud qui suit mon element
console.log(liste.nextSibling);

// previousElementSibling = element frere avant mon element
console.log(liste.previousElementSibling);

// lastElementChild = me renvoyer le dernier enfant
console.log(liste.lastElementChild);

//  firstElementChild = me renvoi le premier enfant
console.log(liste.firstElementChild);