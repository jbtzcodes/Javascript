
import  './comp.css'

// 1) le style inline avec les {{}}
// technique interessente pour faire des toggles
const toggle = false;
// 2) crée une variable
const style = {color: "violet"}
// 3) la feuille de style
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* "01" */}
      {/* <h1 style={{color: "orange"}}>hello depuis app</h1> */}
      {/* <h1 style={{color: toggle ? "orange" : "green"}}>Je suis un titre</h1> */}

      {/* 02 avec une variable*/}
      {/* <h1 style={style}>Je suis un titre</h1> */}

      {/* 03 la feuille de style */}
      <h1>Je suis un titre</h1>
      {/* importer votre feuille de style import  './comp.css' */}
  
      </header>
    </div>
  );
}
export default App;

