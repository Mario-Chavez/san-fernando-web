import React, { useEffect } from "react";
import { Col, Image, Row } from "react-bootstrap";
import phone from "../assets/phone.png";
const FacebookComponents = () => {
    useEffect(() => {
        // Carga el SDK de Facebook después de que se monte el componente
        window.fbAsyncInit = function () {
            window.FB.init({
                xfbml: true,
                version: "v15.0", // Reemplaza con la versión deseada
            });
        };

        // Carga el SDK de Facebook de forma asíncrona
        (function (d, s, id) {
            var js,
                fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        })(document, "script", "facebook-jssdk");
    }, []);

    return (
        <div className="container text-center my-5 ">
            <Row className="">
                <Col
                    sm={7}
                    className="d-flex  flex-column justify-content-center align-items-center"
                >
                    <div className="mb-5">
                        <h2 className="fs-1 fw-bolder text-success">
                            {" "}
                            Seguinos en Facebook{" "}
                        </h2>
                    </div>
                    <div className="fs-4">
                        Nuestra pasión por el fútbol va más allá de los 90 minutos en la
                        cancha ; es un vínculo que une corazones y emociones en cada
                        partido. Pero, ¿qué pasa cuando la emoción no se detiene después
                        del del partido? Ahí es donde entran en juego nuestras redes
                        sociales. Si aún no nos sigues en nuestras redes sociales, te
                        estás perdiendo la oportunidad de vivir la experiencia San
                        Fernando al máximo. A través de nuestras plataformas en línea, te
                        ofrecemos una ventana directa al corazón del club, donde las
                        emociones fluyen sin cesar. No te quedes fuera de la jugada. Únete
                        a nosotros en las redes sociales y prepárate para vivir el fútbol
                        como nunca antes.{" "}
                        <p className="fw-bolder text-success">¡Vamos Los Verdes!</p>
                    </div>
                </Col>

                <Col sm={5}>
                    <div className="position-relative overflow-hidden">
                        <div
                            className="fb-page "
                            data-href="https://www.facebook.com/CASFLEALES"
                            data-tabs="timeline"
                            data-width="350"
                            data-height="800"
                            data-small-header="false"
                            data-adapt-container-width="true"
                            data-hide-cover="false"
                            data-show-facepile="true"
                        >
                            <blockquote
                                cite="https://www.facebook.com/CASFLEALES"
                                className="fb-xfbml-parse-ignore"
                            >
                                <a href="https://www.facebook.com/CASFLEALES">verde</a>
                            </blockquote>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default FacebookComponents;
