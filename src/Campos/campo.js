import React from "react";
import '../App.css';


export const Campos = () =>{
    return(
        <div>
            {/*menú de navegación*/}
            <header className="App-header" id="inicio">
                <img class="hamburguer" src="img/hamburguesa.svg" alt="" />
                <nav class="menu-navegacion">
                <a href="#inicio">Inicio</a>
                        <a href="#servicio">Campos</a>
                        <a href="#galeria">Portafolio</a>
                        <a href="#footer">Contacto</a>
                </nav>
                {/*------------------------------------------------------------------------------*/}
                {/*Información principal (head)*/}
                <div class="contenedor head">
                    <h1 class="titulo">Bienvenido a Club paintball medellín</h1>
                    <p class="copy">Somos la mejor opción para la práctica del paintball en la ciudad.</p>
                </div>
            </header>
            {/*------------------------------------------------------------------------------*/}
            <section class="services contenedor" id="servicio">
                {/*Información campo san Félix*/}
                <h2 class="subtitulo">Nuestros Campos</h2>
                <div class="contenedor-servicio">
                        <img src="img/San Felix.webp" alt="" />
                        <div class="checklist-servicio">
                            <div class="service">
                            <h3 class="n-service"><span class="number">1</span>Paintball San Félix</h3>
                            <p> Paintball San Félix está ubicado a las afueras de la ciudad y es perfecto para salir de la rutina.</p>
                            <p>🔻🔻</p>
                            <p>Precio: $30.000 por persona + 120 bolas y 1 hora de juego.</p>
                            </div>
                        </div>
                </div>
                {/*------------------------------------------------------------------------------*/}
                {/*Información campo el cielo*/}
                <h2 class="subtitulo"></h2>
                <div class="contenedor-servicio">
                        <img src="img/El cielo.webp" alt="" />
                        <div class="checklist-servicio">
                            <div class="service">
                                <h3 class="n-service"><span class="number">2</span>Paintball El Cielo</h3>
                                <p> Dentro de la ciudad ven y disfruta  con tus amigos de nuestro campo en El Mirador el Cielo, donde podrás practicar paintball o airsoft .</p>
                                <p>🔻🔻</p>
                                <p>Precio: $30.000 por persona + 120 bolas y 1 hora de juego.</p>
                            </div>
                        </div>
                </div>
            </section>
        </div>
    )
}
export default Campos;