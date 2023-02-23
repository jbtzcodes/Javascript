import {useState, useEffect} from 'react'
// appeler une api


import './App.css';

function App() {
  // 1) créer un state

  const [imgBase, setImgBase] = useState();
  useEffect(() => {
    // 2 jutilise la methode fetch pour faire appelle a une api
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((rep) => {
        console.log(rep);
        // on transform la reponse en json
        return rep.json();
      })
      .then((data) => {
        console.log(data);
        // jutilise la methode set pour prendre limage
        setImgBase(data[2].url);
      });
  }, [])
  return <div className="App">
    {imgBase && <img src={imgBase} alt="dogg" style={{width: "100px"}}/>}
    {/* seulement si imgBase es true sa affcihera imgBase sinon sa affichera rien du tout */}
  </div>;
}

export default App;
