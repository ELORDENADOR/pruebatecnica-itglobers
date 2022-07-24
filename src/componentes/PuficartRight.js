import React from "react";
import cart from "../img/cart.png";
import "../estilos/PuficartRight.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import ralla from "../img/ralla.png";

const PuficartRight = () => {
  return (
    <div>
      <img id="imgPuficartRight" src={cart}></img>

      <div>
        <h1> Pufi CART </h1>

        <img src={ralla}></img>
      </div>

      <p> Descripcion del producto. Este es un texto simulado</p>

      <div id="contenedorVermasCartRight">
        <div id="imgMayorPufiCartRight">
          <FontAwesomeIcon id="imgPufiRight" icon={faAngleRight} />
        </div>
        <div id="textoVermasPufiCartRight">
          <h4> VER MAS </h4>
        </div>
      </div>
    </div>
  );
};

export default PuficartRight;
