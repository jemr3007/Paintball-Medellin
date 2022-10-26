import React from "react";
import '../App.css';

export const Galeria = () =>{
    return(
        <div>
            <section class="gallery" id="galeria">
                <div class="contenedor">
                    <h2 class="subtitulo">Galeria</h2>
                    <div class="contenedor-galeria">
                        <img src="img/1.webp" class="img-galeria" alt="Hola" />
                        <img src="img/2.jpeg" class="img-galeria" alt="" />
                        <img src="img/3.jpg" class="img-galeria" alt="" />
                        <img src="img/9.webp" class="img-galeria" alt="" />
                        <img src="img/8.webp" class="img-galeria" alt="" />
                        <img src="img/5.webp" class="img-galeria" alt="" />
                    </div>
                </div>
            </section>
            <div class="imagen-light">
                <img src="img/close.svg" alt="" class="close" />
                <img src="" alt="" class="agregar-imagen" />
            </div>
        </div>
    )
}
export default Galeria;