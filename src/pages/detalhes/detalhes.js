import React, { useEffect } from "react";
import { useParams } from "react-router-dom";


function Detalhes(){

    const params = useParams()
    console.log(params.id)

    useEffect(() => {
        
    }, [])

    return  (
        <div>
            <h1>Detalhes</h1>
        </div>
    )
}

export default Detalhes;