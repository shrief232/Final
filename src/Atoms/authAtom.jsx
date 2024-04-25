import { atom } from "recoil";
const localAuthData = JSON.parse(localStorage.getItem('logged in')); 
 
export const $authData = atom({
    key:"auth",
    default: localAuthData ? localAuthData :{
        isAuth : false,
        User : null,
    }
})
 