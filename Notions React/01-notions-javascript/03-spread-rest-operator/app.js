//  spread operator
//  etend les donnée et les valeurs d'un tableau oud'un objet ce qui est interesant lorque l'ont veut utiliser les elements d'un tableau avec une méthode ou de copier un tableau dans un autre tableau ou un objet dans un autre objet
const tab = [1,2,3]

const tab2 = [...tab,4,5]

console.log(...tab);
console.log(tab2);


// avec des objets
const objt1 = {
  a: 5,
  b: 6
}

const objt2 = {
  ...objt1,
  c:6
}

console.log(objt1);
console.log(objt2);

//  rest operator
//  imaginons je ne sais pas a lavance le nombre dargument que je vais passer a cette fonction mais que jai envi de return le resultat du total
function add(a,b,...reste){
 console.log(reste);
//  les argument 7 et 7 sont des arguments définit de base
// si je rajoute a et b maintenant il va me return un tableau vide. ja rejoute donc des argument. et la le 8 et le 9 sera dans mon tableau car tout ce qui nest pas définit de base finira dans mon tableau

// maintenant admetons je veut le resultat de tout les parametres
let resultat = 0;
for(const nb of reste){
  resultat += nb
}
return resultat
}
console.log(add(7,7,8,9));

//  il me return le resultat des parametre qui ne sont pas definit

