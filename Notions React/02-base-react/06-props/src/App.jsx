// Les props

import {useState} from 'react'
// Créer et Import le composant 
import Composant from './composants/composant'

function App() {
  console.log("mise à jour du composent");
  const [monState, setMonState] = useState(7);
//  jepeut mettre tout sorte de valeur des chaines de caractere, des chiffres, des valeurs boolean
   const modifState = () => {

    setMonState(20);
  }
  return (
    <div className="App">
       <Composant txt={"hello"} />
       {/* on voit que cela a changer au niveau de la props que jai loger on voit quil est remplie avec mon txt. On voit egalement que jai donner une props depuis app.jsx donc depuis mon parent a mon enfant */}
       {/* // si jamais je veut ajouter dautre props qui nont pas la meme valeur sje duplique la ligne */}
        <Composant txt={"hello les devs"} />
        <Composant txt={"hello le monde"} />
    {/* on as utiliser le meme composant mais qui affiche des valeurs differentes */}

    {/* on va pouvoir egalemnt passer du state à notre enfant  */}
    <Composant nb={monState} />
    {/* changer dans le item props.txt par props.nb */}
    {/* si je change le state de mon parent cela va changer le state de mon enfant également ce qui estune regle qui il y a avec les hooks */}

    {/* pour racapituler un state ce mest a jour quand sont state change ou quand les props change  */}
    </div>
  )
}




export default App
