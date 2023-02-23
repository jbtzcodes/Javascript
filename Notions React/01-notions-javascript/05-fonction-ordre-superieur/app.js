//  les fonctions do'rdre superieur

//  ce sont des fonctions qui prennent dautre fonction en parametre, ou qui retourne une autre fonction ou les deux.


// jai un tableau
const tab = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

// admetons je veut un tableau avec les valeurs au dessus de 5

// const newTab = [];

// for(let i = 0; i < tab.length; i++){
//   if(tab[i]> 5){
//     newTab.push(tab[i])
//   }
// }

// console.log(newTab);

//  ca cest du javascript classique on va transformer ceci en fonction 

function ord(tab, func){
  const newTab = [];
  for(let i = 0; i < tab.length; i++){
  if(func(tab[i])){
    newTab.push(tab[i])
  }
}
return newTab
}
const sup5 = ord(tab, (item)=> {
  if(item > 5){
    return item;
      }
})
    // maintenant je peut reutiliser cette fonction si je veut
const sup10 = ord(tab, (item)=> {
  if(item > 10){
    return item;
  }
})

console.log(sup5);
console.log(sup10);
