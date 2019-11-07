import {
  PRODUCTS_LOAD_BEGIN,
  PRODUCTS_LOAD_SUCCESS,
  PRODUCTS_LOAD_ERROR,
} from '../actions';

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_LOAD_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case PRODUCTS_LOAD_SUCCESS:
      return {
        ...state,
        products: action.products,
        loading: false,
      };
    case PRODUCTS_LOAD_ERROR:
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
