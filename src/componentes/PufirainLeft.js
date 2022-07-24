import React from 'react'
import imgPufirainLeftFondo from "../img/imgShop.png"
import "../estilos/PufirainLeft.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faShoppingCart}from "@fortawesome/free-solid-svg-icons"
const PufirainLeft = () => {
  return (
    <div>
           <img id='imgPufirainLeftFondo' src={imgPufirainLeftFondo}></img>

            <div id='iconoComprasRainLeft'>
                 <FontAwesomeIcon  icon={ faShoppingCart} />
             </div>


    </div>



  )
}

export default PufirainLeft