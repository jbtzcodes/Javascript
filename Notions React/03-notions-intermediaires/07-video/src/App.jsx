
import './App.css';

import {useState, useEffect} from 'react';

// on importe la video
import Video from './Video-01.mp4'

function App() {
  const [toggle, setToggle] = useState(false);
  const toggleFunc = () => {
    setToggle(!toggle)
  }
  return (
    <div className="App">
      {/* j'integre ma video */}
      <video width="100%" autoPlay Muted controls>
        <source src={Video} type='video/mp4'/>
      </video>
      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );

};
export default App;

