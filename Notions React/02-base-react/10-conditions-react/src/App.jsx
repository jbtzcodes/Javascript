

import {useState} from 'react';
function App() {
  const [toggle, setToggle] = useState(true);
  
    const changeState = () => {
      setToggle(!toggle)
    }
 

//  if(toggle){
//    return (
//     <div className="App">
//       <button
//       onClick={changeState}>
//         Le state est true
//       </button>
//     </div>
//   );
//  } else if (toggle === false) {
//    return (
//     <div className="App">
//       <button
//       onClick={changeState}>
//         Le state est false
//       </button>
//     </div>
//   );
//  }

// 2eme mannière de faire

 let toggleContenu;
    if(toggle){
      toggleContenu = <h1>State true</h1>;
    } else {
      toggleContenu = <h1>State false</h1>;
    }
  
   if(toggle){
   return (
    <div className="App">
       {toggleContenu}
      <button
      onClick={changeState}>
        Le state est true
      </button>
    </div>
  );
 } else if (toggle === false) {
   return (
    <div className="App">
      {toggleContenu}
      <button
      onClick={changeState}>
        Le state est false
      </button>
    </div>
  );
 }
}
export default App;
