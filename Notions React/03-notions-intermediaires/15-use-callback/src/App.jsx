import './App.css';
import {useState, useEffect, useRef, useMemo, useCallback} from 'react';
// useCallback permet de ne pas recrer une fonction a chaque mis a jour lors du changement de state d'un composant.
import Composant from './composants/composant'
function App() {

  const [toggle, setToggle] = useState([1,2,3]);

  const toggleFunc = () => {
    const tab = [...toggle];
    tab.push(4);
    setToggle(tab)
  }

const tab2 = useMemo(() => {
  return [1,2,3,4,5]
}, [])


// je cree ma fonction
const foo = useCallback(()=>{
// cela va créer une fonction lors du premier affichage de mon composant et ensuite si ce composant ce remet a jour il ne va pas recreer la fonction.
// les memos sont pas tres utiliser carcela ajoute bcp de syntaxe a votre projet mais cela peut etre utile lorsque lont englobe une fonction tres grande ou quand on utilise useMemo que l'ont va passer à énormement de composant. A savoir que lorsque lont utilise les props children malheuresement cela ce mettre a jour quand meme.
}, [])

  return (
    <div className="App">
{/* je le rajoute a mon composant */}
      <Composant nb={tab2} foo={foo}/>
    <button onClick={toggleFunc}>Toggle</button>
    </div>
  );

};
export default App;

