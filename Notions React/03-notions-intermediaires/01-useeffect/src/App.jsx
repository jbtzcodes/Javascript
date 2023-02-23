import {useState, useEffect} from 'react'
// importer useEffect

import './App.css';

function App() {
  //  je créer mon state
  const [data, setData] = useState(1);
  const [dataA, setDataA] = useState(1);
  const [dataB, setDataB] = useState(1);
  //  je vais vouloir modifier le state au click


const modifState = () => {
  setDataB(dataB + 1);
}

// useEffect prend une fonction callback qui va lappeler a des moment precis.
// useEffect(()=> {
// // console.log('maj');
// })

//  Useeffect sa peut ce lancer lors du premier affichage, pour ce faire je lui place un dernier argument qui sera un tableau vide
// useEffect(() => {
//   console.log('maj');
// }, []);
// le tableau va nous permettre de surveiller le state. Si je mest rien a linterieur je nest rien envie de surveiller. cest utilise par exemple pour les appelle d api lorsque vous vous ne vouler pas que lapi soit appeler a chaque fois que le composant ce mette a jour.
useEffect(() => {
  console.log("data modifier");
}, [data]);
// cela est utilise lorsque jai plusieur state (creer 3 states)
  return (
    <div className="App">
     <h1>STATE: {dataB}</h1>
     <button
     onClick={modifState}
     >Modifier le state</button>
    </div>
  );
}

export default App;
