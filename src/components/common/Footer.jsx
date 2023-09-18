import {
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineTwitter,
    AiOutlineYoutube,
} from "react-icons/ai";
import logo from "../../assets/escudo-svg.png";
// import footer from "../../assets/footer_sanFer.png";
import { Col, Image, Row } from "react-bootstrap";
const Footer = () => {
    return (
        <>
            <footer className="  fw-bold  mt-auto  text-bg-dark pb-5 " id="footer">
                <div className="container-footer">
                    <div className="  text-center py-5">
                        <h6 className="fw-bolder mb-2">SÍGUENOS :</h6>
                        <div className=" d-flex justify-content-center">
                            <div className="py-2">
                                <div>
                                    <a
                                        href="https://www.facebook.com/CASFLEALES?locale=es_LA"
                                        className=" text-reset text-green"
                                    >
                                        <AiOutlineFacebook size={50} className="me-3" />
                                    </a>
                                </div>
                            </div>
                            <div className="py-2">
                                <div>
                                    <AiOutlineInstagram size={50} className="mx-3" />
                                </div>
                            </div>
                            <div className="py-2">
                                {" "}
                                <div>
                                    <AiOutlineTwitter size={50} className="ms-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center  d-flex flex-column justify-content-center align-items-center">
                    <Image src={logo} style={{ width: "15rem", marginBottom: "2rem" }} />
                </div>
                <div className="container d-flex justify-content-center ">
                    <div className="row mb-4">
                        <div className="col-md-6 text-center text-md-start ">
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

                        <div className="col-md-6 text-center text-md-start">
                            <h3 className="text-decoration-none">CONTACTANOS</h3>
                            <p className="text-center text-md-start">
                                Suscríbete a nuestros boletines ahora y mantente al día
                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-center  d-flex flex-column justify-content-center align-items-center">
                    <span className="my-2">
                        {" "}
                        Club Atletico San Fernando &copy; 2023 todos los derechos
                        reservados
                    </span>
                    <span>
                        desarrollado por{" "}
                        <a
                            href="https://www.linkedin.com/in/mario-chavez-desarrollador-fullstack/"
                            target="_blank"
                            className="text-reset mt-4"
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
