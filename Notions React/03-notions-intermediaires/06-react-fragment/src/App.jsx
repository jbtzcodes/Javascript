
import './App.css';



function App() {  

//  En jsx il faut retourner qu'un seul élément.Eviter les éléments adjacant pour ne pas avoir de probleme de compilation.  les fragments nous permet de ne pas ajouter des noeuds dans le dom pour rien.Si je veut mettre plusieur elements sans que sa me cree de nouveau noeud j'utilise les reactfragments. Cela permet de ne pas allourdire le DOM.

// 1) jimporte fragment
  return (

    // <div>
    //   <h1>titre</h1>
    //   <h1>titre</h1>
    //   <h1>titre</h1>
    // </div>

    // Les fragments Ancienne mannière de faire
    // <Fragment>
    // <h1>Je suis un titre</h1>
    // <h1>Je suis un titre</h1>
    // <h1>Je suis un titre</h1>
    // <h1>Je suis un titre</h1>
    // </Fragment>
  // nouvelle manière de faire utiliser les <>
  <>
  <h1>Titre</h1>
  <h1>Titre</h1>
  <h1>Titre</h1>
  <h1>Titre</h1>
  </>
  );


};

export default App;
