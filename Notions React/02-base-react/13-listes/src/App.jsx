import { useState } from "react";
function App() {
  const [tab, setTab] = useState([
    {ville: "Madrid"},
    {ville: "Londres"},
    {ville: "Berlin"}
  ]);
 
  return (
    <div className="App">
      {/* {tab.map(item => {
        return <p>Ville: {item.ville}</p>
      })} */}

      {/* key */}
      {tab.map((item, index)=> {
        return <p key={index}>Ville: {item.ville}</p>
      })}
    </div>
  );
}
export default App;

