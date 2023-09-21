import React from "react";
import { Container, Image } from "react-bootstrap";
import sanFernando from "../assets/sanFer-escudo.png";
import avellaneda from "../assets/equipos/eudoro-avellaneda.png";

const NextMach = () => {
    return (
        <div className=" container my-3 " id="nextMatch">
            <Container className=" text-bg-dark container-nextMatch">
                <div className="text-center">
                    <h2 className="my-5">Proximo partido</h2>
                </div>
                <div className="my-3 pb-5  ">
                    <div className="d-flex  justify-content-center my-3">
                        <div className="text-center mt-2 ">
                            <Image src={sanFernando} style={{ width: "7rem" }} />
                            <p>San fernando</p>
                        </div>
                        <div className="fs-1 fw-bolder mx-5">vs</div>
                        <div className="text-center">
                            <Image src={avellaneda} style={{ width: "6rem" }} />
                            <p>Eu. Avellaneda</p>
                        </div>
                    </div>
                    <div className="text-center ">
                        <div>Liga Tucumana - Ascenso LTF.</div>
                        <div>26 septiembre, 2023</div>
                        <div>16:00 pm</div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NextMach;
