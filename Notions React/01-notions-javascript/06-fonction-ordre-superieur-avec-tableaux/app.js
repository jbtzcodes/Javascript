

const tab = [1,2,3,4,5,6];

// la méthode map = retounr un nouveau tableau avec ici par exemple 1+ 10, 2 + 10, 3 + 10 etc...
const mapTab = tab.map(x => x + 10);
console.log(mapTab);


// filter va nous retourner un nouveau tableau avec les éléments filtrer ici par exemple les element superieur a 2

const filterTab = tab.filter(num => num > 2)
console.log(filterTab);

// forEach sert a appeler une methode par exemple avec toute les valeurs de mon tableaux

tab.forEach(val => {
  console.log(val-20);
})