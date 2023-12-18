import React from "react";
import './styles.css'


function Button({name, active, onClick}){
    return (
        <div className="containerButton">
        <button onClick={() => onClick(10)} className={active ? 'button' : 'disabledButton'}>{name}</button>
        <span>Seus dados estão a salvo conosco</span>
        </div>
    )
}

export default Button