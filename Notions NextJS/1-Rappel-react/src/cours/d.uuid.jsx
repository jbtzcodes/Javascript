import './App.css'

import {useState} from 'react'

// 3
import { v4 as uuidv4 } from 'uuid'
// lier aux objets puis aux li

function App() {

  // Retourner un tableau ou un objet
const [myState, setMyState] = useState([
  {
    id: uuidv4(),
    marque: 'Clio',
    prix: 15000
  },
  {
    id: uuidv4(),
    marque: '306',
    prix: 18000
  },
  {
    id: uuidv4(),
    marque: '308',
    prix: 20000
  },
  {
    id: uuidv4(),
    marque: 'Golf',
    prix: 23000
  },
])

  return (
    <div className="App">
{/* nous utilisons la méthode map pour retourner le tableau ou l'objet */}
    <ul>
      {/* map retourne un tableau avec mes valeurs */}
      {myState.map(item => (<li key={item.id}>{item.marque}</li>))}
      {myState.map(item => (<li key={item.id}>{item.prix}</li>))}
    </ul>


{/* il va y avoir une erreur  du à la cause qu'il faut un id carreact doit identifier chaque elements pour cela dans le terminal npm install uuid */}
{/* ui est une méthode qui va nous retourner un id unique pour chaque element. 1) l'importer en haut*/}
     


    </div>
  )
}

export default App
