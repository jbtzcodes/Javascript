

//  LES PROPRIETES MATHS

//  Math.PI = 3,14
const PI = Math.PI;
console.log(PI);

// Math.LN10 
const LN = Math.LN10
console.log(LN);

// Math.LN2
const LN2 = Math.LN2;
console.log(LN2);

// Math.e
const E = Math.E
console.log(E);


//  LES METHODES MATHS

// Math.cos = retourner le cosinus d'un angle avec une valeur en radian

function cercle(radians, radius){
  return Math.cos(radians) * radius;
}
console.log(cercle(Math.PI, 10));

// Math.floor = renvoyer un nombre entier inferieur ou egale a un nombre
console.log(Math.floor(5,95));
console.log(Math.floor(8.05));

// Math.trunc retourne la troncature entière d'un nombre en retirant sa partie décimal
console.log(Math.trunc(42,84));
console.log(Math.trunc(13.37));

// Math.random = renvoi un chiffre aléatoire

function random(max) {
  return Math.floor(Math.random()* max)
}
console.log(random(20));

// Math.round = retourne la valeur d'un nombre arrondi à l'entier le plus proche
console.log(Math.round(2.95), Math.round(5.5), Math.round(9.05));

// Math.sign = renvoyer le signe d'un nombre
console.log(Math.sign(7), Math.sign(-2));

// Math.max = renvoile plus grand nombre d'une serie de 0 ou plusieur nombre

console.log(Math.max(1,5,2));
console.log(Math.min(1,5,2, 'Jonathan'));