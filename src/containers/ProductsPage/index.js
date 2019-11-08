import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { productsLoad, basketAddItem } from '../../redux/actions';
import Product from '../../components/Product';

class ProductsPage extends Component {
  componentDidMount() {
    const { productsLoad } = this.props;
    productsLoad();
  }

  render() {
    const { products, basketAddItem } = this.props;

    return (<>
      <h2>What would you like?</h2>
      {products.loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="listing-horizontal">
          {products.products.map(product => (
            <li key={product.code}>
              <Product product={product} addToBasketHandler={basketAddItem} />
            </li>
          ))}
        </ul>
      )}
      {products.error && <p>{products.error.message}</p>}
    </>);
  }
};

ProductsPage.propTypes = {
  products: PropTypes.shape({
    products: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      })
    ).isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.shape({
      message: PropTypes.string,
    }),
  }).isRequired,
  productsLoad: PropTypes.func.isRequired,
  basketAddItem: PropTypes.func.isRequired
};

const mapState = state => ({
  products: state.products,
});

const mapDispatch = {
  productsLoad,
  basketAddItem
};

export default connect(
  mapState,
  mapDispatch
)(ProductsPage);
