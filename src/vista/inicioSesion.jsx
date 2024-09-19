import React from "react";
import Footer from "../componentes/footer";
import Formulario from "../componentes/formulario";
import "../styles/InicioSesion.css"
import logo from "../img/logo.png";

function InicioSesion(params) {
    return (
        <div className="App">
            <div className="container">
                <div className="container-form">
                    <div class="left">
                        <div><img src={logo} alt="logo" className="img-logo" /></div>
                        <br />
                        <div>
                            <h1 className="text-common text1">   Inicia Sesión</h1>
                            <p className="text-common text2">Utiliza tu cuenta de Google</p>
                        </div>
                    </div>
                    <div class="right">
                        <Formulario />
                    </div>
                </div>
                <div className="container-footer">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default InicioSesion; 