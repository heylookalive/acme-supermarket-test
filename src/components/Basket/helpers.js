export const basketToProductsAndQuantities = (items) => items.reduce((acc, product) => {
  if (typeof acc[product.code] === 'undefined') {
    acc[product.code] = {
      name: product.name,
      price: product.price,
      quantity: 1,
    };
  } else {
    acc[product.code].quantity += 1;
  }
  return acc;
}, {});

export const getBasketItemDiscounts = (basketItems, pricingRules) => {
  const lineItems = [];
  let totalDiscount = 0;
  // Create a simple array of which products we have and the quantity of each.
  const productsAndQuantities = basketToProductsAndQuantities(basketItems);

  pricingRules.forEach(rule => {
    if (productsAndQuantities[rule.appliesTo]) {
      const applicableProduct = productsAndQuantities[rule.appliesTo];
      // Buy one get one free will only apply when there's more than 1!
      if (rule.type === 'BOGOF' && applicableProduct.quantity > 1) {
        // Hurt my head more than it should, given a number, find the closest
        // even number rounding down to then discount.
        const closestEvenQuantity =
          2 * Math.floor(applicableProduct.quantity / 2);
        const lineItemDiscount =
          (closestEvenQuantity / 2) * applicableProduct.price;
        lineItems.push({
          id: rule.id,
          name: rule.name,
          productName: applicableProduct.name,
          discount: lineItemDiscount,
        });
        totalDiscount += lineItemDiscount;
      } else if (
        rule.type === 'PRICE_DISCOUNT' &&
        applicableProduct.quantity >= rule.minimumProducts
      ) {
        // Price discounts as I read the instructions will apply to all units
        // of that product, when a minimum number of that product are added
        // to the basket.
        const lineItemDiscount =
          (applicableProduct.price - rule.discountUnitTo) *
          applicableProduct.quantity;
        lineItems.push({
          id: rule.id,
          name: rule.name,
          productName: applicableProduct.name,
          discount: lineItemDiscount,
        });
        totalDiscount += lineItemDiscount;
      }
    }
  });
  return {
    lineItems,
    totalDiscount,
  };
};
