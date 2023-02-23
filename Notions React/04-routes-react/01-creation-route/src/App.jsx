import './App.css';
// 4) importer le router
import {Routes, Route} from 'react-router-dom'
// 6) importer notre composant home
import Home from './composants/composant'
// 7) cela fonctionne quand je suis a la page accueil seulement si je rajoute a ladresse du local host /portfolio il ny aurais pas mon composant

function App() {
  return (
    <div className="App">
  {/* 5) créerune route */}
  <Routes>
    {/* route va prendre deux chose un chemin "path" comme quand vous etez a la racine de votre site ./ et l'élément que lon va montrer */}
    <Route path="/" element={<Home />}>

    </Route>
  </Routes>
    </div>
  );
}

export default App;
