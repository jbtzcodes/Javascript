import {useState, useEffect} from 'react'
import './App.css';



function App() {
  const [time, setTime] = useState(1)

  useEffect(()=> {
    const interval = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
    // useEffect peut retourner une fonction
    return () => {
      clearInterval(interval);
      // cela va clear mon interval pour eviter davoir des problemes de memoir. cest le cycle de vie d'un composant
    };
  }, [])

 
  return (
    <div className="App">
      <h1>{time}</h1>
    </div>
  );

};

export default App;
