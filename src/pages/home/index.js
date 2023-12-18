import React from "react";
import Header  from "../../components/header/header";
import './styles.css';
import Trailer from "../../assets/The Flash _ Trailer Oficial Dublado.mp4"
import Cards from "../../components/cards/cards";
import Footer from "../../components/footer/footer";

function Home(){


    return(
        <>
            <Header />
            <div id="banner" ></div>

            <div id="trailer-container">
                <div className="content">
                    <video controls className="trailer">
                        <source src={Trailer} />
                        Seu navegador não possui suporte para videos
                    </video>
                
                <div id="sinopse">
                    <p className="description">
                    A trama de THE FLASH vai mostrar Barry Allen/Flash (Miller) viajando no 
                    tempo para impedir o assassinato de sua mãe. Porém, quando ele retorna ao
                     presente, sua mãe ainda está viva…. mas o mundo é um pesadelo. A Liga da 
                     Justiça nunca existiu e Barry precisa fazer de tudo para corrigir todos 
                     os seus defeitos.
                    </p>
                    <button className="button">Comprar ingresso</button>
                </div>
                </div>
            </div>

            <Cards />
            <Footer />
        </>
    )
}

export default Home;