import './App.css';
import {useState, useEffect, useRef} from 'react';
//  les props.children nou ssert quand on a un composant mais quon cest pas encore quelle ocntenu on va afficher
// composant6.jsx
// jimporte mon composant
import Composant from './Composants/composant'
function App() {

  const [toggle, setToggle] = useState([1,2,3]);

  const toggleFunc = () => {
    const tab = [...toggle];
    tab.push(4);
    setToggle(tab)
  }

console.log('mise a jour');


  return (
    <div className="App">
      {/*  je peut mettre du contenu directement a linterieur de mon composant */}
      <Composant >
        <h1>Titre artcile 1</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quis enim non rem debitis facilis blanditiis inventore quaerat, vel velit!</p>
      </Composant>
      <Composant >
        <h1>Titre artcile 2</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quis enim non rem debitis facilis blanditiis inventore quaerat, vel velit!</p>
      </Composant>
      <Composant >
        <h1>Titre artcile 3</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quis enim non rem debitis facilis blanditiis inventore quaerat, vel velit!</p>
      </Composant>
    
    </div>
  );

};
export default App;

