import axios from "axios";
import React, { useState } from "react";
import "../estilos/Suscribete.scss";

const Suscribete = () => {
  const [correo, setCorre] = useState("");

  const enviarFormulario = (e) => {
    e.preventDefault();

    if (!correo.trim()) {
      alert("No es valido");
    } else {
      let data = new FormData(e.target);
      axios
        .post(
          "https://formspree.io/f/mbjwnkna",
          {
            email: correo,
          },
          {
            headers: { Accept: "application/json" },
          }
        )
        .then((response) => {
          console.log("response", response.data);
          if (response.data.ok) {
            alert("Valido");
          } else {
            alert("Invalido");
          }
        })
        .catch((error) => {
          alert("2 Invalido");
        });
    }
    setCorre("");
  };

  return (
    <div>
      <div id="textoSuscribete">
        NEWSLETTER
        <h1>SUSCRIBETE</h1>
        <p id="pTextoSuscribete"> y enterate de todas las novedades</p>
      </div>

      {/* onSubmit={enviarFormulario} */}
      {/* action="https://formspree.io/f/mbjwnkna"  method="POST" */}

      <form onSubmit={enviarFormulario}>
        <input
          id="input"
          type="text"
          placeholder="Ingresa tu email"
          name="email"
          onChange={(e) => setCorre(e.target.value)}
          value={correo}
        />

        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Suscribete;
