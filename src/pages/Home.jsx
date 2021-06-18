import React from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components';

function Home({ items }) {
  console.log(items);
  return (
    <div className="container">
      <div className="content__top">
        <Categories items={['Meat', 'Vegeterian', 'Grill', 'Hot', 'Closed']} />
        <SortPopup items={['popularity', 'cost', 'alphabeth']} />
      </div>
      <h2 className="content__title">All Pizzas</h2>
      <div className="content__items">
        {items.map((item) => (
          <PizzaBlock key={item.id} name={item.name} pic={item.imageUrl} />
        ))}
      </div>
    </div>
  );
}

export default Home;
