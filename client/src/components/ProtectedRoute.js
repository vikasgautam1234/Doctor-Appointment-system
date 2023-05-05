// with the help of this we will protects our routes(login, register,home) and if token 
// presents than it will navigate us to the HOME PAGE and if token didn't present then it will navigate us to the LOGIN PAGE 
// IF WE HAVE TOKEN THEN WE DON'T HAVE TO LOGIN AGAIN & AGAIN


import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({children}) {     //destructuring the props i.e.,CHILDREN , so that we can directly use it
  if(localStorage.getItem('token')){                      // if it finds token in the localstorage than it will return props
    return children
  }else{
    return <Navigate to = "/login"/>
  }
}
