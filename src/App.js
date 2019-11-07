import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

const ProductsPage = () => <div>products</div>;
const BasketPage = () => <div>Basket</div>;

function App() {
  return (
    <Router>
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/basket">Basket</Link>
            </li>
          </ul>
        </nav>
      </>
      <Route path="/" component={ProductsPage} exact />
      <Route path="/basket" component={BasketPage} />
    </Router>
  );
}

export default App;
