import { useState } from "react";
function App() {
  const [toggle, setToggle] = useState(true);
  const changeState = () => {
    setToggle(!toggle);
  };
  return (
    <div className="App">
      {toggle && <h1>State true</h1>}
      <button onClick={changeState}>Le state est true</button>
    </div>
  );
}
export default App;
