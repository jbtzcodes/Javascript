import { useState } from "react";

import './App.css'
function App() {
  const [toggle, setToggle] = useState(false);
  const changeState = () => {
    setToggle(!toggle);
  };
  return (
    <div className="App">
      <div className="box" style={{backgroundColor: toggle ? "red" : "pink"}}></div>
      {/* // ajouter du css dans app.css */}
      <button onClick={changeState}>Le state est true</button>
    </div>
  );
}
export default App;