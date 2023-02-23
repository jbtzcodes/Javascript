import './App.css';
import {useState, useEffect, useRef} from 'react';
//  reactMemo nous permet dameliorer les performzances d'une application react. Cela marche avec toutes les types de props sauf le sprops children
import Composant from './composants/'
function App() {

  const [toggle, setToggle] = useState([1,2,3]);

  const toggleFunc = () => {
    const tab = [...toggle];
    tab.push(4);
    setToggle(tab)
  }


const tab2 = [1,2,3,4,5];

  return (
    <div className="App">
      {/*  la on voit si je toggle que sa le mest a jour a chaque fois */}
      {/* paser sur le composant */}
      <Composant nb={tab2}/>
    <button onClick={toggleFunc}>Toggle</button>

    {/* cela fonctionne parcque jai un nb si jamais jai un tableau | créer un tableau dans une const en haut sa ne fonctionnerais pas car un tableau estune valeur de reference donc a chaque mise a jour il va recreer un autre tableau mais je remedier a ce probleme grace a usememo*/}
    </div>
  );

};
export default App;

