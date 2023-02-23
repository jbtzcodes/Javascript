class Voiture {
  constructor(marque, annee){
    this.marque = marque;
    this.annee = annee
  }
}


let voiture1 = new Voiture('opel', 2015)
let voiture2 = new Voiture('Citroen', 2010)


console.log(voiture1);
console.log(voiture2);




class Moto extends Voiture {
  permis(){console.log('Vous avez le permis');}
}

const moto1 = new Moto('Suzuki', 2015)

console.log(moto1);