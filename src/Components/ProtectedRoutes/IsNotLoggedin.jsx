import React from 'react'
import { useRecoilState } from 'recoil'
import { $authData } from '../../Atoms/authAtom'
import { Navigate } from 'react-router';

export default function IsNotLoggedin({children}) {
    const [auth] = useRecoilState($authData);
    if(auth.isAuth) return <Navigate to='/' />;
  return (
    <div>{children}</div>
  )
}
