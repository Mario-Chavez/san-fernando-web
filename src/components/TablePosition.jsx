import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import logo from "../assets/escudo-original.png";
import zonaA from "../assets/table/zona-A.png";
import zonab from "../assets/table/zona-B.png";

const TablePosition = () => {
    return (
        <div className=" container my-5 ">
            <Container className=" text-bg-dark">
                <div className="text-center">
                    <Image src={logo} style={{ width: "6rem" }} className="" />
                    <h2 className="mt-2">Tabla de posiciones</h2>
                    <p>
                        Clasifican a la siguiente instancia, los 5 primeros de cada zona.
                    </p>
                </div>
                <Row className="my-3 pb-5">
                    <Col sm={6} className="my-3">
                        <p>Zona A</p>
                        <Image variant="top" src={zonaA} className="w-100" />
                    </Col>
                    <Col sm={6} className="my-3">
                        <p>Zona B</p>
                        <Image variant="top" src={zonab} className="w-100" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TablePosition;
