import SectionMedia from "./SectionMedia.jsx";
import TablePosition from "./TablePosition.jsx";
import FacebookComponents from "./FacebookComponents.jsx";
import NextMach from "./NextMach.jsx";
import Camisetas from "./Camisetas.jsx";
import CarrouselComp from "./common/carrouselComp.jsx";

const Home = () => {
    return (
        <div className="">
            <SectionMedia />
            <h1 className="text-center fs-1 fw-bolder text-success my-5">
                Club Atlético San Fernando de Leales
            </h1>
            <TablePosition />
            <NextMach />
            <CarrouselComp />
            <FacebookComponents />
            <Camisetas />
        </div>
    );
};

export default Home;
