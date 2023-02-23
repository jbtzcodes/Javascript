import React from 'react'
import Navbar from '../Navbar/Navbar'
// Le container global dans Next.js sert à stocker des données et des fonctions qui peuvent être utilisées à travers plusieurs pages de l'application. Il permet de partager des données et des fonctions entre différentes pages de l'application sans avoir à les passer manuellement en tant que props de page en page. Cela peut être utilisé pour gérer l'état de l'application, les données de l'utilisateur, les préférences de l'utilisateur, etc.
export default function Container(props) {
  return (
   <>
   <Navbar />
   {props.children}
   </>
  )
}
