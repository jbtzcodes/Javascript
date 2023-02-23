import React from 'react'
// imaginon on fait des carte pour un ecommerce darticle
// je cree une fonction que je ne remplit pas je vais la remplire quand je veut lutiliser
// je stylise rapidement en css
export default function Composant(props) {
  console.log(props);
  return (
    <div className="box">
  {props.children}
    </div>
  )
}
