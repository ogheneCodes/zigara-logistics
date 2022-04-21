import React, { Component } from 'react'
import './CSS/NavBar.css'
import Logo from '../images/Logo.svg'
import { FaAngleDown } from "react-icons/fa";

export class NavBar extends Component {
  render() {
    return (
     <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
     <a className="navbar-brand" href="www">
     <img src={ Logo } alt="Avatar" />
     </a>
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
       <li className="nav-item">
           <a className="nav-link" href="www">
             Our Services <FaAngleDown></FaAngleDown>
           </a>
         </li>
         <li className="nav-item">
           <a className="nav-link" href="www">
             About Us
           </a>
         </li>
         <li className="nav-item">
           <a className="nav-link" href="www">
             Account
           </a>
         </li>
         <li className="nav-item">
           <a className="nav-link" href="www">
             Support<FaAngleDown></FaAngleDown>
           </a>
         </li>


         <li className="nav-item">
         <button type="button" class="btn btn-danger">Login</button>
         </li>
         <li className="nav-item">
         <button type="button" class="btn btn-light">Sign Up</button>
         </li>
       </ul>
     </div>
   </nav>
     
     </div>
    )
  }
}

export default NavBar