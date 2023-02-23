import React from 'react'

// on peut recupere le titre dynamiquement grace a useRouter meme si on prefere le faire avec des appel de données
import {useRouter} from 'next/router'
import Head from 'next/head'

export default function article() {
  return (
    
    <div>
        <h1>sous-page</h1>
    </div>
  )
}
