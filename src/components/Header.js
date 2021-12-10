import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./Header.css";

function Header() {
  return (
    <div>
      <Navbar className="header">
        <Navbar.Brand>
          <p className="title">Nibi</p>
        </Navbar.Brand>
        <div className="mitadNavbar">
          <Nav className="me-auto">
            <Nav.Link>Nibi Para:</Nav.Link>
            <Nav.Link href="#">Fundaciones</Nav.Link>
            <Nav.Link href="#">Empresas</Nav.Link>
            <Nav.Link href="#">Marcas Sostenibles</Nav.Link>
            <Nav.Link href="#">Personas</Nav.Link>
          </Nav>
          <form>
            <input
              type="text"
              className="searchBar"
              placeholder="🔍 Buscar más programas o culaquier producto de la tienda"
            ></input>
          </form>
          <Nav className="me-auto">
            <Nav.Link href="#">Donaciones</Nav.Link>
            <Nav.Link href="#">Voluntariados</Nav.Link>
            <Nav.Link href="#">Beneficios</Nav.Link>
            <Nav.Link href="#">Quiero ser parte</Nav.Link>
            <Nav.Link href="#">Sobre Nibi</Nav.Link>
          </Nav>
        </div>
        <div className="derechaNavbar">
          <Nav>
            <Nav.Link>Ingresa</Nav.Link>
            <Button className="botonRegistro">Regístrate</Button>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
}

export default Header;
