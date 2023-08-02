import {useRef} from 'react'
// import { useFormik } from 'formik';
import { fields } from '../config/auth.fields.config'
import Input from '../shared/Input'
import { useFormik } from 'formik';
import { signInSuccess, signInTry } from '../features/userSlice';
import { useDispatch } from 'react-redux';


const Login = () => {

  const form  = useRef(null)
  const dispatch = useDispatch()
  // tambien podria usar lo !!! , pero requeria un poco de refactor 
  // const {formik} = useForm({initialValues,ref:form})
  const formik = useFormik({
    initialValues:{
          email: '',
          password:''
    },
    onSubmit: values => {
        form.current.reset()
        dispatch(signInTry())
        setTimeout(() => {
          dispatch(signInSuccess(values))
        },[3000] )
    },
    });

  return (
    <div className='container d-flex flex-column my-5 py-5'>
        <h1 className='text-center my-5'>Autenticacion</h1>
        <form ref={form} onSubmit={formik.handleSubmit}  className='w-50 d-flex flex-column mx-auto' action="">
          {fields.map(({label,input},index) => <Input key={index} label={label} input={{...input,onChange:formik.handleChange}}  />)}
        <button className='btn btn-primary mt-5' type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login