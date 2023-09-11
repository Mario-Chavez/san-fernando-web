import React from "react";
import letra from "../assets/letras-verde.png";
import bandera from "../assets/bandera-principal.png";

const SectionMedia = () => {
    return (
        <>
            <div className="w-100 object-fit-cover">
                <img src={bandera} alt="" />
                <div>
                    <img src={letra} alt="" />
                </div>
            </div>
        </>
    );
};

export default SectionMedia;
