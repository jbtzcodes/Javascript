let voiture = {
  marque: 'citroen',
  annee: 2015,
  prix: 15000,
  func: function(){console.log(this.marque)}

}


console.log(voiture);

voiture.func()

let newFunc = voiture.func.bind(voiture)

console.log(newFunc);

btn.addEventListener('click', ()=> {
  this.classList.add('active')
})
