import React from 'react'
import './productDisplay.css'
import AddtoCartBtn from '../Buttons/AddtoCartBtn/AddtoCartBtn'


 const ProductDisplay = ({product}) => {
  const {image, title, price, category} = product;
  return (
    <div>
      <div className='left-display'>
          <img src={image} alt="" />
      </div>
      <div className="right-display">
        <div className='displa-title'>{title}</div>
        <div className='right-displayprice'>${price}</div>
        <div className="right-display-discription">
        sgjdsu sajuurks jjhukhie jgikukhkhbk ygfjkskfsfgsb uubfbiudug jygbhbyigf
        </div>
        <AddtoCartBtn/>
        <p className='right-diplay-category'>Category:<span>{category}</span></p>
      
      </div>
    </div>
  )
}
export default ProductDisplay
