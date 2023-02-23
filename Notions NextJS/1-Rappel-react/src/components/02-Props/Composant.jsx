import React from 'react'



// on passe la props
// export default function Composant(props) {
  // Nous pouvons également faire du destructuring
export default function Composant({children, nb}) {

  // console.log(props);

  // function depuis la props
  // props.func();
  return (
    <div>
        <h1>Hello depuis mon composant</h1>
        {/* <p>{props.txt}</p> */}
        {/* <p>{props.nb}</p> */}
        {/* <p>{props.tab}</p> */}
        {/* <p>{props.tabNew}</p> */}

        {/* <p>{props.children}</p> */}
        <p>{nb}</p>
        <p>{children}</p>

    </div>
  )
}
