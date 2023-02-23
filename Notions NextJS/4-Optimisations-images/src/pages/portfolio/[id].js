import React from 'react'



import{useRouter} from 'next/router'
// on peut recupere le titre dynamiquement grace a useRouter meme si on prefere le faire avec des appel de données
import Head from 'next/head'

export default function projet() {


  const router = useRouter()

  console.log(router);
  console.log(router.route);
  console.log(router.asPath);
  console.log(router.query);

  const pushFunc = ()=> {
    router.push('/')
  }

  return (
    <>
        <>
        <Head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{router.query.id}</title>
    </Head>
{/* on recupere le titre de mannière dynamique */}

    </>

      <h1>Projet</h1>
{/* <h1>Projets devs</h1> */}
{/* // si je tape http://localhost:3000/portfolio/projethuit je tombe sur ma page   */}
{/* pour dessous-pages des sous-pages créer fichier [...id].js */}
{/* // si je tape http://localhost:3000/portfolio/projetsix/soustheme je tombe sur ma page   */}


<h1>{router.query.id}</h1>

<button onClick={pushFunc}>Push Home</button>
    </>
  )
}
