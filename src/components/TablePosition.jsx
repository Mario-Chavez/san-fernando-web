import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import logo from "../assets/escudo-svg.png";
import zonaA from "../assets/table/zona-A.png";
import zonab from "../assets/table/zona-b.png";

const TablePosition = () => {
    return (
        <div className=" container ">
            <Container className=" text-bg-dark">
                <Row className=" ">
                    <Col>
                        <Image variant="top" src={zonaA} className="w-100" />
                    </Col>
                    <Col>
                        <Image variant="top" src={zonab} className="w-100" />
                    </Col>
                    <Col>
                        <Image variant="top" src={logo} style={{ width: "5rem" }} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TablePosition;
