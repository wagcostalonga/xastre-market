import React from 'react';
import { ListGroup } from 'react-bootstrap';

function ListProducts({ listProducts, loading }) {
  return (
    <>
      <h3>Produtos cadastrados</h3>
      {!loading && (
        <ListGroup>
          {listProducts.map((product) => (
            <ListGroup.Item key={product.name}>
              <strong>Nome:</strong> {product.name}
              <br />
              <strong>Localização:</strong> {product.hall}
              {product.shelf}
              {product.side}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </>
  );
}

export default ListProducts;
