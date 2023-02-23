class Voiture {
  constructor(marque, annee){
    this.marque = marque;
    this.annee = annee
  }
  dateSortie(){console.log(`Sortie en ${this.annee}`);}

  ajout(nomOption){
    console.log(`Ajout de l'option ${nomOption}`);
    return this
  }
}


let voiture1 = new Voiture('opel', 2015)
let voiture2 = new Voiture('Citroen', 2010)


console.log(voiture1);
console.log(voiture2);

voiture1.dateSortie()
voiture2.dateSortie()


class Moto extends Voiture {
  permis(){console.log('Vous avez le permis');}
}

const moto1 = new Moto('Suzuki', 2015)

console.log(moto1);

voiture1.ajout('clim')
voiture1.ajout('pneux neiges')
voiture1.ajout('abs')