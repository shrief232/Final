import { Fragment, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import LoginSchema from "../../Schemas/LoginSchema";
import Errors from "../../Components/Errors/Errors";
import '../Register/Register.css';
import './login.css'
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import { useRecoilState } from 'recoil';
import { $authData} from "../../Atoms/authAtom";
import Loader from "../../Components/Loader/Loader";
import 'react-toastify/dist/ReactToastify.css';



export default function LoginPage() {
  const[IsLoading, setIsLoading] = useState(false);
  const [ auth , setAuth ] = useRecoilState($authData);
  function handleLogin( values, actions){
    setIsLoading(true);
    setTimeout(async () => {
      try{

        console.log(auth);
        const data = await axios(`http://localhost:3004/users?email=${values.email}&password=${values.password}`)
        if(data.data.length){
            
          const authData = {
            isAuth: true,
            user: data.data[0]
         };
        setAuth(authData);
        localStorage.setItem('logged in', JSON.stringify(authData));
        toast.success(' login successfuly')
        
       }else{
         toast.error('email or password is incorrect');
       }
       
      }catch(error){
        console.log(error);
      };
  
    },2000)
    setIsLoading(false);
    actions.resetForm();
  
  }
  if (IsLoading) return <Loader/>;
  return (
    <Fragment>
      <Formik
        initialValues={{
          email:'',
          password: '',
          
        }}
        validationSchema={LoginSchema}
        onSubmit={handleLogin}
      
      >
      
      {(errors)=>{
        
        return(
        <Form className="login">
         
        <h1>Login</h1>
         <p>to find your products Easier kindly Join our comunity</p>
         
         <div className='Main'>
          <div className='hero-register'>
            <h1>
               To Enjoy Our Products Please Login.
            </h1>
          </div>
          
          <div className='form'>
           
           <div className="section">
            <label>email</label>
            <Field className='field' type='text' name="email" placeholder='full name'/>
            <Errors>
              <ErrorMessage name="email"/>
            </Errors>
           </div>
           <div className="section">
            <label>password</label>
            <Field className='field' type='text' name="password" placeholder='Password'/>
            <Errors>
              <ErrorMessage name="password"/>
            </Errors>
           </div>
           
           <div className="btn">
            <button type="submit">Login</button>
           </div>

          </div>
          
            
         </div>

        </Form>
        )
       }}
      </Formik>
       
     <ToastContainer/>
    </Fragment>
  
  );
}
