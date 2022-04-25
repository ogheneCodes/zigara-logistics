import React, { Component } from 'react'
import './CSS/NavBar.css'
import Logo from '../images/Logo.svg'
import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";

export class NavBar extends Component {
  render() {
    return (
     <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
     <Link className="navbar-brand" to="/">
     <img src={ Logo } alt="Avatar" />
     </Link>
     <button
       className="navbar-toggler"
       type="button"
       data-toggle="collapse"
       data-target="#navbarSupportedContent"
       aria-controls="navbarSupportedContent"
       aria-expanded="false"
       aria-label="Toggle navigation"
     >
       <span className="navbar-toggler-icon"></span>
     </button>

     <div className="collapse navbar-collapse" id="navbarSupportedContent">

       <ul className="navbar-nav ml-auto">
       <li className="nav-item dropdown">
           <Link className="nav-link" to=''>
             Our Services <FaAngleDown></FaAngleDown>
           </Link>
           <div className="dropdown-content">
              <Link to="/PickUp">Pick up and Delivery</Link>
              <Link to="/Relocation">Packing and moving (Relocation)</Link>
           </div>
         </li>
         <li className="nav-item">
           <Link className="nav-link" to="/AboutUs">
             About Us
           </Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link" to="">
             Account
           </Link>
         </li>
         <li className="nav-item dropdown">
           <Link className="nav-link" to="">
             Support<FaAngleDown></FaAngleDown>
           </Link>
           <div className="dropdown-content">
              <Link to="/Contact">Contact  Us </Link>
              <Link to="/FAQ">FAQs</Link>
           </div>
         </li>


         <li className="nav-item">
         <button type="button" className="btn btn-danger">Login</button>
         </li>
         <li className="nav-item">
         <button type="button" className="btn btn-light" id="signup">Sign Up</button>
         </li>
       </ul>
     </div>
   </nav>
     
     </div>
    )
  }
}

export default NavBar