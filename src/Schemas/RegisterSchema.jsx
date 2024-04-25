import * as yup from 'yup';
const RegisterSchema = yup.object().shape({
    name: yup.string().required('name is required'),
    email: yup.string().required('email is required').email('enter a valid email'),
    password: yup.string().required('password is required').min(8,'password must be at least 8 characters'),
    confirmPassword: yup.string().required('confirm password is required').oneOf([yup.ref('password')], 'password does not match'),
})
export default RegisterSchema;