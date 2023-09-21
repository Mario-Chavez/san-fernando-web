import React from "react";
import { Carousel, Image } from "react-bootstrap";
import imgSlider1 from "../../assets/img-slider1.png";
import imgSlider2 from "../../assets/img-slider2.png";
import imgSlider3 from "../../assets/img-slider3.png";
const CarrouselComp = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <Image src={imgSlider1} className="d-block mx-auto img-fluid" />
                    <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={imgSlider2} className="d-block mx-auto img-fluid" />
                    <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={imgSlider3} className="d-block mx-auto img-fluid" />
                    <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarrouselComp;
