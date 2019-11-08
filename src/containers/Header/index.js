import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import BasketCount from '../../components/BasketCount';
import './Header.scss';

const Header = ({ basketCount }) => {
  return (
    <>
      <h1>The ACME Store!</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active" exact>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/basket" activeClassName="active">
              Basket
            </NavLink>{' '}
            <BasketCount count={basketCount} />
          </li>
        </ul>
      </nav>
    </>
  );
};

Header.propTypes = {
  basketCount: PropTypes.number.isRequired,
};

const mapState = state => ({
  basketCount: state.basket.items.length,
});

export default connect(mapState)(Header);
