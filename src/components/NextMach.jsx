import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import sanFernando from "../assets/sanFer-escudo.png";
import allBoys from "../assets/all-boys.png";

const NextMach = () => {
    return (
        <div className=" container my-3 ">
            <Container className=" text-bg-dark card-style-shadow">
                <div className="text-center">
                    <h2 className="my-5">Proximo partido</h2>
                </div>
                <div className="my-3 pb-5  ">
                    <div className="d-flex  justify-content-center my-2">
                        <div className="text-center mt-3">
                            <Image src={sanFernando} style={{ width: "6rem" }} />
                            <p>San fernando</p>
                        </div>
                        <div className="fs-1 fw-bolder mx-5">vs</div>
                        <div className="text-center">
                            <Image src={allBoys} style={{ width: "6rem" }} />
                            <p>All Boys</p>
                        </div>
                    </div>
                    <div className="text-center ">
                        <div>Liga Tucumana - Ascenso LTF.</div>
                        <div>17 septiembre, 2023</div>
                        <div>17:30 pm</div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NextMach;
