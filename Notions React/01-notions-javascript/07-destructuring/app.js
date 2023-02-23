//  le destructuring sert a créerdes variables a la vollée avec des valeurs
const ville = {
  nom: "Paris",
  population: 500000,
}

//  si je veut facilement creer des variable avec les valeurs de cette objet

//  de base on ferait ceci

// const nom = ville.nom;
// console.log(nom);

//  mais on peut faire ceci

const {nom, population} = ville;


//  il existe un twixt qui est utiliser avec react

const data = ({nom}) => nom;
// ceci dit attend de recevoir un objet et a partir de la propriete nom de cette objet il va creer une variable avec la valeur de cette objet

console.log(nom,population);
console.log(data(ville))

//  on peut faire ceci avec des tableau

const tab = [1,2,3];
const [a,b,c] = tab;
console.log(a,b,c);