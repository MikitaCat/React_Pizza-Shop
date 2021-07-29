import React from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components';
import { useSelector } from 'react-redux';

function Home() {
  const { items } = useSelector(({ pizzas }) => {
    return {
      items: pizzas.items,
    };
  });

  console.log(items);

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={['Meat', 'Vegeterian', 'Grill', 'Hot', 'Closed']} />
        <SortPopup
          items={[
            { name: 'popularity', type: 'popular' },
            { name: 'cost', type: 'price' },
            { name: 'alphabeth', type: 'alphabeth' },
          ]}
        />
      </div>
      <h2 className="content__title">All Pizzas</h2>
      <div className="content__items">
        {items && items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

export default Home;
