import './Item.css'
import AddtoCartBtn from '../Buttons/AddtoCartBtn/AddtoCartBtn'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { $cartAtom } from '../../Atoms/cartAtom'





 const Item = ({product}) => {
  const [cartData]= useRecoilState($cartAtom);
  const {id, title, price, image} = product;
  
  

  const IsinCart = cartData.find(ele => ele.id === product.id);
  return (
    <div className='item'>
      <p className='id'></p>
      <Link className='link-img' to={`/product/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <p>
        <Link className='link' to={`/product/${id}`}>
        {title}
        </Link>
      </p>
      <div className='item-price'>
        ${price}
      </div>
        {IsinCart ?( <span>Already In cart  <button className='cart-btn'> <Link className='cart-btn-link'  to='/cart'>Go To Cart</Link></button></span>):(<AddtoCartBtn product={product}/>)}
        

    </div>
  )
}

export default Item;