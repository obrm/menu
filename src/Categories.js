import React from 'react'

const Categories = ({ filterItems, categories }) => {
  return (
    <div className='btn-container'>
      {categories.map((category) => (
        <button
          className='filter-btn'
          key={category}
          onClick={() => filterItems(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default Categories
