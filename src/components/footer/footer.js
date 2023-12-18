import React from "react";
import './footer.css'
import Logo from "../../assets/Logo-The-Flash-PNG.png"
import { Link } from "react-router-dom";


function Footer() {

    return (
        <>
            <footer>
                <nav className="footer-navigation">
                    <ul className="footer-list">
                        <Link style={{ textDecoration: 'none' }} to='/'>
                            <li className="emuso">Home</li>
                        </Link>

                        <Link style={{ textDecoration: 'none' }} to='/contato'>
                            <li>Contato</li>
                        </Link>

                        
                        <Link style={{ textDecoration: 'none' }} to='/fotos'>
                            <li>Fotos</li>
                        </Link>

                        <Link style={{ textDecoration: 'none' }} to='/comentarios'>
                            <li>Comentários</li>
                        </Link>

                    </ul>
                </nav>
                <img src={Logo} style={{ objectFit: 'contain' }} id="logo" />
                <span>Todos os direitos reservados©</span>
                <span>Desenvolvido por: Arthur Scarcela</span>

            </footer>
        </>
    )
}

export default Footer;