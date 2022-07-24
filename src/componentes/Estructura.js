// En este archivo se creara la estructura de la pagina  
// con elementos Grid para luego implementar componentes 
// en sus diferentes elementos.

import React from 'react'
import "../estilos/Estructura.scss"
import Banner from './Banner'
import Espufi from './Espufi'
import Footer from './Footer'
import Menu from './Menu'
import PuficartLeft from './PuficartLeft'
import PuficartRight from './PuficartRight'
import PufinapLeft from './PufinapLeft'
import PufinapRight from './PufinapRight'
import PufipuffLeft from './PufipuffLeft'
import PufipuffRight from './PufipuffRight'
import PufirainLeft from './PufirainLeft'
import PufirainRight from './PufirainRight'
import Suscribete from './Suscribete'

const Principal = () => {
  return (
    <div id='contenedorEstructura'>
      {/* <h1>Prueba tcnica IT Glober</h1> */}
     
       <div id='salto'>

       </div>

      <section id='banner'>
         <a name="banner"></a>
         <Menu/>
         <Banner/>
      </section>

      <section id='pufirainLeft'>
        <PufirainLeft/>
      </section>

      <section id='pufirainRight'>
      <a name="pufirain"></a>
        <PufirainRight/>
      </section>


      <section id='pufipuffLeft'>
      <a name="pufipuff"></a>
        <PufipuffLeft/>
      </section>

      <section id='pufipuffRight'>
        <PufipuffRight/>
      </section>


      <section id='puficartLeft'>
      <a name="puficart"></a>
        <PuficartLeft/>
      </section>

      <section id='puficartRight'>
        <PuficartRight/>
      </section>

      <section id='pufinapLeft'>
        <a name="pufinap"></a>
        <PufinapLeft/>
      </section>


      <section id='pufinapRight'>
            <PufinapRight/>
      </section>
       

      <section id='espufi'>
          <Espufi/>
      </section>

      <section id='suscribete'>
         <Suscribete/>
      </section>

      <section id='footer'>
        <Footer/>
      </section> 

    </div>
  )
}

export default Principal