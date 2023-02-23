// Mettre 3 images dans le dossier asset dans public et créer lapage Photo
import styles from '@/styles/Home.module.css'


import Head from 'next/head'

export default function Home() {
  return (
    <>

    <Head>

    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Next JS</title>
    </Head>

    <div className={styles.container}>
      <h1>NEXT JS</h1>
<a target="_blank" href="https://google.com">Accéder à Google</a>

<button className="btn btn-danger">Bouton bootstrap</button>

    </div>
    </>
  )
}

