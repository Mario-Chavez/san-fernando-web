import React from "react";
import { Carousel, Container, Image } from "react-bootstrap";
import imgSlider1 from "../assets/img-slider1.png";
import imgSlider2 from "../assets/img-slider2.png";
import imgSlider3 from "../assets/img-slider3.png";
import SectionMedia from "./SectionMedia";
import AboutMe from "./AboutMe";
import TablePosition from "./tablePosition";
import FacebookComponents from "./FacebookComponents";
import NextMach from "./NextMach";
import Camisetas from "./camisetas";

const Home = () => {
    return (
        <div className="">
            <SectionMedia />
            <TablePosition />
            <NextMach />
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
            <FacebookComponents />
            {/* <AboutMe /> */}
            <Camisetas />
        </div>
    );
};

export default Home;
