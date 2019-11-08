import React from 'react';
import PropTypes from 'prop-types';
import { getBasketItemDiscounts } from './helpers';
import LineItem from '../LineItem';
import Button from '../Button';

const Basket = ({basket, pricingRules, basketRemoveItem, basketEmpty}) => {
  // First figure out the subtotal, before discounts.
  const basketSubtotal = basket.items.reduce(
    (acc, product) => acc + product.price,
    0
  );

  // Iterate through each price rule and see which apply, return an object of discounts.
  const discountDetails = getBasketItemDiscounts(basket.items, pricingRules);

  const basketTotal = basketSubtotal - discountDetails.totalDiscount;

  return (<>
  {basket.items.length > 0 ? (
    <>
      <ul className="listing">
        {basket.items.map((product, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <LineItem key={`${product.code}-${index}`} label={product.name} value={product.price}>
            <Button
              text="Remove from basket"
              clickHandler={() => basketRemoveItem(index)}
            />
          </LineItem>
        ))}
        <LineItem key="subtotal" label="Subtotal" value={basketSubtotal} />
        {discountDetails.lineItems.map(lineItem => (
          <LineItem
            key={lineItem.id}
            label={lineItem.name}
            extraText={`applied to ${lineItem.productName}`}
            value={lineItem.discount}
            valueIsNegative
          />
        ))}
        <LineItem
          key="total"
          label="Total"
          value={basketTotal}
        />
      </ul>
      <p className="centre">
        Made a huge mistake?
        <br />
        <Button text="Empty the basket" clickHandler={basketEmpty} />
      </p>
    </>
  ) : (
    <p className="centre">
      You&apos;ve not added anything to your basket yet!
    </p>
  )}
  </>);
};

Basket.propTypes = {
  basket: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
  pricingRules: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      appliesTo: PropTypes.string.isRequired,
    })
  ),
  basketRemoveItem: PropTypes.func.isRequired,
  basketEmpty: PropTypes.func.isRequired
};

Basket.defaultProps = { pricingRules: [] };

export default Basket;
