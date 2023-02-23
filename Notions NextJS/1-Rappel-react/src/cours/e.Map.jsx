// Importer du CSS
import './App.css'


import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid'

function App() {


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

    <ul>

      {myState.map(item => (<li key={item.id}>{item.marque}</li>))}
      {myState.map(item => (<li key={item.id}>{item.prix}</li>))}

    </ul>
     



     


    </div>
  )
}

export default App
