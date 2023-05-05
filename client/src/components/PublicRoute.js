import React from 'react'
import { Navigate } from 'react-router-dom'

export default function PublicRoute({children}) {
  if(localStorage.getItem('token')){
    return <Navigate to = "/"/>              // if the token is present in the localstorage than it will redirect us to the HOMEPAGE
  }else{
    return children
  }
}
