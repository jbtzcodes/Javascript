// Selectionner un tableau d'elements
import './App.css';
import {useState, useEffect, useRef} from 'react';
import Video from './Video-01.mp4'

function App() {
  const [toggle, setToggle] = useState(false);
  const ref = useRef([]);
// useEffect(()=> {
// setTimeout(() => {
// ref.current.pause();
// }, 3000)
// }, [])


  const toggleFunc = () => {
    setToggle(!toggle)
  }


// je commence par me cree une fonction dans une variable
const addRef = el => {
  // console.log(el);
  if(el && !ref.current.includes(el)){
    ref.current.push(el);
  }
}
// et je change mon use effect
useEffect(()=> {
console.log(ref);
}, [])

// ensuite je dupplique ma video pour avoir plusieur elements et je change la ref par addRef

// si je regarde dansma console je voit que mes trois video on etais loger, maintenant je change dans ma const addRef
  return (
    <div className="App">
      <video ref={addRef} width="100%" autoPlay muted controls>
        <source src={Video} type='video/mp4'/>
      </video>
      <video ref={addRef} width="100%" autoPlay muted controls>
        <source src={Video} type='video/mp4'/>
      </video>
      <video ref={addRef} width="100%" autoPlay muted controls>
        <source src={Video} type='video/mp4'/>
      </video>
      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );

};
export default App;

