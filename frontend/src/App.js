import React, { useState, useEffect, useCallback } from 'react';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';

import api from './services/api';

import CreateProducts from './components/CreateProducts';
import ListProducts from './components/ListProducts';

function App() {
  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function products() {
      api.get('/').then((res) => {
        setListProducts(res.data);
      });
      setLoading(false);
    }

    products();
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      await api
        .post('/', {
          name: e.target.name.value,
          hall: e.target.hall.value,
          shelf: e.target.shelf.value,
          side: e.target.side.value,
        })
        .then((res) => {
          const newProduct = res.data;
          setListProducts([...listProducts, newProduct]);
        });
    },
    [listProducts]
  );

  return (
    <Container className="my-5" width="100%">
      <Jumbotron>
        <Row>
          <Col md={8} className="mx-auto">
            <h1 className="mb-5 text-center">Xastre Market</h1>
          </Col>
        </Row>
        <Row>
          <Col md={8} className="mx-auto">
            <CreateProducts handleSubmit={handleSubmit} />
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={8} className="mx-auto">
            <ListProducts listProducts={listProducts} loading={loading} />
          </Col>
        </Row>
      </Jumbotron>
    </Container>
  );
}

export default App;
