import React from 'react'
import nap from "../img/nap.png"
import "../estilos/PufinapLeft.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngleRight}from "@fortawesome/free-solid-svg-icons"
import imgPufirainLeftFondo from "../img/ralla.png"

const PufinapLeft = () => {
  return (
    <div>
        <img id='imgPufiNapLeft' src={nap}></img>  

         <div>
            
                 <h1> Pufi NAP </h1>
         
                 <img  src={imgPufirainLeftFondo}></img>
         </div>
       
        <p> Descripcion del producto. Este es un texto simulado</p>
       
       
      <div id='contenedorVermasNapLeft'>
         <div id='imgMayorPufiNapLeft'>
              <FontAwesomeIcon  id='imgPufiRight' icon={faAngleRight} />              
          </div>
          <div id='textoVermasPufiNapLeft'>
              <h4> VER MAS  </h4>
          </div>
     </div>
       
       
    </div>
  )
}

export default PufinapLeft