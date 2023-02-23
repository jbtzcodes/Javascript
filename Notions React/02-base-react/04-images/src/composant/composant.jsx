import img1 from './image-01.jpg'

function Comp(){
  return (
    <div>
      {/* pour integrer du css inline aavec jsx on utilise les double acollades */}
       <img src={img1} style={{width: "150px"}} alt="" />
     
    </div>
  )
}

// je l'export pour pouvoir limporter
export default Comp;
