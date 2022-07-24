import React from "react";
import imgPufirainRaight from "../img/imgPufirainRaight.png";
import "../estilos/PufirainRight.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import imgPufirainLeftFondo from "../img/ralla.png";

const PufirainRight = () => {
  return (
    <div>
      <img id="imgPufirainRaight" src={imgPufirainRaight}></img>

      <div id="textoPufi">
        <h1> Pufi RAIN </h1>

        <img src={imgPufirainLeftFondo}></img>
      </div>

      <p> Descripcion del producto. Este es un texto simulado</p>

      <div id="contenedorVermas">
        <div id="imgMayorPufirainRight">
          <FontAwesomeIcon id="imgPufiRight" icon={faAngleRight} />
        </div>
        <div id="textoVermasPufirainRight">
          <h4> VER MAS </h4>
        </div>
      </div>
    </div>
  );
};

export default PufirainRight;
