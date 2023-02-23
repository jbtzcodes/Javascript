// 1) importer useState et useDispatch
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Form.css";

export default function Form() {
  // 2) on va lier notre formulaire
  const [article, setArticle] = useState({
    title: "",
    body: "",
  });

  // 3 on mest en place le dispatch

  const dispatch = useDispatch();

  const preventForm = (e) => {

    // 9) maintenant on dispatch
    e.preventDefault();
dispatch({
  type: "ADDARTICLE",
  playload: article
})
setArticle({
  title: "",
  body: ""
})
// 9) ceci va remettre a zero lorsque l'ont va submit
// 10) aller dans le reducer et rajoute rla case au switch


  };

  // 5) on gere ensuite le remplissage du formulaire

  const dataInputs = (e) => {
    // 7) on verfifie avec un console log
    // console.log('state change');

    if (e.target.classList.contains("inp-title")) {
      const newObjState = {
        //  on prend tout ce quil ya dans notre state on en fait une copie avec le spread operator et on change ensuite la propriété title
        ...article,
        title: e.target.value,
      };
      setArticle(newObjState);
    } else if (e.target.classList.contains("inp-body")) {
      const newObjState = {
        ...article,
        body: e.target.value,
      };
      setArticle(newObjState);
    }
  };
// on verifie si le state passe bien quand on remplie avec un console.log
  console.log(article);

  return (
    <>
      <h1 className="title-form">Créer un article</h1>
      {/* 4) on le rajoute au formulaire */}
      <form onSubmit={preventForm} action="" className="container-form">
        {/* 6) je le rajoute sur mes inputs */}
        <label htmlFor="title">Titre</label>
        <input
          // 6) onInput va trigger des quon ce mest a ecrire
          // 6) onChange va trigger des que l'ont quitte le focus de l'input
          // 7) on va lier maintenant nos state
          // 8) on rajoute une classe pour pouvoir les reperer dans notre fonction
          onChange={dataInputs}
          value={article.title}
          id="title"
          type="text"
          placeholder="Choissiez un  titre"
          className="inp-title"
        />
        <label htmlFor="article">Article</label>
        <textarea
          onChange={dataInputs}
          value={article.body}
          id="article"
          placeholder="Editer votre article"
          className="inp-body"
        ></textarea>
        <button className="btn-form">Valider</button>
      </form>
    </>
  );
}
