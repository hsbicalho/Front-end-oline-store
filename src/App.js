import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Search from './pages/Search';
import Carrinho from './pages/Carrinho';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route
          exact
          path="/"
          render={ (props) => (
            <Search
              { ...props }
            />
          ) }
        />
        <Route
          exact
          path="/carrinho"
          render={ (props) => <Carrinho { ...props } /> }
        />
        <Route
          exact
          path="/product-details/:id"
          render={ (props) => <ProductDetails { ...props } /> }
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
