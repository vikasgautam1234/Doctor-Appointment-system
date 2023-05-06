import React from 'react'
import "../styles/LayoutStyles.css"
import { SidebarMenu } from '../Data/data'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Layout = ({children}) => {
  const {user}= useSelector((state)=>state.user)
  const location = useLocation()    // we store HOOKS in the variable
  return (
    <>
    <div className='main'>
        <div className='layout'>
            <div className='sidebar'>
                 <div className='logo'>
                  <h6>DOC APP</h6>
                  <hr></hr>
                 </div>
                 <div className='menu'>
                  {SidebarMenu.map((menu) =>{
                    const isActive = location.pathname=== menu.path
                    return(
                      <>
                      <div className={`menu-item ${isActive && "active"}`}>
                        <i className= {menu.icon}></i>
                        <Link to = {menu.path}>{menu.name}</Link>
                      </div>
                      </>
                    )
                  })}
                  </div>
            </div>
            <div className='content'>
               <div className='header'>
                <div className='header-content'>
                <i class="fa-solid fa-bell"></i>
                <Link to = "/profile">{user?.name}</Link>
                </div>
               </div>
               <div className='body'>{children}</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Layout
