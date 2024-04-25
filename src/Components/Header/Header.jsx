import './Header.css';
import { Link} from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { $authData } from '../../Atoms/authAtom';
import LogoutButton from '../Buttons/LogoutButton';
import cart_icon from '../Assets/hero/cart_icon.jpg';
import { useState } from 'react';
import { $cartAtom } from '../../Atoms/cartAtom';





export default function Header() {
  const [ auth ] = useRecoilState($authData);
  const [menu, setMenu] = useState("home");
  const slidbar = document.querySelector('.list-header');
  const [cartData]= useRecoilState($cartAtom);

  const cartCount = cartData.reduce((acc, product) => {
    return acc + ( product.quantity );
      }, 0);  
  
  function ShowMenu(){
    slidbar.style.display = 'flex';
    
  }
  function CloseSlide(){

      slidbar.style.display = 'none'; 
    
     
  }

  return (
    <div className='header'>
     <div className='Main-header'>
        <div className='element'>
            <ul>
                <li onClick={ShowMenu} className='li'><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></li>
                <li className='li-main'>
                    <Link onClick={()=>{setMenu("home")}} className='link' to='/'>Home{menu==="home"?<hr/>:<></>}</Link>
                </li>
                <li className='li-main'>
                    <Link onClick={()=>{setMenu("products")}} className='link' to='/products'>Living Room{menu==="products"?<hr/>:<></>}</Link>
                </li>
                <li className='li-main'>
                   <Link onClick={()=>{setMenu("profile")}} className='link' to='/profile'>Kids Room{menu==="profile"?<hr/>:<></>}</Link>
                    
                </li>
                <li className='li-main'>
                    <Link onClick={()=>{setMenu("shop")}} className='link' to='/shop'>Bed Room{menu==="shop"?<hr/>:<></>}</Link>
                </li>
             
            </ul>
        </div>
        <div className='h-join'>
            {auth.isAuth ? (<div className='logout'>
                 <h3>{auth.user.name}</h3>
                 <div className='d-cart'>
                   <Link className='link-cart' to='/cart'>
                     <div className='cart-icon'>
                       <img src={cart_icon} alt="" />
                       <div className='cart-value'>{cartCount}</div>
                     </div>
                   </Link> 
                </div>
                 <LogoutButton />
                </div>) : (
                 <ul>
                 <li>
                     <Link className='link' to='/login'>Login</Link>
                 </li>
                 <li>
                     <Link className='link' to='/register'>Register</Link>
                 </li>
             </ul>
            )}
           
        </div>
        
     </div>
     <div className='list-header'>
            <ul className='element-slide'>
                <li onClick={CloseSlide} className='slide-li' ><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></li>
                <li>
                    <Link onClick={()=>{setMenu("home")}} className='link-slide' to='/'>Home{menu==="home"?<hr/>:<></>}</Link>
                </li>
                <li>
                    <Link onClick={()=>{setMenu("products")}} className='link-slide' to='/products'>Living Room{menu==="products"?<hr/>:<></>}</Link>
                </li>
                <li>
                   <Link onClick={()=>{setMenu("profile")}} className='link-slide' to='/profile'>Kids Room{menu==="profile"?<hr/>:<></>}</Link>
                    
                </li>
                <li>
                    <Link onClick={()=>{setMenu("shop")}} className='link-slide' to='/shop'>Bed Room{menu==="shop"?<hr/>:<></>}</Link>
                </li>
             
            </ul>
        
        
           
        
        
      </div>
    </div>
     
     
  )
}
