import React from "react";

export const Reserva = () =>{
    return(
        <div>
            <link href='https://unpkg.com/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'></link> {/*icos reservas*/}
            <footer id="footer">
                <div class="contenedor footer-content">
                        <div class="contact-us">
                            <h2 class="brand">Paintball Medellín</h2>
                            <p>Te regalamos una Experiencia de desafios y adrenalina.</p>
                        </div>
                        <div class="social-media">
                            <a href="https://www.facebook.com/paintballmedellin1/" class="social-media-icon">
                                <i class='bx bxl-facebook'></i>
                            </a>
                            <a href="https://twitter.com/Paintballmed1" class="social-media-icon">
                                <i class='bx bxl-twitter' ></i>
                            </a>
                            <a href="https://www.instagram.com/paintball_medellin/" class="social-media-icon">
                                <i class='bx bxl-instagram' ></i>
                            </a>
                            <a href="https://api.whatsapp.com/send/?phone=573005361126&text&type=phone_number&app_absent=0" class="social-media-icon">
                                <i class='bx bxl-whatsapp'></i>
                            </a>
                        </div>
                </div>
                <div class="line"></div>
            </footer>
        </div>
    )
}

export default Reserva;