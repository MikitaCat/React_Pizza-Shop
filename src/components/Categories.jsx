import React from 'react';
import { useState } from 'react';

function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
    onClickItem();
  };

  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => setActiveItem(null)}>
          All
        </li>
        {items &&
          items.map((name, index) => (
            <li
              key={`${name}_${index}`}
              onClick={() => onSelectItem(index)}
              className={activeItem === index ? 'active' : ''}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Categories;
