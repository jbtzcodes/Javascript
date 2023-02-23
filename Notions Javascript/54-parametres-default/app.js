function calcul(nbs = []){
  let total = 1;

  for(let incr of nbs){
    total += incr
  }
  console.log(total);
}

calcul()