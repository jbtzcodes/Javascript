import React from 'react'
// jimporte un link
import Link from 'next/link'

export default function index() {
  return (
    <>

        <h1>Portfolio</h1>
        {/* créer le link */}
        <Link href={`/portfolio/5 extensions VScode`} legacyBehavior>
        <a>5 extensions VScode</a>
        </Link>
        {/* aller dans [id] */}
    </>
  )
}
