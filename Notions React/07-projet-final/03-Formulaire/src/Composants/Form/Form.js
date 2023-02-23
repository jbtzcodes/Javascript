import React from 'react'
import './Form.css'

export default function Form() {
  return (
    <>
    <h1 className="title-form">Créer un article</h1>
    <form action="" className="container-form">
      <label htmlFor="title">Titre</label>
      <input id="title" type="text" placeholder='Choissiez un  titre'/>
      <label htmlFor="article">Article</label>
      <textarea id="article" placeholder='Editer votre article'></textarea>
      <button className="btn-form">Valider</button>
    </form>
    </>
  )
}
