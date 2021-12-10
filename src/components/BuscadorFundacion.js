import React from "react";
import "./BuscadorFundacion.css";
import { Tabs, Tab, Col, Row, Dropdown } from "react-bootstrap";

function BuscadorFundacion() {
  return (
    <div className="buscadorContainer">
      <h1 className="buscadorTitle">¿Ya sabes a qué fundación donar?</h1>
      <Tabs defaultActiveKey="si" id="si" className="mb-3" fill>
        <Tab eventKey="si" title="Si">
          <br></br>
          <form>
            <input
              type="text"
              className="searchBar"
              placeholder="🔍 Busca por nombre de fundación o campaña"
            ></input>
          </form>
        </Tab>
        <Tab eventKey="no" title="No">
          <Row>
            <Col>
              <h2 className="buscadorTitle">Tipo de Causa</h2>
              <Dropdown>
                <Dropdown.Toggle id="causaDropdown" className="botonBuscador">
                  Selecciona una causa
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item as="button">Ambientales</Dropdown.Item>
                  <Dropdown.Item as="button">Sociales</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col>
              <h2 className="buscadorTitle">Causas</h2>
              <Dropdown>
                <Dropdown.Toggle id="causasDropdown" className="botonBuscador">
                  Selecciona una o varias
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    <input type="checkbox" />
                    <label>Filtro de causa 1</label>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <input type="checkbox" />
                    <label>Filtro de causa 2</label>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <input type="checkbox" />
                    <label>Filtro de causa 3</label>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <input type="checkbox" />
                    <label>Filtro de causa 4</label>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <input type="checkbox" />
                    <label>Filtro de causa 5</label>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col>
              <h2 className="buscadorTitle">Población</h2>
              <Dropdown>
                <Dropdown.Toggle
                  id="poblacionDropdown"
                  className="botonBuscador"
                >
                  Selecciona
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    <input type="checkbox" />
                    <label>Filtro de causa 1</label>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <input type="checkbox" />
                    <label>Filtro de causa 2</label>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <input type="checkbox" />
                    <label>Filtro de causa 3</label>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <input type="checkbox" />
                    <label>Filtro de causa 4</label>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <input type="checkbox" />
                    <label>Filtro de causa 5</label>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <Row>
            <Col></Col>
            <Col>
              <br></br>
              <p className="buscadorTitle">Búsqueda avanzada</p>
            </Col>
            <Col>
              <br></br>
              <input type="checkbox" />
              <label>Certificado de donación</label>
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </div>
  );
}

export default BuscadorFundacion;
