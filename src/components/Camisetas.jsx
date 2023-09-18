import React from "react";
import camiseta1 from "../assets/camisetas/camiseta1.png";
import camiseta2 from "../assets/camisetas/camiseta2.png";
import camiseta3 from "../assets/camisetas/camiseta3.png";
import { Carousel, Col, Image, Row } from "react-bootstrap";
import Sponsor from "./Sponsor";

const Camisetas = () => {
    return (
        <div className="container-camisetas py-5">
            <div className="container text-white">
                <Row>
                    <div className="text-center my-2">
                        <h1>Nuestra Tienda</h1>
                        <p>Temporada 2023</p>
                    </div>
                </Row>
                <Row className="d-flex my-5">
                    <Carousel className="py-5 pb-5">
                        <Carousel.Item>
                            <Image
                                src={camiseta1}
                                className="d-block mx-auto img-fluid"
                                style={{ width: "18rem" }}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                src={camiseta2}
                                className="d-block mx-auto img-fluid"
                                style={{ width: "22rem" }}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                src={camiseta3}
                                className="d-block mx-auto img-fluid"
                                style={{ width: "19rem" }}
                            />
                        </Carousel.Item>
                    </Carousel>
                </Row>
                <Sponsor />
            </div>
        </div>
    );
};

export default Camisetas;
