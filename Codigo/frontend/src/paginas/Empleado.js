import React from "react";
import NavBar from "../componentes/NavBar";
import EnDesarrollo from "../componentes/EnDesarrollo";

const Empleado = () => {
    const rol = "Empleado"
    return(
        <React.Fragment>
            <NavBar/>
            <EnDesarrollo rol={rol}/>
        </React.Fragment>
    )
}

export default Empleado