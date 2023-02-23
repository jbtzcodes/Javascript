import React from 'react'

// ######### 1) Créer des routes 

// si je tape http://localhost:3000/contact je tombe sur ma page  



// ######### 1) Créer des routes dynamiques
//  si j'ajoute un dossier ex: portfolio il faut que je créer un index.js qui sera le parent du contenu portfolio ou autrement dit le fichier de départ.Cela est valable pour chaque dossier ajouter au dossier pages

// si je rajoute un fichier [id].js jepourrait atteindre nimporte quelle article que je rajouterais a portfolio

export default function contact() {
  return (
    <div>

      <h1>Page contact</h1>
    </div>
  )
}
