// FUNCTIONS CLASSIQUES

function presentation(){
  console.log('hello');
}
presentation()


let prenom = 'Jonathan';



//  RETURN
function pren(){
  return prenom
}

console.log(pren());


//  PARAMETRES

function calcul(nb1, nb2){
  return nb1 + nb2
}

console.log(calcul(2,4));


//  FUNCTION FLECHEES

const funcFlech = () => prenom;
const op = (nb1, nb2) => nb1 + nb2;


console.log(funcFlech());
console.log(op(4,6));

// FUNCTIONS CALLBACKS

function funcCall(callback){
  callback()
}

funcCall(function(){
  console.log('Hello les devs depuis ma callback');
})