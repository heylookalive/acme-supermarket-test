import { productsLoadFromAPI, pricingRulesLoadFromAPI } from '../api';

export const BASKET_ADD_ITEM = 'BASKET_ADD_ITEM';
export const BASKET_REMOVE_ITEM = 'BASKET_REMOVE_ITEM';
export const BASKET_EMPTY = 'BASKET_EMPTY';

export const PRODUCTS_LOAD_BEGIN = 'PRODUCTS_LOAD_BEGIN';
export const PRODUCTS_LOAD_SUCCESS = 'PRODUCTS_LOAD_SUCCESS';
export const PRODUCTS_LOAD_ERROR = 'PRODUCTS_LOAD_ERROR';

export const PRICING_RULES_LOAD_BEGIN = 'PRICING_RULES_LOAD_BEGIN';
export const PRICING_RULES_LOAD_SUCCESS = 'PRICING_RULES_LOAD_SUCCESS';
export const PRICING_RULES_LOAD_ERROR = 'PRICING_RULES_LOAD_ERROR';

export const basketAddItem = product => ({
  type: BASKET_ADD_ITEM,
  product,
});

export const basketRemoveItem = index => ({
  type: BASKET_REMOVE_ITEM,
  index,
});

export const basketEmpty = () => ({
  type: BASKET_EMPTY,
});

export const productsLoad = () => dispatch => {
  dispatch({ type: PRODUCTS_LOAD_BEGIN });

  productsLoadFromAPI()
    .then(products => {
      dispatch({
        type: PRODUCTS_LOAD_SUCCESS,
        products,
      });
    })
    .catch(error => {
      dispatch({ type: PRODUCTS_LOAD_ERROR, error });
    });
};

export const pricingRulesLoad = () => dispatch => {
  dispatch({ type: PRICING_RULES_LOAD_BEGIN });

  pricingRulesLoadFromAPI()
    .then(pricingRules => {
      dispatch({
        type: PRICING_RULES_LOAD_SUCCESS,
        pricingRules,
      });
    })
    .catch(error => {
      dispatch({ type: PRICING_RULES_LOAD_ERROR, error });
    });
};
