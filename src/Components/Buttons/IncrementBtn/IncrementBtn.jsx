import React from 'react'
import './Increment.css'
import { useRecoilState } from 'recoil'
import { $cartAtom } from '../../../Atoms/cartAtom'

export default function IncrementBtn({id}) {
  const [cartData, setCartData] = useRecoilState($cartAtom);
  function increment(){
    const obj = cartData.find((product)=>product.id === id);
    const newObj = {...obj, quantity : obj.quantity+1};
    const newCartData = [...cartData];
    newCartData.splice(newCartData.indexOf(obj), 1, newObj);
    setCartData(newCartData);
  }
  return (
    <div>
        <button className='btn' onClick={increment}>+</button>
    </div>
  )
}
