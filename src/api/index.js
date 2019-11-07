import products from './data/products.json';
import pricingRules from './data/pricingRules.json';

export const productsLoadFromAPI = () =>
  new Promise(resolve => {
    resolve(products);
  });

export const pricingRulesLoadFromAPI = () =>
  new Promise(resolve => {
    resolve(pricingRules);
  });
