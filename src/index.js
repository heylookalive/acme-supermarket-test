import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './redux/reducer';
import { productsLoad, pricingRulesLoad } from './redux/actions';
import App from './App';
import * as serviceWorker from './serviceWorker';

// This is basically just our redux setup, the real stuff happens in <App/>.

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(reducer, enhancer);

// For now load products.
store.dispatch(productsLoad());
store.dispatch(pricingRulesLoad());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
