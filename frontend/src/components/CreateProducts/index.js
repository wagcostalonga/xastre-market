import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

function CreateProducts({ handleSubmit }) {
  return (
    <Form onSubmit={handleSubmit}>
      <h4>Produto</h4>
      <Form.Group>
        <Form.Label>Nome: </Form.Label>
        <Form.Control type="text" name="name" />
      </Form.Group>

      <h4>Localização</h4>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Corredor: </Form.Label>
            <Form.Control as="select" name="hall">
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Prateleira: </Form.Label>
            <Form.Control as="select" name="shelf">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Lado: </Form.Label>
            <Form.Control as="select" name="side">
              <option>D</option>
              <option>E</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      <Button type="submit">Cadastrar</Button>
    </Form>
  );
}

export default CreateProducts;
