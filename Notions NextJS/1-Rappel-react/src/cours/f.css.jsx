
// FEUILLE DE STYLE
// import './App.css'
import './App.scss'
import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid'

function App() {


const [myState, setMyState] = useState(false)

const func = ()=> {
  setMyState(!myState)
}

console.log(myState);

  return (
    <div className="App">



{/* CSS INLINE */}
    <h1 style={{backgroundColor: 'salmon',color:'red'}}>Hello</h1>


    {/* rendue contionnel */}

    <p style={{backgroundColor: myState ? "green" : "orange"}}>Hello </p>

    <button onClick={func}>Validé</button>


    {/* Utilise sass avec react */}
{/* npm install sass */}




     


    </div>
  )
}

export default App
