import * as yup from 'yup';
const LoginSchema = yup.object().shape({
    email: yup.string().required('email is required').email(' email or password is incorrect'),
    password: yup.string().required('password is required').min(8,' email or password is incorrect'),
   
})
export default LoginSchema;
