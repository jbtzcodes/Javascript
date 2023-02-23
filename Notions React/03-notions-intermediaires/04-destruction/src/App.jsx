import {useState, useEffect} from 'react'
import './App.css';



function App() {
  const [time, setTime] = useState(1);
  //  si je rajoute un state es que mon composant va etre supprimer a chaque mise a jour
  const [toggle, setToggle] = useState(false);

  useEffect(()=> {
    const interval = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
    return () => {
      clearInterval(interval)

    };
  }, [])

  // je cree ma function
  const toggleFunc = () => {
    setToggle(!toggle)
  }

 
  return (
    <div className="App">
      <h1>{time}</h1>
      <button onClick={toggleFunc}>Toggle</button>
      <h2>{toggle ? "true" : "false"} </h2>
    </div>
  );
  //  je change le state mais cela ne supprime pas mon composant lors de la mise a jour.

};

export default App;
