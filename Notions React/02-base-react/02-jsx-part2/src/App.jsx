
import './App.css'

function App() {
//  JSX possède quelque spécificité comme la spécifacation des attribut que lont utilise entre guillemets pour spécifier des chaines de caractere dans des attributs
const element = <div tabIndex="0"></div>;
const user = {
  nom: 'Jonathan',
  img: "https://images.unsplash.com/photo-1669518769047-3b40db6cb169?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80"
};
// utiliser les accolades pour utiliser une expression js
// const element2 = <img src={user.img}></img>;

// Les balises JSX peuvent contenir des enfants
const element2 = (
  <div>
    <h1>Bonjour !</h1>
    <h2>Les devs</h2>
  </div>
);


// JSX utilise sous le capot BAbel qui va compiler JSX en appel React . On utilise de plus les ClassName  à la difference de Class avec le HTML

const element3 = (
  <h1 className="greeting">
    Bonjour, les devs !
  </h1>
);
// cest comme si javais ecrit
// const element = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Bonjour, monde !'
// );

  return (
    <div className="App">
      {element}
      {element2}
      {element3}
    </div>
  )
}

export default App
