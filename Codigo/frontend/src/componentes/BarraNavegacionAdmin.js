import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap';

const Home = () => {
    return (
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Mi Aplicación</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#municipios">Municipios</Nav.Link>
              <Nav.Link href="#departamentos">Departamentos</Nav.Link>
              <Nav.Link href="#proyectos">Proyectos</Nav.Link>
            </Nav>
            <Button variant="outline-primary">Salir</Button>
          </Navbar.Collapse>
        </Navbar>
      );
}

export default Home