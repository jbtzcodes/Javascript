const str =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, voluptate? ";

// charAt = retourne la valeur d'un index
console.log(str.charAt(8));

// includes = renvoi true ou false. Cette méthode permet de verifier si une valeur est bien dans la chaîne de caractère
console.log(str.includes("Lorem"));

// indexOf = nous donne l'index de départ d'une valeur
console.log(str.indexOf("sit"));

// charCodeAt = accumule tous les codes de chaque lettre
console.log(str.charCodeAt());

// slice = permet de couper une partie de notre chaine de caractere
console.log(str.slice(0, 15));

//  split = divise une chaine de caractere
//  si je rajoute un espace cela ce divise en mot, deux espaces en phrase etc...
const str2 = str.split("").join();
console.log(str2);

//  concat = concatainer deux chaaine de caractere
const str3 = "Jonathan";
const str4 = "Nelya";
// const str5 = str3.concat(str4)
// je peut également rajouter une valeur
const str5 = str3.concat("abc", str4);

console.log(str5);

// trim = enleve les blanc avant ou apres une chaine de caractere
const str6 =
  "           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore iure, aliquam inventore quasi suscipit pariatur laboriosam adipisci voluptate modi quaerat?              ";

console.log(str6);
console.log(str6.trim());
console.log(str6.trimEnd());
console.log(str6.trimStart());
