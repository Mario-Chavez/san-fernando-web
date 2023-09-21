import SectionMedia from "./SectionMedia";
import TablePosition from "./TablePosition";
import FacebookComponents from "./FacebookComponents";
import NextMach from "./NextMach";
import Camisetas from "./camisetas";
import CarrouselComp from "./common/carrouselComp";

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
            {/* <AboutMe /> */}
            <Camisetas />
        </div>
    );
};

export default Home;
