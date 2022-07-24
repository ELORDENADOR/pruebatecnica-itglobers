import React from 'react'
import "../estilos/Espufi.scss"

import imgEspufi1 from "../img/espufi1.png"
import imgEspufi2 from "../img/espufi2.png"
import imgEspufi3 from "../img/espufi3.png"

import imgEspufi4 from "../img/espufi4.png"
import imgEspufi5 from "../img/espufi5.png"
import imgEspufi6 from "../img/espufi6.png"

const Espufi = () => {
  return (
    <div>
       <div id='textoEspufi'>
           INSTAGRAM
        <h1>#ESPUFI</h1>
       </div>
    
      <div className='contenedorCuadroDeImagenesEspufi1'>
           
                <img id='imgEspufi' src={imgEspufi1}></img>         
                <img id='imgEspufi' src={imgEspufi2}></img>
                <img id='imgEspufi' src={imgEspufi3}></img>          
       </div>
      
      
       <div className='contenedorCuadroDeImagenesEspufi1'>         
                <img id='imgEspufi' src={imgEspufi4}></img>         
                <img id='imgEspufi' src={imgEspufi5}></img>
                <img id='imgEspufi' src={imgEspufi6}></img>         
         </div>

    </div>
  )
}

export default Espufi