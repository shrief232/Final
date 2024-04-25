import React from 'react';
import './CartItem.css';
import IncrementBtn from '../Buttons/IncrementBtn/IncrementBtn';
import DecrementBtn from '../Buttons/DecremntBtn.jsx/DecrementBtn';
import RemoveBtn from '../Buttons/RemoveBtn/RemoveBtn';




const CartItem = ({product}) => {
  
  const { title, price, image, quantity } = product;
 
 

 
  return (
    <div className="cart-item">
      <img className="cart-item-image" src={image} alt={title} />
      <div className="cart-item-details">
        <p className="cart-item-title">{title}</p>
       <div className='quantity-btn'> 
        <IncrementBtn id={product.id}/>
        <p className="cart-item-quantity">{quantity}</p>
        <DecrementBtn id={product.id}/>
       </div> 
        <p className="cart-item-price">$ {price}</p>
        <RemoveBtn id={product.id}/>
      </div>
      
    </div>
  );
};

export default CartItem;
