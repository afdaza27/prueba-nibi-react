import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import "./Voluntariado.css";

function Voluntariado({ voluntariado }) {
  const {
    id,
    nombre,
    titulo,
    descripcion,
    fecha,
    mes,
    sesiones,
    categoria,
    inscritos,
    diasRestantes,
    imagen,
  } = voluntariado;

  return (
    <Col xs={4} className="cardContainer">
      <Card>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Subtitle>{titulo}</Card.Subtitle>
          <Card.Text>{descripcion}</Card.Text>
          <Card.Text>Ver detalles{">"}</Card.Text>
          <Row className="textoCentrado">
            <Col>
              <p>Fecha</p>
              <p>{fecha}</p>
              <p>{mes}</p>
            </Col>
            <Col>
              <p>Sesiones</p>
              <p>{sesiones}</p>
            </Col>
            <Col>
              <p>Categoría</p>
              <p>{categoria}</p>
            </Col>
          </Row>
          <Card.Text>{inscritos} personas inscritas</Card.Text>
          <Card.Text>Quedan {diasRestantes} días para participar</Card.Text>
          <Button className="botonVoluntario">Ser voluntario</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Voluntariado;
