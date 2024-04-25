import React from 'react'
import './logoutbtn.css';
import { useRecoilState } from 'recoil';
import { $authData } from '../../Atoms/authAtom';
import { toast } from 'react-toastify';

export default function LogoutButton() {
    const[authData , setAuthData] = useRecoilState($authData);
    console.log(authData);

    function handleLogout(){
        setAuthData({
            isAuth : false,
            user : null,     
      });
      localStorage.removeItem('logged in');
      toast.success('Logged out successfully');

    }
  return (
    <button onClick={handleLogout} className='out-btn'>Logout</button>  )
}
