import './App.css';
import {useState, useEffect, useRef, useMemo} from 'react';
//  useMemo permet de faire la meme chose que react memo mais avec un tableau et un objet
import Composant from './composants/composant'
function App() {

  const [toggle, setToggle] = useState([1,2,3]);

  const toggleFunc = () => {
    const tab = [...toggle];
    tab.push(4);
    setToggle(tab)
  }



// const tab = [1,2,3,4,5];
const tab2 = useMemo(() => {
  return [1,2,3,4,5]
}, [])

  return (
    <div className="App">

      <Composant nb={tab2}/>
    <button onClick={toggleFunc}>Toggle</button>
    </div>
  );

};
export default App;

