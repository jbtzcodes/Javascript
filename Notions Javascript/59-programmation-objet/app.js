let voiture = {
  marque: 'citroen',
  annee: 2015,
  prix: 15000,
  func: function(){console.log(`En etat depuis ${this.annee}`);}
}

console.log(voiture.hasOwnProperty('marque'));

voiture.func()

console.log(Object.values(voiture));
console.log(Object.keys(voiture));