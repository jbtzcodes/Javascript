// Un Hook est une fonction qui permet de « se connecter » sur des fonctionnalités React. Par exemple, useState est un Hook qui permet d’ajouter l’état local React à des fonctions composants. 
// UseState = hook qui return un tableau avec le stat de départ de mon composant et une fonction pour changer cette état
import './App.css'

// 1)on l'importe
import {useState} from 'react'

function App() {
// 2)on créer une variable
const [myState, setMyState] = useState(0)
// Nous pouvon sdonner le nom que l'ont veut il faut juste rajouter set devant pour la fonction
// entre les parentheses de useStateje peut mettre toutes sortes de valeurs (string, number, objet, tableau, fonction)

// 3)Changer le state
//  quand on change le state nous mettons à jour le composant ce qui va provoquer des effets segondaires
const modifState = () => {
  setMyState(30) 
}

console.log('Maj');

  return (
    <div className="App">
      {/* On peut afficher le state */}
      <h1>{myState}</h1>

      {/* Changer le state */}
      {/* #01 */}
      <button onClick={modifState}>Changer  le state</button>

      {/* #02 */}
      <button onClick={()=> setMyState(myState +1)}>+</button>
      <button onClick={()=> setMyState(myState - 1)}>-</button>
    </div>
  )
}

export default App
