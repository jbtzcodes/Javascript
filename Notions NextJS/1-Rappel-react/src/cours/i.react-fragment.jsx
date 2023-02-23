
import './App.scss'
import {useState, useRef} from 'react'
import { v4 as uuidv4 } from 'uuid'

// React fragment

// React.Fragment est un élément qui permet de retourner plusieurs éléments enfants sans avoir à créer un élément parent supplémentaire dans le DOM. Il permet de regrouper plusieurs éléments enfants sans ajouter de nœud supplémentaire dans le DOM, cela permet de rendre plusieurs éléments enfants sans ajouter de div ou autre élément qui pourraient perturber le rendu. Cela peut être utile lorsque vous avez besoin de retourner plusieurs éléments dans un composant, mais que vous ne voulez pas ajouter un élément supplémentaire dans le DOM.

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
    // Les chevrons vide sont les react fragment pour ne pas retourner une div dans le DOM qui ne sert a rien
    <>
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

    </>
  )
}

export default App
