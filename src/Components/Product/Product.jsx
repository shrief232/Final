import React, { useState } from 'react'
import './Product.css';

//import axios from 'axios';
import Item from '../Items/Item';


 const Product = ()=>{
  const [product] = useState([]);
  
   //useEffect(()=>{
    //const fetchData = async () => {
      //const response = await axios.get('http://localhost:3004/products');
      //setProducts(response.data);
    //};

    //fetchData();
  //}, [])
    
  
  return (
    <div className='product'>
       <h1>Bestsellers for you</h1>
       <hr />
       <div className='bedroom'>
         {product.map((product, i)=>(
           <Item key={i} products={product}/>
          ))}
       </div>


    </div>
  )
}
export default Product


