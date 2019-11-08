import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ text, clickHandler }) => (
  <button
    className="button"
    type="button"
    onClick={() => {
      clickHandler();
    }}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
