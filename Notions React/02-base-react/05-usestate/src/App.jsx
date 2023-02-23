// j'importe state de la librairie
import {useState} from 'react'


function App() {
  // je créer la variable pour utiliser le hook useState
  const [monState, setMonState] = useState(7);

  // pour modifier le state j'utilise setMonState qui estr une fonction qui nous sert pour la modification
  const modifState = () => {
    // j'utilise la fonction set et lui place la nouvelle valeur
    setMonState(20);
  }

  

  return (
    <div className="App">
       <h1>{monState}</h1>
       {/*  je créer unbouton pour changer le state */}
      <button onClick={modifState}>Changer le state</button>
    </div>
  )
}
// quand le state est modifier il ce mest a jour. Rajouter log mise ajour


export default App
