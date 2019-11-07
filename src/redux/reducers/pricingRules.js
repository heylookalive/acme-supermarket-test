import {
  PRICING_RULES_LOAD_BEGIN,
  PRICING_RULES_LOAD_SUCCESS,
  PRICING_RULES_LOAD_ERROR,
} from '../actions';

const initialState = {
  pricingRules: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PRICING_RULES_LOAD_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case PRICING_RULES_LOAD_SUCCESS:
      return {
        ...state,
        pricingRules: action.pricingRules,
        loading: false,
      };
    case PRICING_RULES_LOAD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
