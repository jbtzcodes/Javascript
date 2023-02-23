//  spread operator = etendre les propriétés et valeurs d'un objet à un autre objet

let voiture = {
  marque: "citroen",
  prix: 15000,
  annee: 2015,
};

let voiture2 = {
  ...voiture,
  option: "clim",
};

console.log(voiture2);

const tab = [1, 2, 3, 4, 5];
const tab2 = [...tab, 6, 7, 8, 9];

console.log(tab2);

// Rest operator
function tab3(...nb) {
  console.log(nb);
}
tab3(1, 2, 3, 4, 5, 6);
