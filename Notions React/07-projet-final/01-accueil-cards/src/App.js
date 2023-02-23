import './App.css';
import Navbar from './Composants/Navbar/Navbar'
import Home from './Containers/Home/Home'
import Header from './Composants/Header/Header'

function App() {
  return (
    <div className="App">
     <Navbar />
     <Header />
     <Home />
    </div>
  );
}

export default App;
