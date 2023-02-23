

import {useState} from 'react';
function App() {
  // je crée un state que je mesten valeur dans mon input
  const [inputState, setInputState] = useState();
  const changeInput = (e) => {
    // console.log(e);
    setInputState(e);
  }
  console.log(inputState);
  return (
    <div className="App">
      <header className="App-header">
      <input 
      type="text"
      value={inputState}
      onInput={e => changeInput(e.target.value)}
      />
      </header>
    </div>
  );
}
export default App;