import React from 'react'
import Link from 'next/link'


export default function Navbar() {
  return (
   <nav >
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
