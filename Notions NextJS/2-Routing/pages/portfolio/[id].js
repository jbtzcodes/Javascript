import React from 'react'


// ##USEROUTER
import{useRouter} from 'next/router'

export default function projet() {

  // Un routeur avec Next.js est un composant qui permet de gérer les routes de votre application. Il s'agit d'un outil qui gère les URLs de votre application et détermine quelle page ou composant afficher en fonction de l'URL demandée. Il permet également de gérer les redirections et les erreurs de routing. Next.js utilise le module next-routes pour gérer les routes de manière simple et efficace dans une application React.
  const router = useRouter()
// objet router
  console.log(router);
  // route
  console.log(router.route);
  //asPath = retrouve le chemin dans le quelle on est 
  console.log(router.asPath);
  // query qui represente le slug, cest ce quon va retrouver à la fin de l'url 
  console.log(router.query);

// fonctiont pour retourner à la page d'accueil
  const pushFunc = ()=> {
    router.push('/')
  }

  return (
    <>

      <h1>Projet</h1>
{/* <h1>Projets devs</h1> */}
{/* // si je tape http://localhost:3000/portfolio/projethuit je tombe sur ma page   */}
{/* pour dessous-pages des sous-pages créer fichier [...id].js */}
{/* // si je tape http://localhost:3000/portfolio/projetsix/soustheme je tombe sur ma page   */}




<button onClick={pushFunc}>Push Home</button>
    </>
  )
}
