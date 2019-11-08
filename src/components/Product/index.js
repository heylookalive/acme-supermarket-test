import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import Button from '../Button';

const Product = ({ product, addToBasketHandler }) => (
  <>
    <h3>{product.name}</h3>
    <p>
      <NumberFormat
        value={product.price}
        prefix="&pound;"
        displayType="text"
        decimalScale={2}
        fixedDecimalScale
      />
    </p>
    <Button
      text="Add to basket"
      clickHandler={() => addToBasketHandler(product)}
    />
  </>
);

Product.propTypes = {
  product: PropTypes.shape({
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  addToBasketHandler: PropTypes.func.isRequired,
};

export default Product;
