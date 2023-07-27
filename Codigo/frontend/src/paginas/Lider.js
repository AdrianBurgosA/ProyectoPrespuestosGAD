import React from "react";
import NavBar from "../componentes/NavBar";
import EnDesarrollo from "../componentes/EnDesarrollo";

const Lider = () => {
    const rol = "Líder"
    return(
        <React.Fragment>
            <NavBar/>
            <EnDesarrollo rol={rol}/>
        </React.Fragment>
    )
}

export default Lider