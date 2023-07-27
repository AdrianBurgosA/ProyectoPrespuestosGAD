import React from 'react'
import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure';

const EnDesarrollo = (props) => {
    const {rol} = props
    return(
        <center>
            <br/><br/>
            <h1>{`Página de ${rol} en construcción.`}</h1><br/>
            <Figure>
            <Figure.Image
                width={500}
                height={500}
                alt="171x180"
                src="https://mielacr.com/Recurso%201.png"
            />
            </Figure>
        </center>
    )
}

export default EnDesarrollo