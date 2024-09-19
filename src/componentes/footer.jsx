import React from "react";
import "../styles/footer.css"

function Footer(params) {
    return (
        <footer class="footer">
            <button class="boton-footer">Español (España)</button>
            <div>
                <button class="boton-footer">Ayuda</button>
                <button class="boton-footer">Privacidad</button>
                <button class="boton-footer">Términos</button>
            </div>
        </footer>
    )
}

export default Footer; 