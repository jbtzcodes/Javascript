import Composant from './composants/composant'
import {useState} from 'react'

function App() {
  // const [monState, setMonState] = useState(7);

  // const modifState = () => {
  //  setMonState(20)
  const [monState, setMonState] = useState(7);

  const modifState = (data) => {
    console.log(data);
  //  setMonState(20)
  // #3 je fait ensorte que le state du parent soit le state de lenfant
  setMonState(data)
  }
  return (
    <div className="App">
      <h1>{monState}</h1>
      {/* créer le composant composant.jsx */}
      {/*  je peut utiliser ici egalement des fonction */}
      {/* cela change le state du parent avec un enafnt */}
      <Composant func={modifState}/>
    </div>
  );
}
export default App;
