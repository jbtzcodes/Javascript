
import './App.scss'
import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid'

function App() {

// Les composants React utilisent des inputs pour gérer les données qui circulent dans une application. Il existe deux types d'inputs : les controlled inputs et les uncontrolled inputs. Les controlled inputs sont ceux pour lesquels React gère explicitement la valeur à travers la propriété "value" et la gestion des événements "onChange". Cela signifie que l'état de l'application est directement lié à la valeur de l'input. Les uncontrolled inputs, quant à eux, ne sont pas gérés par React. La valeur de ces inputs est gérée par le navigateur et n'est pas liée directement à l'état de l'application. En utilisant les controlled inputs, nous pouvons avoir un meilleur contrôle sur les données qui circulent dans notre application et garantir qu'elles sont valides. Cependant, ils peuvent être plus complexes à mettre en place et nécessitent une gestion de l'état supplémentaire. Les uncontrolled inputs sont plus simples à utiliser, mais ils peuvent causer des problèmes de synchronisation de données avec l'état de l'application. Il est important de choisir le type d'input en fonction des besoins de votre application.

const [data, setData] = useState('')

const funcChange = (e)=> {
  setData(e.target.value)
}

const funcSubmit = (e) =>{
  e.preventDefault();
  console.log(`VALEUR: ${data}`);
}

  return (
    <div className="App">
        <form onSubmit={funcSubmit}>
          <label htmlFor="nom">Login</label>
          <input 
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
