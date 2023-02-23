
//useEffect

// useEffect est une Hook de React qui permet de gérer les effets de bord dans un composant. Il permet d'exécuter du code en réponse à des changements dans l'état ou les propriétés d'un composant, comme la modification du DOM, l'accès à l'API ou la mise à jour d'un timer. Il est utilisé pour synchroniser l'état du composant avec les effets de bord de l'application.
  

import './App.scss'
import {useState, useRef} from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useEffect } from 'react'

// https://storerestapi.com/docs

// https://api.storerestapi.com/products/

function App() {

  const [data, setData] = useState([])
  console.log('Lecomposant se monte');
  useEffect(()=> {
    console.log('le composant est monté');


    fetch('https://api.storerestapi.com/products/')
    .then(response => response.json())
    .then(data => {
      console.log(data.data[0]);
      setData(data.data[0])
     
    })
    function funcResize(){
      console.log('Resize');
    }

    window.addEventListener('resize', funcResize)

    // cleaned function: cette fonction va s'éxécuter quand mon composant sera detruit
    return ()=> {
      window.addEventListener('remove', funcResize)
      
    }

  }, [])


  return (
    <>

    <ul>
      <li>{data.price}€</li>
      <li>{data.slug}</li>
    </ul>

    </>
)
}

export default App
