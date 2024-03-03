import React from 'react'
import '../css/shopify-store.css'

function Category() {
  return (
    <div id='category-area'>
        <h4>Category</h4>
        <div className="categories">
          <div className="input-wrapper">
          <input type='checkbox' value='men'/>
            <label for="men">Men</label>
          </div>
          <div className="input-wrapper">
          <input type='checkbox' value='women'/>
            <label for="women">Women</label>
          </div>
          <div className="input-wrapper">
          <input type='checkbox' value='jewelery'/>
            <label for="jewelery">Jewelery</label>
          </div>
          <div className="input-wrapper">
          <input type='checkbox' value='electronics'/>
            <label for="electronics">Electronics</label>
          </div>
        </div>
    </div>
  )
}

export default Category