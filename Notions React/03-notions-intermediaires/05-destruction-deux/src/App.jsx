import {useState, useEffect} from 'react'

// composant 5.jsx
import './App.css';
import Timer from './composants/composant'



function App() {
  const [toggle, setToggle] = useState(false);


  // je cree ma function
  const toggleFunc = () => {
    setToggle(!toggle)
  }
 

 
  return (
    <div className="App">
      <button onClick={toggleFunc}>Toggle</button>
      <h2>{toggle && <Timer />} </h2>
    </div>
  );
  //  je change le state mais cela ne supprime pas mon composant lors de la mise a jour.
  // on peut suivre la destruction dun element .Créer un timer.js et mettre le timer dedan et dans la app.js supprime le timer

};

export default App;
