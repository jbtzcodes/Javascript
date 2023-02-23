
import styles from '@/styles/Home.module.css'


import Head from 'next/head'


// Rajouter props
export default function Home(props) {

console.log(props);
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



{/* PAGE STATIC */}
{/* On peut afficher nos datas */}
{/* <ul>{props.tab.map(el => (
  <li>{el.fr}</li>
))}</ul>
<ul>{props.tab.map(el => (
  <li>{el.en}</li>
))}</ul> */}


{/* PAGE DYNA */}

<h1>{props.dataC.title}</h1>
<h1>{props.dataC.userId}</h1>
<h1>{props.dataC.id}</h1>



    </div>
    </>
  )
}

// page static
// On rajoute une fonction assynchrone

// export async function getStaticProps(){
//   const data = await import(`../data/data.json`)
//   const tab = data.data

//   return {
//     props: {
//       tab
//     }
//   }
// }


// PAGE DYNA
// https://goquotes-api.herokuapp.com/api/v1/random?count=1

export async function getStaticProps(){
const citation = await fetch('https://jsonplaceholder.typicode.com/todos/1')

const dataC = await citation.json()

return {
  props: {
    dataC
  },
  // propriete revalidate va reexecuter le fetech au bout de 20 segondeq
  revalidate: 20

  // vous pouvez faire un npm run start apres un npm run start meme si vous avez deja fait la premier commande
}

}

