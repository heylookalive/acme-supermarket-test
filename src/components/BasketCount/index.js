import React from 'react';
import PropTypes from 'prop-types';
import './BasketCount.scss';

const BasketCount = ({ count }) => (
  <span className="basket-count">{count}</span>
);

BasketCount.propTypes = {
  count: PropTypes.number,
};

BasketCount.defaultProps = {
  count: 0
}

export default BasketCount;
