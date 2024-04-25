import { useRecoilState } from 'recoil'
import { $cartAtom } from '../../../Atoms/cartAtom'
import './AddtoCartBtn.css'



export default function AddtoCartBtn({product,quantity}) {
  const [cartData, setCartData]= useRecoilState($cartAtom);
   console.log(cartData);

  function AddtoCart(){
    setCartData([...cartData,{...product, quantity:1}]);
    
    

  }
    
  return (
    <div className='btn-add'>
        <button tybe='submit' onClick={AddtoCart} className='btn-item'>Add To Cart</button>
    </div>
  )
}
