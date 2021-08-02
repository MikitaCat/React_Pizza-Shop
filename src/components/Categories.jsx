import React from 'react';
import { memo } from 'react';

const Categories = memo(function Categories({ activeCategory, items, onClickItem }) {
  return (
    <div className="categories">
      <ul>
        <li className={activeCategory === null ? 'active' : ''} onClick={() => onClickItem(null)}>
          All
        </li>
        {items &&
          items.map((name, index) => (
            <li
              key={`${name}_${index}`}
              onClick={() => onClickItem(index)}
              className={activeCategory === index ? 'active' : ''}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
