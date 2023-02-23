import React, {useState, useEffect} from 'react'
import './Navbar.css'


export default function Navbar() {

  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }



  useEffect(()=> {
const modifWidth = ()=> {
  setLargeur(window.innerWidth);
}

    window.addEventListener('resize', modifWidth);
    return ()=> {
      window.removeEventListener('resize', modifWidth)
    }
  }, [])

  return (
    <nav>
      {(toggleMenu || largeur > 800) && (
        <ul className="liste">
          <li className="item">Accueil</li>
          <li className="item">Blog</li>
          <li className="item">Editer</li>
          <li className="item">Contact</li>
        </ul>
      )}
      <div onClick={toggleNav} className="burger">
        <div className="dot dot1"></div>
        <div className="dot dot2"></div>
        <div className="dot dot3"></div>
      </div>
    </nav>
  );
}
