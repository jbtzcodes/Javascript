import React from 'react'

// on importe Image depuis next et nos images

import Image from 'next/image'
import img1 from '../../public/assets/img-1.jpg'
import img2 from '../../public/assets/img-2.jpg'
import img3 from '../../public/assets/img-3.jpg'

export default function Photos() {
  return (
    <>
    {/* aller sur http://localhost:3000/Photos */}
    {/* <img src="/assets/img-1.jpg" alt="" />
    <img src="/assets/img-2.jpg" alt="" />
    <img src="/assets/img-3.jpg" alt="" /> */}

    {/* pour optimisé */}
    {/* layout permet de gerer la disposition . sous le capot sa utilise srcset ce qui donne un src differente suivant la taille de l'ecran*/}
    <Image
    layout="responsive"
    // on peut mettre fixed pour ne pas changer la taille

    // pour mettre du flou au chargement de l'image
    placeholder="blur"
    width="3160"
    height="4803"  
    src={img1}
    />
    <Image
    layout="responsive"
    placeholder="blur"
    width="3024"
    height="4032"  
    src={img2}
    />
    <Image
    layout="responsive" 
    placeholder="blur"
    width="4000"
    height="6000" 
    src={img3}
    />
    {/* si on va sur la console dans network on vois que seulement limage visible ce charge et que les autresnom ce qui optimise les appels. La taille de l'image également baisse */}
    </>
  )
}
