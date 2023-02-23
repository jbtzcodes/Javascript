// function classique et fléché


// 1 - la syntaxe

// classique
function pres(){
  console.log('Jonathan');
}
pres();

// function fleche
const funcF = () => console.log('Nelya');
funcF();

//  Une fonction fléché est une fonction dite anonyme.
// nous pouvons egalement au fonction fleche retirer les accolades et les fonction fléché peuvent ce passer du mot clé return ce qui rend la syntaxe plus élégant.

function mult(a,b){
  return a * b;
}
console.log(mult(2,2))

const mult2 = (a,b) => a * b;
console.log(mult2(5,5));

//  avec un seul parametres pas besoin de mettre de parenthese
const mult3 = a => a;
console.log(mult3(5));



// 2 - le mot clées this

// quand une fonction classqiue est dans un objet nous pouvons l'écrire comme ceci

// const objt = {
//   func(){console.log('hello depuis mon objet');}
// }

// objt.func();

// si maintenant j'utilise le mot clé this
// const objt = {
//   prop: 'valeur',
//   func(){console.log(this.prop);}
// }
// objt.func();
// sa me renvoi l'objet qui a appeler cette fonction ce qui est une méthode. le mot clé this nous renvoi l'objet appellant
// le mot clé this peut avoir plusieurs rôles

// si parconte j'utilise une fonction fléché je vais avoir undefined car je nest pas accès aux contexte qui appele ma méthode (ajouter .prop a this)
// si j'utilise seulement his sa va me return l'objet englobant
const objt = {
  prop: 'valeur',
  func: ()=>{console.log(this);}
}
objt.func();