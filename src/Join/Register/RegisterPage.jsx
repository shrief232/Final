import './Register.css';
import { Fragment } from "react";
import { Formik , Form , Field, ErrorMessage } from 'formik';
import axios from 'axios';
import RegisterSchema from './../../Schemas/RegisterSchema';
import { useNavigate } from 'react-router-dom';
import Errors from "../../Components/Errors/Errors";

export default function RegisterPage() {
  const Navigate = useNavigate;
  function handleRegistr(values, actions){
    const newData = {...values};
    delete newData.confirmPassword;
    axios.post('http://localhost:3004/users', newData)
    .then(()=>console.log('email registered successfully'));
    actions.resetForm();
    Navigate('/login');

  }
  
  return (
    <Fragment>
      <Formik
       initialValues={{
         name: '',
         email:'',
         password: '',
         confirmPassword:'',
       }}
       validationSchema={RegisterSchema}
       onSubmit={handleRegistr}
      >
      {(errors)=> {
        return(

       
        <Form className="register">
          
         <h1>Register</h1>
         <p>to find your products Easier kindly Join our comunity</p>
         <div className='Main'>
          <div className='hero-register'>
            <h1>
              Welcom to register page.
            </h1>
          </div>
          <div className='form'>
           <div className="section">
            <label>full name</label>
            <Field className='field' type='text' name="name" placeholder='full name' />
            <Errors>
              <ErrorMessage name="name" />
            </Errors>
           </div>
           <div className="section">
            <label>email</label>
            <Field className='field' type='text' name="email" placeholder='email'/>
            <Errors>
              <ErrorMessage name="email" />
            </Errors>
           </div>
           <div className="section">
            <label>password</label>
            <Field className='field' type='text' name="password" placeholder='Password'/>
            <Errors>
              <ErrorMessage name="password" />
            </Errors>
           </div>
           <div className="section">
            <label>confirm password</label>
            <Field className='field' type='text' name="confirmPassword" placeholder='Confirm Password'/>
            <Errors>
              <ErrorMessage name="confirmPassword" />
            </Errors>
           </div>
           <div className="btn">
            <button type="submit">Register</button>
           </div>

          </div>
          
            
         </div>
          

        </Form>
         )
        }
      }
      </Formik>
       

    </Fragment>
  )
}
