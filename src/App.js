import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Routes/Home';
import Cart from './Routes/Cart';
import Login from './Routes/Login';
import Order from './Routes/Order';
import Product from './Routes/Product';

function App() {
  return (
    <div >
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/cart" render={() => <Cart />} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/order" render={() => <Order />} />
        <Route path="/product" render={() => <Product />} />
      </Switch>
    </div>
  );
}

export default App;
