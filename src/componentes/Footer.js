import React from 'react'
import "../estilos/Footer.scss"
import imgPufipuffRightFondo from "../img/logopufi.png"
import icono1 from "../img/icono1.png"
import icono2 from "../img/icono2.png"
import logo3 from "../img/logo3.png"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebook,faTwitter,faInstagram}from "@fortawesome/free-brands-svg-icons"


const Footer = () => {
  return (
    <div>
       <hr></hr>
          <div className='ContenedorElementosFooter'>
                
                <div className='elementoTextoPufi'>
                      <img  src={imgPufipuffRightFondo}></img>
                </div>

                <div className='elementoTextoPufi ralla'>
                            <div>
                              PUFI  RAIN
                            </div>
                            <div>
                              PUFI  PUFF
                            </div>
                            <div>
                              PUFI  CART
                            </div>
                            <div>
                              PUFI NAP
                            </div>
                </div>

                <div className='elementoTextoPufi ralla'>
                           <div>
                              PUFI  RAIN
                            </div>
                            <div>
                              PUFI  PUFF
                            </div>
                            <div>
                              PUFI  CART
                            </div>
                            <div>
                              PUFI NAP
                            </div>
                </div>

                <div className='elementoTextoPufi ralla'>
                             <div>
                              Compra 100% Segura
                            </div>
                            
                          <div id='contenedorTotalSeguro'>
                               <div>
                                <img className='confIconoSeguro' src={icono1}></img>                               
                               </div>

                               <div>
                                 <img className='confIconoSeguro'  src={icono2}></img>
                               </div>
                              
                              <div id='cajaSegura'>
                                  COMPRA CON LA GARANTIA DE PUFI
                              </div>
                          </div>
                </div>
                         
                <div className='elementoTextoPufi'>
                           
                <div id='contenedorTotalSiguenos' > 
                            <div>
                                Siguenos en 
                            </div>

                            <div id='redS1'>
                            <FontAwesomeIcon  icon={faFacebook} /> 
                            </div>

                            <div id='redS2'>
                            <FontAwesomeIcon  icon={faTwitter} /> 
                            </div>

                            <div id='redS3'>
                            <FontAwesomeIcon  icon={faInstagram} /> 
                            </div>

                </div>

                </div>
          </div>
                <hr></hr>
              
                <div id='contenedorElementosCopyRaight'>
                      <div>
                        <p id='textoCopyRaight'>PUFI Copyright 2007 - Todos los derechos reservados</p>
                      </div>
                      <div id='logoBrandlive'>
                        <img id='logo3' src={logo3}></img>  
                      </div>
                </div>


    </div>
  )
}

export default Footer