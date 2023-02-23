import './App.css';
import {useState, useEffect, useRef} from 'react';
//  il ne faut jamais changer le state directement dans un tableau ou un objet.

function App() {
  //  on demarre par exemple le state a 1 puis on laffiche dans un h1
  // const [toggle, setToggle] = useState(1);

  const [toggle, setToggle] = useState([1,2,3]);

  const toggleFunc = () => {
    // je change ici egalement
    // setToggle(toggle + 2)

    // si je mest un tableau dans mon state de depart [1,2,3] puis dans ma fonction toogle je push(4) par exemple

    // toggle.push(4)
    // setToggle(toggle)

    //  rien ne ce passe car ici jai modifier le state directement donc react ne comprend pas et nexecute pas la fonction

    // pour que cela fonctionne il faut creer un nouveau tableau
    // jutilise le spread operator
    const tab = [...toggle];
    tab.push(4);
    setToggle(tab)
  }

console.log('mise a jour');


  return (
    <div className="App">
      <h1>{toggle}</h1>
      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );

};
export default App;

