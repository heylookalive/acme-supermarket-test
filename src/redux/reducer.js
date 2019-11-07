import { combineReducers } from 'redux';
import products from './reducers/products';
import pricingRules from './reducers/pricingRules';
import basket from './reducers/basket';

export default combineReducers({
  products,
  pricingRules,
  basket,
});
