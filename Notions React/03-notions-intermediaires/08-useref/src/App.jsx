
import './App.css';
// useRef permet de selctionner des element comme querySelector en js et davoir accès a plusieurs fonctionnalitée et méthode. Par exemple nous allons utiliser une video estla selectionner avec useRef pour appliquer play pause stop etc...

// jimporte pour commencer useRef
import {useState, useEffect, useRef} from 'react';
import Video from './Video-01.mp4'

function App() {
  const [toggle, setToggle] = useState(false);

  // Je créer une variable
  const ref = useRef();

// je lis ma video avec ref 
// si je le log on va voir que jai un objet
console.log(ref);

// j'utilise du coup useEffect pour le cycle de vie de mon composant
useEffect(()=> {
// console.log(ref.current);
setTimeout(() => {
ref.current.pause();
}, 3000)
}, [])

// useRef est pas tout le temps utiliser mais il est utile si par exemple vous avez pas mal d'animation sur votre application

  const toggleFunc = () => {
    setToggle(!toggle)
  }
  return (
    <div className="App">
      {/* je lit useRef et ma video*/}
      <video ref={ref} width="100%" autoPlay muted controls>
        <source src={Video} type='video/mp4'/>
      </video>
      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );

};
export default App;

