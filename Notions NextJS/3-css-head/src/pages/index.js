
// pour enregistrer une feuille de style on fait [nom].module.css puis on l'importe

import styles from '@/styles/Home.module.css'

// optimiser le HEADER
import Head from 'next/head'

export default function Home() {
  return (
    <>
    {/* Dans le Head cest la que l'ont va mettre les meta data , les meta données */}
    <Head>
      {/* encodage des caractere mais on peut l'enlever car il le possede nativement*/}
    <meta charset="UTF-8" />
    {/* pour l'adaptation au navigateur */}
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    {/* permet que l'ecran prenne la largeur de la fenetre avec un zoom à 100% */}
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    {/* balise de titre */}
    <title>Next JS</title>
    {/* on peut faire la même chose avec des pages dynamiques [id] aller dans l'index de portfolio */}
    </Head>

    <div className={styles.container}>
      <h1>NEXT JS</h1>
<a target="_blank" href="https://google.com">Accéder à Google</a>

<button className="btn btn-danger">Bouton bootstrap</button>

    </div>
    </>
  )
}

