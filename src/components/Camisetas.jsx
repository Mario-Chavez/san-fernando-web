import React from "react";
import camiseta1 from "../assets/camisetas/camiseta1.png";
import camiseta2 from "../assets/camisetas/camiseta2.png";
import camiseta3 from "../assets/camisetas/camiseta3.png";
import { Col, Image, Row } from "react-bootstrap";

const Camisetas = () => {
    return (
        <div className="container-camisetas">
            <div className="container ">
                <Row>
                    <h3>Nuestras camisetas</h3>
                </Row>
                <Row className="d-flex ">
                    <Col className="d-flex justify-content-center align-items-center">
                        <Image src={camiseta1} style={{ width: "5rem" }} />
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center">
                        <Image src={camiseta2} style={{ width: "5rem" }} />
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center">
                        <Image src={camiseta3} style={{ width: "5rem" }} />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Camisetas;
