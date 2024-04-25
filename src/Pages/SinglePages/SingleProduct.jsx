import React, { useEffect} from 'react'
import './SingleProduct.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

import {  useState } from 'react';
import AddtoCartBtn from '../../Components/Buttons/AddtoCartBtn/AddtoCartBtn';
import { useRecoilState } from 'recoil';
import { $cartAtom } from '../../Atoms/cartAtom';
import Loader from './../../Components/Loader/Loader';






export default function SingleProduct(){
  const [product, setProduct] = useState({})
  const {id} = useParams();
  const [cartData]= useRecoilState($cartAtom);
  const [isloading, setIsloading] = useState(false);
  
  
  
  useEffect(()=>{
    setIsloading(true);
    setTimeout(()=>{
    axios(`http://localhost:3004/products/${id}`).then((data)=>{
       setProduct(data.data);
       setIsloading(false);
    });
}, 1000)
  },[id]);
  
  const IsinCart = cartData.find(ele => ele.id === product.id); 
  if(isloading) return<Loader/>
    return (
    <div className="singlePage-container">
      <h1 className='main-h1'>{product.category}</h1>
      <hr className='main-hr'/>   
    <div className='singleProduct' >
      
      <div className='left-display'>
          <img src={product.image} alt="" />
      </div>
      <div className="right-display">
        <div className='display-title'> 
           <h1>{product.title}</h1>
           <hr />                                
        </div>
        
        <div className="right-display-discription">
          <h4>Furniture :</h4>
          <hr />
          <p>Simple and low-profile furniture allows for easy movement and maximizes floor space.
           Platform beds are popular, often with clean lines and integrated storage drawers.
           Nightstands are minimal, often featuring geometric shapes or metallic finishes.
           Dressers are sleek and streamlined, with clean facades and hidden hardware.</p>
          <h4>Materials :</h4>
          <hr />
          <p>High-gloss finishes, glass, and metal are frequently used to create a contemporary feel.
           Leather and natural fibers like wool and cotton add texture and warmth.
           Wood elements, often light or in muted tones, can introduce a touch of nature</p>

        </div>
        <div className='right-displayprice'><h3 className='price'>Price : <hr /></h3><h4>${product.price}</h4></div>
        
        <p className='right-diplay-category'>Category :  <span>{product.category}</span></p>
        
        <div className='display-footer'>
         <div className="star-rating">
          <input type="radio" id="star5" name="rating" value="5"  checked/>
          <label for="star5" title="5 stars">★</label>
          <input type="radio" id="star4" name="rating" value="4"/>
          <label for="star4" title="4 stars">★</label>
          <input type="radio" id="star3" name="rating" value="3"/>
          <label for="star3" title="3 stars">★</label>
          <input type="radio" id="star2" name="rating" value="2"/>
          <label for="star2" title="2 stars">★</label>
          <input type="radio" id="star1" name="rating" value="1"/>
          <label for="star1" title="1 star">★</label>
        </div>
        <div className='add-btn'>
        {IsinCart ?( <span>Already In cart   <Link  to='/cart'>Go To Cart</Link></span>):(<AddtoCartBtn product={product}/>)}
        </div>
       </div>
        
      
      </div>
      

      
      

    </div>
  </div>
  )
}
