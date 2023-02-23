
import './App.css'

function App() {
// Le JSX est une synthaxe qui ressemble à du HTML mais qui n’est pas du HTML.C’est une extension syntaxique de JavaScript. JSX  fait sûrement penser à un langage de balisage, mais il recèle toute la puissance de JavaScript car par exemple en JSX nous pouvons afficher des elements qui proviennent d'une constante, utiliser des opérations ternnaires, des expressions etc...


// 1) jepeut créer des variables
// const element = <h1>Bonjour, depuis ma variable!</h1>;


// 2) Je peut également utiliser des expression
// const nom = "Jonathan";
// const element = <h1>Bonjour {nom}, depuis ma variable!</h1>;
// exemple 2: nous retournons ici une expression javascript avec JSX
  function formatUser(user) {
  return `${user.nom} ${user.prenom}`
}
const user = {
  nom: 'Jonathan',
  prenom: 'Code'
};
const element = (
  <h1>
    Bonjour, {formatUser(user)} !
  </h1>
);

// 3) jsx est rien de plus qu'une suite expressions qui va ce compiler et cela rendra nos appels de fonction javascript beaucoup plus simple.
// Jsx peut nous permettre d'utiliser à l'interieur des conditions avec if ou l'utilisation de boucle for en l'affectant aux variables, en l'acceptant en tant que argument et en le renvoyant depuis des fonction

function Salutation(user) {
  if (user) {
    return <h1>Bonjour, {formatUser(user)} !</h1>;
  }
  return <h1>Bonjour, les devs.</h1>;
}


  return (
    <div className="App">
       {/* On peut écrire en HTML */}
      <h1>Hello depuis React</h1>
      {/* on peut faire des opérations */}
      {2+2}
      <br /><br />
      {/* il faut fermer les balises fermantes */}
      <input type="text" />
      <br />
      {/* On peut faire des operation ternaires */}
      {0 ? 1000 : 'ok'}
      {/* J'affiche ma variable */}
      {element}
      {Salutation()}
       
    </div>
  )
}

export default App
