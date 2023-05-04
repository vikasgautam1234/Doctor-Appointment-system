import React from 'react'
import {Form,Input, message} from "antd"
import axios from 'axios'   // with the help of axios we can make NETWORK CALLS
import { Link , useNavigate} from 'react-router-dom'
import "../styles/RegisterStyles.css"
import { useDispatch } from 'react-redux'
import { showLoading, hideLoading } from '../redux/features/alertSlice'



const Register = () => {
  const navigate = useNavigate() // we use this to navegate the register to the login page
  const dispatch = useDispatch()
  //form handler
  const onfinishHandler = async (values)=>{
    try{
      dispatch(showLoading())   // INITIALE REQUEST JAEGI TOH SPINNER SHOW HOGA
      const res = await axios.post('/api/v1/user/register',values)
      dispatch(hideLoading())
      if(res.data.success){
        message.success('Register successfully')
        navigate('/login')    // IF REGISTER SUCCESSFULLY THEN REDIRECT IT TO THE LOGIN PAGE
      }else{
        message.error(res.data.message)
      }
    }catch(error){
      dispatch(hideLoading())     // use this here because in error also we don't want SPINNERS
      console.log(error)
      message.error('something went wrong')
    }
  }
  return (
    <>
    <div className="form-container">
      <Form layout='vertical' onFinish={onfinishHandler} className='register-form'>
        <h3 className='text-center'>Register Form</h3>
        <Form.Item label = "Name" name= "name">
            <Input type='text' required/>
        </Form.Item>
        <Form.Item label = "Email" name= "email">
            <Input type='email' required/>
        </Form.Item>
        <Form.Item label = "Password" name= "password">
            <Input type='password' required/>
        </Form.Item>
        <Link to = "/login" className='m-2'>
          Already user login here</Link>
        <button className='btn btn-primary' type='submit'>Register</button>
      </Form>

    </div>
    </>
  )
}

export default Register
