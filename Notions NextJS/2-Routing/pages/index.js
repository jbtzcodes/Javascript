import styles from '../styles/Home.module.css';

// 3
import Link from 'next/link'
import Navbar from "../Composants/Navbar/Navbar"


export default function Home() {
  return (
    <>
    <div className={styles.container}>
{/* <Navbar ></Navbar> */}
      <h1>NEXT JS</h1>
{/* 1) aller sur contact.js */}


{/* 3 créer des liens */}
<a target="_blank" href="https://google.com">Accéder à Google</a>

{/* <Link href='/portfolio' legacyBehavior>
  <a> Portfolio</a></Link>
<Link href='/portfolio/id' legacyBehavior>
  <a> Projets</a></Link> */}




    </div>
    </>
  )
}
