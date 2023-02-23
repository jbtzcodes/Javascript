import React from 'react'
// jimporte reactmemo pour quil memorise le composant et il va regarder si le props quil recoit on changer ou pas et si il ne change pas il ne se remettra pas a jour
function composant(props) {
  console.log(props);
  return (
    <div className="box">
  <h1>{props.nb}</h1>
    </div>
  )
}
// jutilise react memo 
// retourner dans app.js
export default React.memo(composant);
