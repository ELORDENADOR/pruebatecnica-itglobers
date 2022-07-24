import React, { useState } from 'react'
import "../estilos/Menu.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faUmbrella,faRug,faBars,faBagShopping,faChair}from "@fortawesome/free-solid-svg-icons"
// import {faChair}from "@fortawesome/free-solid-svg-icons"
// import {faBagShopping}from "@fortawesome/free-solid-svg-icons"
// import {faRug}from "@fortawesome/free-solid-svg-icons"
// import {faBars}from "@fortawesome/free-solid-svg-icons"


const Menu = () => {

    const [menuInfPC,setMenuInfPC] = useState(false)
    const [botonMenuInfPC1,setBotonMenuInfPC1] = useState(false)
    const [botonMenuInfPC2,setBotonMenuInfPC2] = useState(false)



const clickMenuInfPC1 = () =>{
    setBotonMenuInfPC1(true)
}

const clickMenuInfPC2 = () =>{
    setBotonMenuInfPC1(false)
}


  return (
    <div>      
             
          <div id='contenedorMenuPC'>
                
                    <div id='opcPUFIPUFF'>
                        <div className='imgOpcMenu'>
                        <FontAwesomeIcon id='imgOpcMenuPUFIPUFF'  icon={faChair} />
                        
                   </div>
                        <div>                            
                            <a  href='#pufipuff' >PUFI PUFF</a>  
                        </div>                       
                    
                    </div>
                    
                    <div id='opcPUFIRAIN'>
                            <div className='imgOpcMenu'>
                            <FontAwesomeIcon  id='imgOpcMenuPUFIRAIN' icon={faUmbrella} />
                            </div>
                            <div>
                               
                                <a  href='#pufirain' > PUFI RAIN </a> 
                            </div>         
                    </div>

                    <div id='opcPUFICART'>
                            <div className='imgOpcMenu'>
                            <FontAwesomeIcon id='imgOpcMenuPUFICART' icon={faBagShopping} />
                            </div>
                            <div>
                                
                                <a  href='#puficart' >PUFI CART</a> 
                            </div>        
                   </div>

                    <div id=' opcPUFINAP'>
                            <div className='imgOpcMenu'>
                            <FontAwesomeIcon id='imgOpcMenuPUFINAP'  icon={faRug} />
                            </div>
                            <div>
                                
                                <a  href='#pufinap' >PUFI NAP</a>  
                            </div>        
                    </div>

          </div>
       

{/* Configuracion Menu Infrior PC */}
       
           <div  id='btnMenuInfPC' onClick={() => clickMenuInfPC1()}>
             <FontAwesomeIcon id='ImgMenuInfPC' icon={faBars} />
            </div>
{
      
      botonMenuInfPC1 === false ? 
      (

            <div id='contenedorMenuInfPC'>


            <div id='imgOpcMenuPUFIPUFFInfPC'>
            <div >
            <FontAwesomeIcon  icon={faChair} />
            </div>
            <div className='textoImgMneuInfPC'>
            <a  href='#pufipuff' >PUFI PUFF</a>  
            </div>                       
                    
            </div>


            <div id='imgOpcMenuPUFIRAINInfPC'>
            <div>
                <FontAwesomeIcon icon={faUmbrella} />
                </div>
                <div className='textoImgMneuInfPC'>
                <a  href='#pufirain' > PUFI RAIN </a> 
            </div>         
            </div>


            <div >
            <div id='imgOpcMenuPUFICARTInfPC'>
            <FontAwesomeIcon  icon={faBagShopping} />
            </div>
            <div className='textoImgMneuInfPC'>
            <a  href='#puficart' >PUFI CART</a> 
            </div>        
            </div>


            <div >
            <div id='imgOpcMenuPUFINAPnfPC' >
            <FontAwesomeIcon   icon={faRug} />
            </div>
            <div className='textoImgMneuInfPC'>
               
                <a  href='#pufinap'> PUFI NAP</a>  
            </div>        
            </div>

            </div>

                )
                : 
                (

                    <div  id='btnMenuInfPC' onClick={() => clickMenuInfPC2()}>
                      <FontAwesomeIcon id='ImgMenuInfPC' icon={faBars} />
                   </div>
                )                
     }                         
          
    </div>
  )
}

export default Menu