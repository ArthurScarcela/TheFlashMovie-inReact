import React from "react";
import Header from "../../components/header/header";
import UserLogo from "../../assets/icon.png";
import Footer from "../../components/footer/footer";
import "./comentarios.css"

function Comentarios(){

    return(
        <>
        <Header />
        <div className="backlogo">
            <div className="content-box">

                <div className="box">
                    <div className="user">
                        <img src={UserLogo} className="icon" alt="User" />
                        <h3>Antonio</h3>
                    </div>
                    <p> O filme tinha tudo para ser um sucesso, mas deixou muito a desejar no cgi</p>
                </div>

                <div className="box">
                    <div className="user">
                        <img src={UserLogo} className="icon" alt="User" />
                        <h3>João</h3>
                    </div>
                    <p> Apesar de alguns pontos negativos o filme e sua historia ficaram bons</p>
                </div>

                <div className="box">
                    <div className="user">
                        <img src={UserLogo} className="icon" alt="User" />
                        <h3>Sidney</h3>
                    </div>
                    <p> Gostei bastante do filme</p>
                </div>
                <div className="box">
                    <div className="user">
                        <img src={UserLogo} className="icon" alt="User" />
                        <h3>Rafael</h3>
                    </div>
                    <p> Muito bom</p>
                </div>
                <div className="box">
                    <div className="user">
                        <img src={UserLogo} className="icon" alt="User" />
                        <h3>Adriano</h3>
                    </div>
                    <p> Gostei dos personagens, o filme ficou razoável</p>
                </div>
            </div>
        </div>

        <Footer />
        </>
    )
}

export default Comentarios;