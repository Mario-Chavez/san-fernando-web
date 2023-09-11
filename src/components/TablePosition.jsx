import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import logo from "../assets/escudo-svg.png";
import zonaA from "../assets/table/zona-A.png";
import zonab from "../assets/table/zona-b.png";

const TablePosition = () => {
    return (
        <div className=" container my-5 ">
            <Container className=" text-bg-dark">
                <div className="text-center">
                    <Image src={logo} style={{ width: "10rem" }} />
                </div>
                <Row className="my-5 pb-5">
                    <Col sm={6}>
                        <p>Zona A</p>
                        <Image variant="top" src={zonaA} className="w-100" />
                    </Col>
                    <Col sm={6}>
                        <p>Zona B</p>
                        <Image variant="top" src={zonab} className="w-100" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TablePosition;
