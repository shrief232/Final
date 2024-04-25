import React from 'react'
import { $authData } from '../../Atoms/authAtom';
import { Navigate } from 'react-router';
import { useRecoilState } from 'recoil';

export default function IsLoggedin({children}) {
    const [auth] = useRecoilState($authData);
    if(!auth.isAuth) return <Navigate to='/login'/>;
  return (
    <div>{children}</div>
  )
}
