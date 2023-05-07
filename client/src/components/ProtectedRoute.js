// // with the help of this we will protects our routes(login, register,home) and if token 
// // presents than it will navigate us to the HOME PAGE and if token didn't present then it will navigate us to the LOGIN PAGE 
// // IF WE HAVE TOKEN THEN WE DON'T HAVE TO LOGIN AGAIN & AGAIN


import React,{useEffect}from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import { hideLoading, showLoading } from '../redux/features/alertSlice'
import { setUser } from '../redux/features/userSlice'

export default function ProtectedRoute({children}) {     //destructuring the props i.e.,CHILDREN , so that we can directly use it
const dispatch = useDispatch()
const {user} = useSelector(state => state.user)

//get user(will make a network request with the help of axios)
// eslint-disable-next-line
const getUser = async() =>{
  try{
    dispatch(showLoading())
    const res = await axios.post('/api/v1/user/getUserData',
    {token: localStorage.getItem('token')},
    {
      headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }
    )
    dispatch(hideLoading())
    if(res.data.success){
      dispatch(setUser(res.data.data))
    }else{
      <Navigate to = "/login"/>
      localStorage.clear()
    }
  }catch(error){
    dispatch(hideLoading())
    localStorage.clear()   // if any error comes then the token WILL AUTOMATICALLY DELETE (IF THE TOKEN WON'T PRESENT THEN IT WON'T ACCESS THE HOME PAGE)
    console.log(error)
  }
}

useEffect(()=>{
if(!user){
  getUser()
}
},[user, getUser])

  if(localStorage.getItem('token')){                      // if it finds token in the localstorage than it will return props
    return children
  }else{
    return <Navigate to = "/login"/>
  }
}




// import React, { useEffect } from "react";
// import { Navigate } from "react-router-dom";
// import axios from "axios";
// import { useSelector, useDispatch } from "react-redux";
// import { hideLoading, showLoading } from "../redux/features/alertSlice";
// import { setUser } from "../redux/features/userSlice";

// export default function ProtectedRoute({ children }) {      //destructuring the props i.e.,CHILDREN , so that we can directly use it
//   const dispatch = useDispatch();
//   const { user } = useSelector((state) => state.user);

//   //get user
//   //eslint-disable-next-line
//   const getUser = async () => {
//     try {
//       dispatch(showLoading());
//       const res = await axios.post(
//         "/api/v1/user/getUserData",
//         { token: localStorage.getItem("token") },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       dispatch(hideLoading());
//       if (res.data.success) {
//         dispatch(setUser(res.data.data));
//       } else {
//         localStorage.clear();
//         <Navigate to="/login" />;
//       }
//     } catch (error) {
//       localStorage.clear();    // if any error comes then the token WILL AUTOMATICALLY DELETE (IF THE TOKEN WON'T PRESENT THEN IT WON'T ACCESS THE HOME PAGE)
//       dispatch(hideLoading());
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     if (!user) {
//       getUser();
//     }
//   }, [user, getUser]);

//   if (localStorage.getItem("token")) {
//     return children;
//   } else {
//     return <Navigate to="/login" />;
//   }
// }