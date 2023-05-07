// import React from 'react'
// import "../styles/LayoutStyles.css"
// import { adminMenu, userMenu } from '../Data/data'
// import { Link, Navigate, useLocation , useNavigate} from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import {message} from 'antd'     //with the help of antd we can show the message

// const Layout = ({children}) => {
//   const {user}= useSelector((state)=>state.user)
//   const location = useLocation()    // we store HOOKS in the variable
//   const navigate = useNavigate()

//   //Logout function
//   const handleLogout = ()=>{
//     localStorage.clear()
//     message.success('Logout successfully')
//     navigate("/login")
//   }

//   //conditonal redering menu list
//    const SidebarMenu = user?.isAdmin ? adminMenu: userMenu
//   return (
//     <>
//     <div className='main'>
//         <div className='layout'>
//             <div className='sidebar'>
//                  <div className='logo'>
//                   <h6>DOC APP</h6>
//                   <hr></hr>
//                  </div>
//                  <div className='menu'>
//                   {SidebarMenu.map((menu) =>{
//                     const isActive = location.pathname=== menu.path
//                     return(
//                       <>
//                       <div className={`menu-item ${isActive && "active"}`}>
//                         <i className= {menu.icon}></i>
//                         <Link to = {menu.path}>{menu.name}</Link>
//                       </div>
//                       </>
//                     )
//                   })}
//                    <div className={`menu-item `} onClick={handleLogout}>
//                         <i className= "fa-solid fa-right-from-bracket"></i>
//                         <Link to = "/login">Logout</Link>
//                       </div>
//                   </div>
//             </div>
//             <div className='content'>
//                <div className='header'>
//                 <div className='header-content'>
//                 <i class="fa-solid fa-bell"></i>
//                 <Link to = "/profile">{user?.name}</Link>    
//                 </div>
//                </div>
//                <div className='body'>{children}</div>
//             </div>
//         </div>
//     </div>
//     </>
//   )
// }

// export default Layout



import React from "react";
import "../styles/LayoutStyles.css";
import { adminMenu, userMenu } from "./../Data/data";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { message } from "antd";
const Layout = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();
  // logout funtion
  const handleLogout = () => {
    localStorage.clear();
    message.success("Logout Successfully");
    navigate("/login");
  };

  // redering menu list
  const SidebarMenu = user?.isAdmin ? adminMenu : userMenu;
  return (
    <>
      <div className="main">
        <div className="layout">
          <div className="sidebar">
            <div className="logo">
              <h6>DOC APP</h6>
              <hr />
            </div>
            <div className="menu">
              {SidebarMenu.map((menu) => {
                const isActive = location.pathname === menu.path;
                return (
                  <>
                    <div className={`menu-item ${isActive && "active"}`}>
                      <i className={menu.icon}></i>
                      <Link to={menu.path}>{menu.name}</Link>
                    </div>
                  </>
                );
              })}
              <div className={`menu-item `} onClick={handleLogout}>
                <i className="fa-solid fa-right-from-bracket"></i>
                <Link to="/login">Logout</Link>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="header">
              <div className="header-content">
                <i class="fa-solid fa-bell"></i>
                <Link to="/profile">{user?.name}</Link>
              </div>
            </div>
            <div className="body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
