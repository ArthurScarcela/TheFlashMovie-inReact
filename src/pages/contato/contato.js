import React from "react"; import Header from "../../components/header/header"
import Footer from "../../components/footer/footer";
import "./contato.css";
function Contato() {
    return (
        <>
            <Header />
            <div className="backlogo">
                <div className="contentbox">
                    <div className="form-block">

                        <label for="text" className="cabecalho">Digite seu nome</label>
                        <input type="text" name="Nome" id="Nome" placeholder="Nome completo..." />

                        <label for="text" className="cabecalho">Informe seu email</label>
                        <input type="email" name="email" id="email" placeholder="Insira o seu melhor email..." />
                        <label for="text" className="cabecalho">Conteudo da mensagem</label>
                        <textarea id="conteudo" name="conteudo" placeholder="Digite sua mensagem ..."></textarea>

                        <input type="file" id="file" />
                        <button type="button" id="botaoenviar">Enviar</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contato;