const tab = [1,2,3,4,5,6]

let tabP = []

for(let i = 0; i < tab.length; i++){
  if(tab[i] % 2 === 0){
    tabP.push(tab[i])
  }
}

console.log(tabP);


const tab2 = [1,2,3,4,5,6,7,8,9]

const funcP = n => n % 2 ===0;

const tab3 = tab.filter(funcP)

console.log(tab3);