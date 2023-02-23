const prom = new Promise((resolve, reject)=> {
  console.log('hello');
  // reject('il y a eu une erreur')
  resolve('les données sont bien la')
})

console.log(prom);