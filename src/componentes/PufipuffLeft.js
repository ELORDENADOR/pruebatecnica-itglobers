import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngleRight}from "@fortawesome/free-solid-svg-icons"
import puff from "../img/puff.png"
import ralla from "../img/ralla.png"
import "../estilos/PufipuffLeft.scss"

const PufipuffLeft = () => {
  return (
   <div>
                <img id='imgPufirainLeft' src={puff}></img>  

        <div id='textoPufiLeft'>
        
                <h1> Pufi PUFF </h1>

                <img  src={ralla}></img>
        </div>

        <p> Descripcion del producto. Este es un texto simulado</p>


        <div id='contenedorVermasLeft'>
        <div id='imgMayorPufirainLeft'>
            <FontAwesomeIcon  id='imgPufiRight' icon={faAngleRight} />              
        </div>
        <div id='textoVermasPufirainLeft'>
            <h4> VER MAS  </h4>
        </div>
        </div>

    </div>
  )
}

export default PufipuffLeft