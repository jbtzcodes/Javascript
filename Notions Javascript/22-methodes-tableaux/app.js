const tab = [1, 2, 3, 4, 5, 6];
// index: 0 1 2 3 4 5

// ######################## POP, PUSH, UNSHIFT, SHIFT

// Supprime la derniere valeur du tableau
tab.pop();
// Ajoute une valeur à la fin du tableau
tab.push(50);
// Supprime la premiere valeur du tableau
tab.shift();
// Ajoute une valeur au début du tableau
tab.unshift(44);

console.log(tab);

// ######################## SPLICE ET SLICE

const tab2 = [1, 2, 3, 4, 5, 6];

// Splice permet de supprimer ou ajouter une valeur dans un tableau à partir d'un index donné
//index de départ | nombre de valeur à supprimer
tab2.splice(0, 2);
// index de départ | nombre de valeur à supprimer / valeur à ajouter
tab2.splice(0, 2, 165);

console.log(tab2);

// Slice retourne un nouveau tableau avec les valeurs d'une interval donnée avec deux index
//    index de départ / index de fin non inclus
console.log(tab2.slice(0, 4));

// ######################## CONCAT

// permet de concatainer deux tableaux

const tableau = [1, 2, 3, 4];
const tableau2 = [5, 6, 7, 8];

// Si je fait ceci il me retourne les deux tableaux sous forme de chaîne de caractere
const tableau3 = tableau + tableau2;
console.log(tableau3);

const tableau4 = tableau.concat(tableau2);
console.log(tableau4);

// ######################## FLAT

// flat applati un tableau a multidimenssion

// ceci est un tableau à multidimenssion
const tabMulti = [1, 2, 3, 4, [5, 6, 7, 8]];

console.log(tabMulti);
console.log(tab.flat());

// ######################## JOIN
// join transforme un tableau en chîne de caractere

const tableauString = ["jonathan", "marie", "nelya"];
console.log(tableauString);
console.log(tableauString.join(""));
// je peut ajouter un espace pour créerun espace entre mes elements
console.log(tableauString.join(" "));

// ######################## FOREACH

// forEach applique du une fonction ou autre à l'ensemble de mes elements
const tableauVoiture = ["opel", "citroen", "mercedes"];
tableauVoiture.forEach(function (el) {
  console.log(el);
});

// ######################## MAP

// map retourne un tableau avec le resultat d'une fonction
const tableauNb = [1, 2, 3, 4, 5];
const resultatMap = tableauNb.map((x) => x * 2);
console.log(resultatMap);

// ######################## REVERSE
//  reverse inverse l'ordre de nos elements
const tabReverse = [1, 2, 3, 4, 5];
console.log(tabReverse.reverse());

// ######################## FILTER
// filter permet de filtrer notre tableau

const tabFilter = ["Jonthan", "Marie", "Zoe", "Anna", "Charlene"];
const resultatFilter = tabFilter.filter(function (nom) {
  return nom.length > 4;
});
console.log(resultatFilter);

// ######################## REDUCE

//  reduce va appliquer a nos element un accumulateur et il va réduire le tout en une seul valeur

const tabReduce = [1, 2, 3, 4, 5];
const red = tabReduce.reduce(function (a, b) {
  return a + b;
  // je place ici l'accumulateur
}, 3);

console.log(red);

// ######################## EVERY
// every permet de tester les élément de notre tableau à partir d'une condition. Cela va nous renvoyer une valeur boolean (true ou false)
const tabEvery = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// es ce que mes valeurs sont inferieur à 10 ?
const eve = (val) => val < 10;
//  ceci va me renvoyer TRUE
console.log(tabEvery.every(eve));

// ######################## FILL
//  fill permet de changer les valeurs d'un tableau à partir d'un index donné

const tabFill = [1, 2, 3, 4, 5, 6, 7, 8];
//  remplace toutes les valeurs à partir de l'index 2 à l'index 4 (non inclus) par 0
console.log(tabFill.fill(0, 2, 4));
//  remplace toutes les valeurs à partir de l'index 2 par 0
console.log(tabFill.fill(0, 2));
//  remplace toutes les valeurs par 4
console.log(tabFill.fill(4));

// ######################## COPYWITHIN

// copywithin permet de faire une copie superficielle d enotre tableau sans changer sa longeurs
const tabCopy = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// à partir de l'index 1 tu me copie les valeurs quil y a à partir de l'index 4
console.log(tabCopy.copyWithin(1, 4));

// ######################## ENTRIES
//  entries renvoi une valeur et son index à partir d'un tableau
const tabEnt = [1, 2, 3, 4, 5, 6];
const entries = tabEnt.entries();
console.log(entries.next().value);
console.log(entries.next().value);
console.log(entries.next().value);
console.log(entries.next().value);
console.log(entries.next().value);
console.log(entries.next().value);

// ######################## SORT
// sort va trier nos valeurs par ordre alphabetique ou numerique
const listePrenom = ["jonathan", "Amandine", "Luc", "Nelya", "Julie"];
listePrenom.sort();
console.log(listePrenom);
