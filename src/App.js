import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './containers/Header';
import ProductsPage from './containers/ProductsPage';
import BasketPage from './containers/BasketPage';
import './App.scss';

function App() {
  return (
    <div className="acme-basket">
      <Router>
        <Header />
        <Route path="/" component={ProductsPage} exact />
        <Route path="/basket" component={BasketPage} />
      </Router>
    </div>
  );
}

export default App;
