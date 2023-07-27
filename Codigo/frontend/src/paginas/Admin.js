import React from "react";
import NavBar from "../componentes/NavBar";
import EnDesarrollo from "../componentes/EnDesarrollo";

const Admin = () => {
    const rol = "Administrador"
    return(
        <React.Fragment>
            <NavBar/>
            <EnDesarrollo rol={rol}/>
        </React.Fragment>
    )
}

export default Admin