import React from 'react'

function Categories({items}) {
    return (
      <div className="categories">
        <ul>
          <li className="active">All</li>
            {
              items.map((name, index) => (
              <li key={`${name}_${index}`}
              onClick={()=>alert(1)}>
                  
                {name} 
              </li>)
              )}
        </ul>
      </div>
    )
}

export default Categories
