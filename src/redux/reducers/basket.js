import { BASKET_ADD_ITEM, BASKET_REMOVE_ITEM, BASKET_EMPTY } from '../actions';

const initialState = {
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BASKET_ADD_ITEM:
      return {
        items: [...state.items, action.product],
      };
    case BASKET_REMOVE_ITEM:
      return {
        items: state.items.filter((product, i) =>
          i !== action.index ? product : null
        ),
      };
    case BASKET_EMPTY:
      return { ...initialState };
    default:
      return state;
  }
};

export default reducer;
