import React, { useEffect, useState } from 'react'
import '../css/shopify-store.css'
import ShopifyItem from './shopify-item'
import { useSelector } from 'react-redux';

function ShopifyItems() {
  const [products, setProducts] = useState([]);

  const tags = useSelector(state => state.tags)
  const sort = useSelector(state => state.displayType)


  useEffect(()=>{
    let url;
    if(tags === 'products'){
      url = "https://fakestoreapi.com/products";
    }
   
    else if(tags === 'jewelery'){
      url = 'https://fakestoreapi.com/products/category/jewelery';
    }
    else if(tags === 'men'){
      url = "https://fakestoreapi.com/products/category/men's clothing";
    }
    else if(tags === 'female'){
      url = "https://fakestoreapi.com/products/category/female's clothing";
    }
    let newurl;

     if(sort == 'desc'){
      newurl =  url+'?sort=desc';
    }
    else if(sort == 'asc'){
      newurl =  url+'?sort=asc';
    }
    console.log(newurl);
   
    fetch(newurl)
            .then(res=>res.json())
            .then(products=>setProducts(products))
  },[tags, sort])
  return (
    <div id='shopify-items'>
  {products.map((product)=>{

    return <ShopifyItem
        category={product.category}
        description={product.description}
        image={product.image}
        price={product.price}
        title={product.title}
        key={product.id}
    />
  })}
    </div>
  )
}

export default ShopifyItems