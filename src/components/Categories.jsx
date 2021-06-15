import React from 'react'
import {useState} from 'react'

function Categories({items}) {
  const [activeItem, setactIveItem] = useState(null)

    return (
      <div className="categories">
        <ul>
          <li className={activeItem === null ? 'active' : ''} onClick={() => setactIveItem(null)}>All</li>
            {items &&
              items.map((name, index) => (
              <li key={`${name}_${index}`}
              onClick={()=> setactIveItem(index)}
              className={activeItem === index ? 'active' : ''}>
                  
                {name} 
              </li>)
              )}
        </ul>
      </div>
    )
}

export default Categories
