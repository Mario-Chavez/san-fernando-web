import React from "react";
import alAngulo from "../assets/sponsors/alAngulo.png";
import comuna from "../assets/sponsors/comuna-quilme-sueldo.png";
import legislador from "../assets/sponsors/legislador.png";
import { Col, Image, Row } from "react-bootstrap";
const Sponsor = () => {
    return (
        <div className="mt-5">
            <div className="container text-white my-5">
                <div className="text-center my-5">
                    <h2>Sponsors</h2>
                </div>
                <Row>
                    <Col
                        sm={6}
                        className="d-flex my-5 justify-content-center align-items-center"
                    >
                        <Image src={alAngulo} style={{ width: "13rem" }} />
                    </Col>
                    <Col
                        sm={6}
                        className="d-flex my-5 justify-content-center align-items-center"
                    >
                        <Image src={comuna} style={{ width: "13rem" }} />
                    </Col>
                    <Col
                        sm={12}
                        className="d-flex my-5 justify-content-center align-items-center"
                    >
                        <Image src={legislador} style={{ width: "18rem" }} />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Sponsor;
