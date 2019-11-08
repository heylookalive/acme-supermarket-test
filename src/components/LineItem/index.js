import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import './LineItem.scss';

const LineItem = ({ label, extraText, value, valueIsNegative, children }) => (
  <li className="line-item">
    <span className="line-item-label">{label}</span>
    {extraText && <span className="line-item-extra">{extraText}</span>}
    {children && <span className="line-item-children">{children}</span>}
    <NumberFormat
      value={value}
      prefix={valueIsNegative ? '-£' : '£'}
      displayType="text"
      decimalScale={2}
      fixedDecimalScale
      className="line-item-price"
    />
  </li>
);

LineItem.propTypes = {
  label: PropTypes.string.isRequired,
  extraText: PropTypes.string,
  value: PropTypes.number.isRequired,
  valueIsNegative: PropTypes.bool,
  children: PropTypes.node,
};

LineItem.defaultProps = { extraText: null, valueIsNegative: false, children: null };

export default LineItem;
