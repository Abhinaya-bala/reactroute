import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div >
      <Route exact path="/" render={() => <Home />} />
      <Route path="/cart" render={() => <Cart />} />
      <Route path="/login" render={() => <Login />} />
      <Route path="/order" render={() => <Order />} />
      <Route path="/product" render={() => <Product />} />
    </div>
  );
}

export default App;
