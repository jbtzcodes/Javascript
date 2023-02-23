
import './App.scss'

// Importer useRef
// Le hook useRef de React est utilisée pour créer une référence à un élément DOM ou à une autre valeur. Elle prend en paramètre une valeur initiale, qui peut être n'importe quoi, et retourne un objet avec une propriété current qui contient cette valeur initiale. Cette propriété current peut ensuite être mise à jour, ce qui permet de conserver une référence à une valeur ou un élément spécifique dans le temps, même si le composant est mis à jour ou re-rendu.

// Il y a plusieurs cas d'utilisation pour useRef :

// Accéder à un élément DOM : On peut utiliser useRef pour créer une référence à un élément DOM et y accéder pour effectuer des actions telles que changer sa taille ou sa position, lire sa propriété, etc.
// Stocker des données qui ne dépendent pas de l'état du composant : On peut utiliser useRef pour stocker des données qui ne doivent pas être re-rendues à chaque mise à jour du composant, comme un timer ou une abonnation à un observateur.
// Créer des effets de bord : On peut utiliser useRef pour stocker des informations qui sont utilisées dans les effets de bord pour éviter de les recreer a chaque re-rendu.
// Il est important de noter qu'il ne faut pas utiliser useRef pour stocker des données qui doivent être mises à jour lorsque le composant est re-rendu, car cela peut causer des bugs difficiles à déboguer. Il est préférable d'utiliser useState ou useReducer pour stocker ces données.
import {useState, useRef} from 'react'
import { v4 as uuidv4 } from 'uuid'

function App() {

const [data, setData] = useState('')

const funcChange = (e)=> {
  setData(e.target.value)
}

const funcSubmit = (e) =>{
  e.preventDefault();
  console.log(`VALEUR: ${data}`);

  // FIN:on le log
  
console.log(inpRef);
console.log(inpRef.current);
console.log(inpRef.current.value);
}

// on créer notre fonction
const inpRef = useRef()



  return (
    <div className="App">
        <form onSubmit={funcSubmit}>
          <label htmlFor="nom">Login</label>
          <input 
          // on le lie avec notre input
          ref={inpRef}
          onChange={funcChange}
          value={data}
          type="text" 
          id="Login"
          
          />
          <p>{data}</p>
          <button>Connexion</button>
        </form>

    </div>
  )
}

export default App
