import React from 'react'
import './RemoveAll.css'
import { useRecoilState } from 'recoil'
import { $cartAtom } from '../../../../Atoms/cartAtom'

export default function RemoveAllBtn() {
    const [cartData, setCartData] = useRecoilState($cartAtom);
    console.log(cartData);

    function RemoveAll(){
        setCartData([]);
        

    }
  return (
    <div >
        <button className='btn-removeall' onClick={RemoveAll}>Remove All</button>
    </div>
  )
}
