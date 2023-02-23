//  Les props (propriété) sont des données que l'ont va pouvoir mannipuler dans nos composants et entre nos composants. On les fait passer de haut en bas mais il existe une technique pourles faire passer de bas en haut.
import Composant from './components/02-Props/Composant'
import './App.css'

function App() {

// 2)  On peut également passer des fonction
// const func = () =>{
// alert('hello function');
// }
  return (
    <div className="App">
      {/* 1) je passe une props qui peut être tout sortes de valeurs*/}
      {/* Puis aller sur l'enfant Composant */}
        <Composant txt="Hello depuis la props"/>
        {/* <Composant nb={7}/> */}
        {/* <Composant tab={[1,2,3,4,5,6]}/> */}
        {/* <Composant tabNew={[<p>1</p>,<p>2</p>,<p>3</p>]}/> */}
        {/* <Composant func={func}/> */}

    {/* Pour mettre du contenu que l'ont ne sait pas au préalable */}
        <Composant nb="7">
          {/* le déclaré dans le return de l'enfant */}
    <p>Props children</p>
        </Composant>

    </div>
  )
}

export default App
