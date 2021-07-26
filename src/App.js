import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router';

import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setPizzas(data.pizzas);
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" exact>
          <Home items={pizzas} />
        </Route>

        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
