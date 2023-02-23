//  Les composants sont des fonctions que l'ont exporte afin d'afficher du contenu. Il peut contenir de la logique. Il y à deux types de composant:Les composants steakless qui n'ont pas de données et les fullless qui possède des données

// 1) on créer le composant
// 2) on importe le composant
import Composant from './components/01-Composant/Composant'
import './App.css'

function App() {


  return (
    <div className="App">
      {/* On declare le composant */}
        <Composant />
    </div>
  )
}

export default App
