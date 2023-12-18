import React from "react";
import Profile from "../../components/profile/profile";
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer";
import "./fotos.css"
function Fotos() {
    return (
        <>
            <Header />
            <div id="banner"></div>

            <div className="container-block">
                <div className="block">
                    <div className="pictures img1"></div>
                    <div className="pictures img2"></div>
                    <div className="pictures img3"></div>
                    <div className="pictures img4"></div>
                    <div className="pictures img5"></div>
                    <div className="pictures img6"></div>
                    <div className="pictures img7"></div>
                    <div className="pictures img8"></div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Fotos;