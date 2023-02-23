// les let et les const ont une porté blockscoop c'est a dire une porté dans le block ou elles ontetaient déclarées.C'est pour cela que généralement nous les déclarons tout en haut du script.

// La var est une variables qui à une porté scoop. On y a acces partout on ont le veut et elle est enregistre dans le dom

function pren() {
  return prenom2;
}
pren();
var prenom2 = "clement";
let prenom = "jonathan";

console.log(pren());

// les vars ont un acces avec l'objet global window qui regroupe tout le dom. Les var reste dans la memoir de javascript. C'est pour cela que les const et les lets ont étaient créées afin que leurs manipulation soit plus sécurisées

console.log(window);
