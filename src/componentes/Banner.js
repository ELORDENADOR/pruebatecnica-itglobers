import React, { useState } from "react";
import "../estilos/Banner.scss";
import img1 from "../img/Baner1.png";
import img2 from "../img/Baner2.png";
import img3 from "../img/Baner3.png";
import logoPrincipal from "../img/logoPrincipal.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronDown, faShoppingCart} from "@fortawesome/free-solid-svg-icons";

  const Banner = () => {
  const arregloImagenes = [img1, img2, img3];

  const [imagen, setImagen] = useState(arregloImagenes[0]);
  const [estado, setEstado] = useState(false);

  const [imagenSeleccionada, setImagenSeleccionada] = useState(
    arregloImagenes[0]
  );

  if (estado === false) {
    if (imagen == `${img1}`) {
      setTimeout(() => {
        setImagen(arregloImagenes[1]);
      }, 3000);
    }

    if (imagen == `${img2}`) {
      setTimeout(() => {
        setImagen(arregloImagenes[2]);
      }, 3000);
    }

    if (imagen == `${img3}`) {
      setTimeout(() => {
        setImagen(arregloImagenes[0]);
      }, 3000);
    }
  }

  const cambioImagen = (imgSelec) => {
    setEstado(true);
    // setImagen(arregloImagenes[imgSelec])
    setImagenSeleccionada(arregloImagenes[imgSelec]);
  };

  return (
    <div>
      <div id="contenedorTotalBtnUsuario">
        <div>
          <img id="logoPrincipal" src={logoPrincipal}></img>
        </div>

        <div id="contenedorMi">
          <div>
           <p id="miCuenta">MI CUENTA</p>
          </div>

          <div>
            <FontAwesomeIcon id="imgPufiRight" icon={faChevronDown} />
          </div>

         <div className="lineaB" >

         </div>


          <div>
            <p id="compraUsuario">MI COMPRA</p>
          </div>
        </div>
      </div>

      <div id="textoComodo">
        <h1>ESTÁR CÓMODO,</h1>
        <h1>NUNCA FUE TAN FACÍL</h1>
      </div>

      <div id="iconoCompras">
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>

      {estado === false ? (
        <div id="contenedorBanner">
          <img id="imgBanner1" src={imagen}></img>

          <div id="contenedorSeleccionarImagenbanner">
            <div id="seleccionarImg1" onClick={() => cambioImagen(0)}>
              ⚪
            </div>

            <div id="seleccionarImg2" onClick={() => cambioImagen(1)}>
              ⚪
            </div>

            <div id="seleccionarImg3" onClick={() => cambioImagen(2)}>
              ⚪
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <img id="imgBanner1" src={imagenSeleccionada}></img>
          </div>

          <div id="contenedorSeleccionarImagenbanner">
            <div id="seleccionarImg1" onClick={() => cambioImagen(0)}>
              ⚪
            </div>

            <div id="seleccionarImg2" onClick={() => cambioImagen(1)}>
              ⚪
            </div>

            <div id="seleccionarImg3" onClick={() => cambioImagen(2)}>
              ⚪
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
