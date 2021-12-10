import React from "react";
import { Col, Row } from "react-bootstrap";
import Voluntariado from "./Voluntariado";
import "./Voluntariados.css";

function Voluntariados({ voluntariados }) {
  return (
    <Row className="voluntariadosContainer">
      {voluntariados.map((voluntariado) => (
        <Voluntariado key={voluntariado.id} voluntariado={voluntariado} />
      ))}
    </Row>
  );
}

export default Voluntariados;
