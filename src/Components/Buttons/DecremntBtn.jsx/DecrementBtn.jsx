import React from 'react'
import './DecrementBtn.css'
import { useRecoilState } from 'recoil';
import { $cartAtom } from '../../../Atoms/cartAtom';

export default function DecrementBtn({id}) {
  const [cartData, setCartData] = useRecoilState($cartAtom);
  function Dencrement(){
    const obj = cartData.find((product)=>product.id === id);
    if(obj.quantity === 1)return;
    const newObj = {...obj, quantity : obj.quantity-1};
    const newCartData = [...cartData];
    newCartData.splice(newCartData.indexOf(obj), 1, newObj);
    setCartData(newCartData);
  }
  return (
    <div>
        <button className='btn' onClick={Dencrement}>-</button>
    </div>
  )
}
 
