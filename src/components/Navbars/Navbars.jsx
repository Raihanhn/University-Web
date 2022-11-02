import React from 'react'
import img from '../../assets/img/edu.png'
import { AiOutlineSearch } from 'react-icons/ai';

const Navbars = () => {
  return (
    <nav className="navbar-second flex">
    <div className="logo">
      <img src={img} alt=""/>
    </div>  
    <ul className='flex'>
        <li><a href="#">HOME</a></li>
        <li><a href="#">ADMISSIONS FALL '22</a></li>
        <li><a href="#">ACADEMICS</a></li>
        <li><a href="#">UNIVERSITY PROFILE</a></li>
        <li><a href="#">MoU & MoA</a></li>
        <li><a href="#">FACULTY MEMBERS</a></li>
        <li><a href="#">CURRENT STUDENTS</a></li>
        <li><a href="#">IMPORTANT LINKS</a></li>
        <li><a href="#"><AiOutlineSearch className='search'/></a></li>
       
    </ul>
</nav>
  )
}

export default Navbars