import React from "react";
import alAngulo from "../assets/sponsors/alAngulo1.png";
import comuna from "../assets/sponsors/comuna-quilme-sueldo1.png";
import legislador from "../assets/sponsors/legislador.png";
import { Col, Image, Row } from "react-bootstrap";
const Sponsor = () => {
    return (
        <div className="mt-5">
            <div className="container text-white my-5">
                <div className="text-center my-5">
                    <h2>Agradecemos el apoyo de nuestros Sponsors</h2>
                </div>
                <Row>
                    <Col
                        sm={6}
                        className="d-flex my-5 justify-content-center align-items-center"
                    >
                        <a href="https://www.instagram.com/alangulo.tuc/">
                            <Image src={alAngulo} style={{ width: "13rem" }} />
                        </a>
                    </Col>
                    <Col
                        sm={6}
                        className="d-flex my-5 justify-content-center align-items-center"
                    >
                        <a href="https://www.facebook.com/comquilmesylossueldos?locale=es_LA">
                            <Image src={comuna} style={{ width: "13rem" }} />
                        </a>
                    </Col>
                    <Col
                        sm={12}
                        className="d-flex my-5 justify-content-center align-items-center"
                    >
                        <a href=" https://www.facebook.com/profile.php?id=100083934709195&locale=es_LA">
                            <Image src={legislador} style={{ width: "18rem" }} />
                        </a>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Sponsor;
