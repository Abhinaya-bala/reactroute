import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Routes/Home';
import Cart from './Routes/Cart';
import Login from './Routes/Login';
import Order from './Routes/Order';
import Product from './Routes/Product';
import Navbar from './components/Navbar';

function App() {
  return (
    <div >
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/cart" render={() => <Cart />} />
        <Route path="/login" render={(props) => <Login {...props} />} />
        <Route path="/order" render={() => <Order />} />
        <Route path="/product/:id" render={(props) => <Product {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
