const tab = [1,2,3,4,5]
// index     0 1 2 3 4

const tab2 = ["jonathan", 3, {marque: 'clio', annee: 2015}]


console.log(tab);
console.log(tab2);

// acceder à une valeur d'un tableaux
console.log(tab[2]);

// changer la valeur d'un index
tab2[0] = "Nelya"
console.log(tab2);

// length = longueur du tableaux
console.log(tab.length);

// at = obtenir une valeur d'un tableau
// console.log(tab[tab.length - 3]);
console.log(tab.at(2));
console.log(tab.at(-2));