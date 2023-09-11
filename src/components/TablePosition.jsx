import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import logo from "../assets/escudo-svg.png";

const TablePosition = () => {
    return (
        <div className=" container ">
            <Container className=" text-bg-dark">
                <Row>
                    <Col>
                        <Image variant="top" src={logo} style={{ width: "5rem" }} />
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
};

export default TablePosition;
