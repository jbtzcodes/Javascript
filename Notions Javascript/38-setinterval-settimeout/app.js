// Settimeout permet d'executer une action ou une fonction à partir d'un temps donné
// setTimeout(presentation, 4000)

// SetIntervalpermet de repeter une action ou une fonction tout les x temps. x temps que l'ont definit

// setInterval(presentation,1000)

// on peut les mettres dans une variable et les clear
const timer = setInterval(presentation, 1000);
const timer2 = setTimeout(presentation, 1000);

function presentation() {
  console.log("hello");
}

clearTimeout(timer2);
clearInterval(timer);

// on peut faire ceci avec une fonction fléché
const timer3 = setTimeout(() => {
  console.log("Hello depuis ma fléchée");
}, 2000);
