import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { pricingRulesLoad, basketRemoveItem, basketEmpty } from '../../redux/actions';
import Basket from '../../components/Basket';

class BasketPage extends Component {
  componentDidMount() {
    const { pricingRulesLoad } = this.props;
    pricingRulesLoad();
  }

  render() {
    const { basket, pricingRules, basketRemoveItem, basketEmpty } = this.props;

    return (
      <>
        <h2>Your basket</h2>
        {pricingRules.loading ? <p>Loading...</p> : <Basket basket={basket} pricingRules={pricingRules.pricingRules} basketRemoveItem={basketRemoveItem} basketEmpty={basketEmpty} />}
      </>
    );
  }
};

BasketPage.propTypes = {
  basket: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
  pricingRules: PropTypes.shape({
    pricingRules: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        appliesTo: PropTypes.string.isRequired,
      })
    ),
    loading: PropTypes.bool.isRequired,
    error: PropTypes.shape({
      message: PropTypes.string,
    }),
  }).isRequired,
  pricingRulesLoad: PropTypes.func.isRequired,
  basketRemoveItem: PropTypes.func.isRequired,
  basketEmpty: PropTypes.func.isRequired,
};

const mapState = state => ({
  basket: state.basket,
  pricingRules: state.pricingRules,
});

const mapDispatch = {
  pricingRulesLoad,
  basketRemoveItem,
  basketEmpty,
};

export default connect(
  mapState,
  mapDispatch
)(BasketPage);
