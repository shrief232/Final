import { Link } from 'react-router-dom'
import './cart.css'
import CartItem from '../../Components/CartItem/CartItem'
import { useRecoilState } from 'recoil';
import { $cartAtom } from '../../Atoms/cartAtom';
import RemoveAllBtn from '../../Components/Buttons/RemoveBtn/RemoveAll/RemoveAllBtn';



export default function CartPage() {
  
  const [cartData]= useRecoilState($cartAtom);
 
  const cartTotal = cartData.reduce((acc, product) => {
    return acc + ( product.quantity * product.price);
      }, 0);
  const cartCount = cartData.reduce((acc, product) => {
        return acc + ( product.quantity );
          }, 0);    

    if(!cartData)
      return <h3 className='h3-error'>An Error Accure</h3>;
    if(!cartData.length)
      return <h3 className='h3-error'>Cart Is Empety</h3> ; 
        

  
  return (
    <div className="card-page">
      <h1 className='h1'>Review Your Order </h1>
      <hr />
      <div className="products">
        
       <div id="cart-table">
         <div id="cart-items">
          {cartData.map(product=>{
            return<CartItem product={product}/>
          })
           }
         </div>
         <RemoveAllBtn/>
       </div>
       <p className="total-price">Total: $<span className="total-value">{cartTotal}</span></p>
       <p className='item-count'>Items : {cartCount}</p>
       <Link className='shop-con' to="/shop">Continue Shopping</Link>
      </div> 
    </div>
  )
}
