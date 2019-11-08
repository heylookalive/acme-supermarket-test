import { basketToProductsAndQuantities, getBasketItemDiscounts } from './helpers';

describe('basketToProductsAndQuantities helper', () => {
  it('returns a correct array of products and quantities', () => {
    const basketItems = [{
      code: 'TST123',
      name: 'Test 123',
      price: 1
    },
    {
      code: 'TST123',
      name: 'Test 123',
      price: 1
    },
    {
      code: 'TST234',
      name: 'Test 234',
      price: 1
    }];

    expect(basketToProductsAndQuantities(basketItems)).toMatchSnapshot();
  });
});

describe('getBasketItemDiscounts helper', () => {
  // Was on the fence between importing the data from the file which is static
  // knowing it won't change in this exercise, but want it static and in the
  // test as static.
  const pricingRules = [
    {
      "id": "pr1",
      "name": "CEO Loves Fruit tea BOGOF",
      "type": "BOGOF",
      "appliesTo": "FR1"
    },
    {
      "id": "pr2",
      "name": "Strawberry bulk discount",
      "type": "PRICE_DISCOUNT",
      "appliesTo": "SR1",
      "minimumProducts": 3,
      "discountUnitTo": 4.5
    }
  ];
  const fruitTeaProduct = {
    code: "FR1",
    name: "Fruit tea",
    price: 3.11
  };
  const strawberryProduct =   {
    code: "SR1",
    name: "Strawberries",
    price: 5.00
  };
  const coffeeProduct = {
    code: "CF1",
    name: "Coffee",
    price: 11.23
  }

  it('returns the correct values given fruit tea bogof and basket with 2', () => {
    const discounts = getBasketItemDiscounts(Array(2).fill(fruitTeaProduct), pricingRules);
    expect(discounts.lineItems.length).toEqual(1);
    expect(discounts.totalDiscount).toEqual(3.11);
  });

  it('returns the correct values given fruit tea bogof and basket with 3', () => {
    const discounts = getBasketItemDiscounts(Array(3).fill(fruitTeaProduct), pricingRules);
    expect(discounts.lineItems.length).toEqual(1);
    expect(discounts.totalDiscount).toEqual(3.11);
  });

  it('returns the correct values given fruit tea bogof and basket with 6', () => {
    const discounts = getBasketItemDiscounts(Array(6).fill(fruitTeaProduct), pricingRules);
    expect(discounts.lineItems.length).toEqual(1);
    expect(discounts.totalDiscount).toEqual(9.33);
  });

  it('returns the correct values given 2x fruit tea, 1 coffee and 1 strawberry', () => {
    const discounts = getBasketItemDiscounts([fruitTeaProduct, strawberryProduct, fruitTeaProduct, coffeeProduct], pricingRules);
    expect(discounts.lineItems.length).toEqual(1);
    expect(discounts.totalDiscount).toEqual(3.11);
  });

  it('returns the correct values given 3x strawberry and 1 fruit tea', () => {
    const discounts = getBasketItemDiscounts([strawberryProduct, fruitTeaProduct, strawberryProduct, strawberryProduct], pricingRules);
    expect(discounts.lineItems.length).toEqual(1);
    expect(discounts.totalDiscount).toEqual(1.50);
  });

  it('returns the correct values given 3x strawberry and 4x fruit tea', () => {
    const discounts = getBasketItemDiscounts([strawberryProduct, fruitTeaProduct, strawberryProduct, strawberryProduct, fruitTeaProduct, fruitTeaProduct, fruitTeaProduct], pricingRules);
    expect(discounts.lineItems.length).toEqual(2);
    expect(discounts.totalDiscount).toEqual(7.72);
  });
});
