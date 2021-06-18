import React, { useState, useEffect } from 'react';
import { Route } from 'react-router';

import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((resp) => resp.json())
      .then((json) => setPizzas(json.pizzas));
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
