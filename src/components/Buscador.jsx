import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

const Buscador = ({ handleChangeFiltro, search }) => {
  return (
    <>
      <Row>
        <h2>Héroes</h2>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={6} lg={6}>
          <Form.Control
            type="text"
            placeholder="Buscar héroe"
            onChange={handleChangeFiltro}
          />
        </Col>
        <Col xs={12} sm={6} md={6} lg={6}>
          <Button variant="dark" onClick={search}>
            Buscar
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Buscador;
