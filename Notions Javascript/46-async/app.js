// async function func(){
//   return 222;
// }

// func().then(console.log())

async function funcData(){
  const prom = new Promise((resolve, reject)=> {
    setTimeout(()=> resolve('les données sont la !'), 1000)
  });
  let resultat = await prom 
  console.log(resultat);
}

funcData()