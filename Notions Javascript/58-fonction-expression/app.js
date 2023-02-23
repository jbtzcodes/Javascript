const carre = n => n * n;
const type = n => typeof n;

const calcul = (val, carre, type)=> {
  let valFinal;
  valFinal = carre(val);
  return `Valeur: ${val} et sont type est ${type(val)}`
}


console.log(calcul(3, carre, type));