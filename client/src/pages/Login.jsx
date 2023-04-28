import React from 'react'
import {Form,Input, message} from "antd"
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import "../styles/RegisterStyles.css"
const Login = () => {
  const navigate = useNavigate()  //useNavigate HOOK IS USED TO REDIRECT TO THE ANOTHER PAGE
  //form handler
  const onfinishHandler = async (values)=>{
    try{
      //The axios.post method is used to send a POST request to the server. It takes two arguments: the URL to 
      //which the request will be sent and an optional data object that contains the data to be sent with the request.
         const res = await axios.post('/api/v1/user/login', values)
         if(res.data.success){
          localStorage.setItem('token', res.data.token)  //it is used to store an authentication token that is returned by the server in the res.data.token property of the response object.
          message.success('Login Successfully')
          navigate('/')   //it will redirect to the HOME PAGE
         }else{
          message.error(res.data.message)
         }
    }catch(error){
      console.log(error)
      message.error('something went wrong')
    }
  }
  return (
    <>
    <div className="form-container">
      <Form layout='vertical' onFinish={onfinishHandler} className='register-form'>
        <h3 className='text-center'>Login Form</h3>
       
        <Form.Item label = "Email" name= "email">
            <Input type='email' required/>
        </Form.Item>
        <Form.Item label = "Password" name= "password">
            <Input type='password' required/>
        </Form.Item>
        <Link to = "/login" className='m-2'>
          Not a Registered User</Link>
        <button className='btn btn-primary' type='submit'>Login</button>
      </Form>

    </div>
    </>
  )
}

export default Login
