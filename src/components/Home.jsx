import React from "react";
import { Carousel, Container, Image } from "react-bootstrap";
import imgSlider1 from "../assets/img-slider1.png";
import imgSlider2 from "../assets/img-slider2.png";
import imgSlider3 from "../assets/img-slider3.png";
const Home = () => {
    return (
        <div className="">
            <Carousel>
                <Carousel.Item>
                    <Image src={imgSlider1} className="d-block mx-auto img-fluid" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={imgSlider2} className="d-block mx-auto img-fluid" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={imgSlider3} className="d-block mx-auto img-fluid" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;
