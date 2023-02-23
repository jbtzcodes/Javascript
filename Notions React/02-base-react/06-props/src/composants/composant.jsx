// On lui passe donc props en parametre
function Item (props){
  console.log(props);
  //  si on le log on voit que props est un objet. C'est un objet qui va contenir ce que va lui donner sont parent. Il va donc retourner un objet avec les enfants depuis le parent. Pour passer une props a notre composant dans l'app.jsx ajouter txt={"hello"}
return (
// {/* <h1>{props.nb}</h1> */}
<h1>{props.txt}</h1> 


)
}


export default Item;



// //  si je sais quelle parametre sera placer dans la fonction je peut faire ceci. Ce qu'ont appele du destructuring ca va crée une variable à partir d'une propriété props
// function Item ({nb}){
// return (
// <h1>{nb}</h1>
// )
// }

// export default Item;