import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import { logout } from '../../firebase';
const Navbar = () => {

  const navRef = useRef();

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if (window.scrollY >= 80){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  },[])

  return (
    <div ref={navRef} className='navbar'>
        <div className="navbar_left">
        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" /> 
        <ul>
            <li>Home</li>
            <li>Tv Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Language</li>
        </ul> 
        
        </div>
        <div className="navbar_right">
            <img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
            <div className='drop_down'>
                <p onClick={()=>{logout()}}>click to sign out</p>
            </div>
        </div>
 
    </div>
  )
}

export default Navbar