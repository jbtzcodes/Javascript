import React from 'react'
import Link from 'next/link'

// on importe
import style from "./Navbar.module.css"


export default function Navbar() {
  return (
    // on applique
   <nav className={style.navigation} >
    <Link href='/' legacyBehavior>
  <a> Accueil</a></Link>
    <Link href='/portfolio' legacyBehavior>
  <a> Portfolio</a></Link>
<Link href='/portfolio/id' legacyBehavior>
  <a> Projets</a></Link>
<Link href='/contact' legacyBehavior>
  <a> Contact</a></Link>
   </nav>
  )
}
