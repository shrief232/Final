import React from 'react'
import './Removebtn.css'
import { useRecoilState } from 'recoil'
import { $cartAtom } from '../../../Atoms/cartAtom'

export default function RemoveBtn ({id}) {
  const [cartData, setCartData] = useRecoilState($cartAtom);
   function removeItem(){
    setCartData(cartData.filter(product=>product.id !== id));
    localStorage.removeItem('Mycart')
   };
  return (
    <div>
        <button className='btn' onClick={removeItem}>Remove</button>
    </div>
  )
}
