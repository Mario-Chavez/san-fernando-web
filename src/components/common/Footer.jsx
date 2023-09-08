import { useState } from "react";

import logo from "../../assets/escudo-svg.png";
import { Image } from "react-bootstrap";
const Footer = () => {
    return (
        <>
            <footer className="  fw-bold  mt-auto  text-bg-dark py-5 " id="footer">
                <div className="text-center  d-flex flex-column justify-content-center align-items-center">
                    <Image src={logo} style={{ width: "20rem", marginBottom: "2rem" }} />
                </div>
                <div className="container d-flex justify-content-center ">
                    <div className="row">
                        <div className="col-md-4 text-center text-md-start ">
                            <h3>INFORMACIÓN</h3>
                            <ul className="list-unstyled">
                                <li className="py-2">
                                    <div className="text-decoration-none">
                                        Acerca de nosotros
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="text-decoration-none">
                                        Información sobre la liga
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="text-decoration-none">
                                        Políticas de privacidad
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="text-decoration-none">
                                        Términos y condiciones
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 text-center text-md-start">
                            <h3>REDES SOCIALES</h3>
                            <ul className="list-unstyled">
                                <li className="py-2">
                                    <div className="text-decoration-none">Facebook</div>
                                </li>
                                <li className="py-2">
                                    <div className="text-decoration-none">Instagram</div>
                                </li>
                                <li className="py-2">
                                    <div className="text-decoration-none">Twiter</div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 text-center text-md-start">
                            <h3 className="text-decoration-none">CONTACTANOS</h3>
                            <p className="text-center text-md-start">
                                Suscríbete a nuestros boletines ahora y mantente al día
                                con ofertas exclusivas.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-center  d-flex flex-column justify-content-center align-items-center">
                    <span>
                        &copy; 2023 todos los derechos desarrollo reservados a{" "}
                        <a
                            href="https://www.linkedin.com/in/mario-chavez-desarrollador-fullstack/"
                            target="_blank"
                        >
                            Dev
                        </a>{" "}
                    </span>{" "}
                </div>
            </footer>
        </>
    );
};

export default Footer;
