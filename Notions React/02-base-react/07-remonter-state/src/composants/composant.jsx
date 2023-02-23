import {useState} from 'react'
function Item (props){
  //  #2 si je rajoute du state à l'enfant
  const [data, setData] = useState('State Data');
return (
<div>
      <h1>{props.nb}</h1>
        {/* <button onClick={props.func}>Changer le state</button> */}
        {/* "2" je place un argument a ma fonction */}
        <button onClick={() => props.func(data)}>Changer le state</button>
        {/* cela va remonter mon state jusquau parent */}
    </div>
)
}
export default Item;



