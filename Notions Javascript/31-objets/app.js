let voiture = {
  marque: "citroen",
  annee: 2015,
  prix: 15000,
};

// acceder à une proprieter d'un objet
console.log(voiture.marque);

// changer la valeur d'une propriété
voiture.prix = 10000;

// rajouter une propriété
voiture.option = ["clim", "abs"];

//  delete = permet de supprimer une propriété d'un objet
delete voiture.prix;

console.log(voiture);

// On peut mettre des objets, des tableaux, des fonctions etc.. dans un objets
let obj = {
  marque: "citroen",
  annee: 2015,
  prix: 15000,
  tab: [1, 2, 3, 4, 5],
  nvObjet: { a: 1, b: 2 },
  func: function () {
    console.log("hello");
  },
  funcFleche: () => {
    console.log("hello depuis la flechée");
  },
};

console.log(obj);

obj.func();
obj.funcFleche();

// les tableaux sont des objets avec des methode bien spécifique

const tab = [1, 2, 3, 4, 5, 6];
// typeof est une méthode pour nous donner le type d'une valeur
console.log(typeof tab);
