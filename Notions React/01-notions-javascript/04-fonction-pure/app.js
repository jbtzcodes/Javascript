// les fonctions pures

//  les fonctions pures sontdes fonctions qui retourneront toujours la meme chose si je lui passe tout le temps les meme argument sans toucher a tout ce qui exterieur de cette fonction


let a = 1;


// ceci estune fonction non pure car elle cumule les deux cas avec un element exterieur à la fonction et si je la rappel plusieur fois se sera un nouveau nombre est pas la meme valeur
const plus = b => a +=b;
console.log(plus(2));
console.log(plus(2));
console.log(plus(2));
//  cela va me return 3

// ceci est une fonction pure. il me retournera toujours le meme resultat car il ne fait pas appel à un element exterieur. 
const plus2 = (a,b) => a + b;
console.log(plus2(2,2));
console.log(plus2(2,2));
console.log(plus2(2,2));

// les fonctions pures servent a reduire le nombre de beugs et de ne pas toucher a des contexte exterieur ce qui evite les conflits