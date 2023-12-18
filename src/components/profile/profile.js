import React, { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import './profile.css'

function Profile(){

    const {login}  = useContext(UserContext);

    return(
        <div>
            {login ?  
            <div>
                <ul className="dadosList">Logado:
                    <li className="dadosUsuario"><p className="dados">Nome:</p> <p>Arthur Alves da Silva Scarcela</p></li>
                    <li className="dadosUsuario"><p className="dados">Idade:</p> <p>22anos</p></li>
                    <li className="dadosUsuario"><p className="dados">Sexo:</p> <p> Maculino</p></li>
                    <li className="dadosUsuario"><p className="dados">Email:</p>    <p> scarcelarthur@gmail.com</p></li>
                </ul>
            </div> : 'Deslogado: Faça o seu login para ter acesso as informações'}
        </div>
    )
}

export default Profile;