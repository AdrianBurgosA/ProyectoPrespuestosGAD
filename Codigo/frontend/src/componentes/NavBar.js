import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="primary" expand="lg">
      <Navbar.Brand href="#home">GAD</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div style={{ display: "flex", width: "100%" }}>
          <div style={{ flex: "0 0 60%" }}>
            <Nav className="mr-auto">
              <Nav.Link href="#municipios">Municipios</Nav.Link>
              <Nav.Link href="#departamentos">Departamentos</Nav.Link>
              <Nav.Link href="#proyectos">Proyectos</Nav.Link>
            </Nav>
          </div>
          <div
            style={{
              flex: "0 0 40%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button variant="warning">Salir</Button>
          </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
