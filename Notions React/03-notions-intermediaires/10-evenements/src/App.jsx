import './App.css';
import {useState, useEffect, useRef} from 'react';
import Video from './Video-01.mp4'
//  les evenements sont gerable directement depuis le jsx
// Mais on est obliger d'utiliser addEventListener pour etre à l'ecoute dun evenement sur l'objet window. et on utilise du coup levenement avec useEffect

function App() {
  const [toggle, setToggle] = useState(false);
  const ref = useRef([]);
  const toggleFunc = () => {
    setToggle(!toggle)
  }
const addRef = el => {
  if(el && !ref.current.includes(el)){
    ref.current.push(el);
  }
}
// a ce niveau la jajoute mon evenement avec une fonction
useEffect(()=> {
window.addEventListener('resize', resizePage );
function resizePage(){
console.log("La page est resize");
}

// Puis on clean la fonction avec un return qui va executer ce quont veut lorsque nbotre composant sera detruit
return()=> {
  window.removeEventListener('resize', resizePage)
}
}, [])



  return (
    <div className="App">
      <video ref={addRef} width="100%" autoPlay muted controls>
        <source src={Video} type='video/mp4'/>
      </video>
      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );

};
export default App;

