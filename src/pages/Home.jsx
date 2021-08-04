import React, { useCallback, useEffect } from 'react';
import { Categories, SortPopup, PizzaBlock, LoadingBlock } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filterAction';
import { fetchPizzas } from '../redux/actions/pizzasAction';
import { addPizzaToCart } from '../redux/actions/cartAction';

const categoryNames = ['Meat', 'Vegeterian', 'Grill', 'Hot', 'Closed'];
const sortItems = [
  { name: 'popularity', type: 'rating', order: 'desc' },
  { name: 'cost', type: 'price', order: 'desc' },
  { name: 'alphabeth', type: 'name', order: 'asc' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [dispatch, category, sortBy]);

  const onSelectCategory = useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    [dispatch],
  );

  const onSelectSortType = useCallback(
    (type) => {
      dispatch(setSortBy(type));
    },
    [dispatch],
  );

  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickItem={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          activeSortType={sortBy.type}
          items={sortItems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">All Pizzas</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <PizzaBlock onAddPizza={handleAddPizzaToCart} key={obj.id} {...obj} />
            ))
          : Array(10)
              .fill(10)
              .map((_, index) => <LoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
