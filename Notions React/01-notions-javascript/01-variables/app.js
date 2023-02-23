// Let & const

// les differences de base
// const y = 2;
// y = 5;
// var y = 2;
// y = 5;

const y = {a:2};
y.a = 5

console.log(y);
// vue quil fera tout le temps reference à l'objet cela est possible. ce qui peut embrouiller. quand vous faite sa cest l'interieur de l'objet qui change et nom l'emplacement dans la mémoire


// 1 - scope
// les variables var sont function scope. Elles ont une porté dans toutes la fonction dans lequelle elle sont créée 

// function pres(){
//   if(true){
//     var x = 7;
//   }
//   console.log(x);
// }
// pres()

// Les variables let et const sont des functions block scope. Elles ont une porter seulement dans le block ou elles ont étaient déclarées

// function pres(){
//   if(true){
//     let x = 7;
//   }
//   console.log(x);
// }
// pres()

// Le changement de valeurs

// Avec les let et les var nous pouvons réasigner la valeur

let nb = 7;
nb = 5;
console.log(nb);

// les const sont des variables dont on ne peut pas réasigner sa valeur. Ce qui est une sorte de sécurité et cela ammene moins de beug surtout quand vous importer des librairie externes

// const nb = 7;
// nb = 8;
// console.log(nb);

// le hosting

pres()
function pres(){
  console.log('Hello');
}

//  nous pouvons exécuter une fonction ou une variables (var) avant de la definir car le hosting va remonter les fonctions et les variables dans la memoir en javascript. Quand les navigateurs vont lire votre script il va remonter toutes les fonctions et les variables pour un accès direct.

// console.log(nb2);
// var nb2 = 5;

//  cela a remonter ma déclaration sans ma valeur mais il ny a pas d'erreur. Seulement quand le script executera la variables ont aura accès a la valeur et cela peut poser probleme. dou la création des let et des const

// console.log(nb3);
// let nb3 = 5;


// Global. on peut avoir accès aux variable (var) avec l'objet global window


var txt = 'jonathan';
console.log(window);

// sur la console faire ctrl + f puis chercher la variable

// nous pouvons voir que notre variable est bien stocker mais cela peu tposer probleme car si nous utilisont des librairie externes et que celle ci possède des variables qui porte le meme nom, elle va passer au dessus et cela peut-etre est problèmatique.

// Alors que let et const non, elle ne seront pas stocker dans l'objet global ce qui evite les conflits entre les variables.

// let txt2 = 'code';
// console.log(window);

