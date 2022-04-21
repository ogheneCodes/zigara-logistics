import React, { Component } from 'react'
import './CSS/Relocation.css'
import relocation from '../images/relocation.svg'
export class Relocation extends Component {
  render() {
    return (
      <div>
      <div className="pickUp">
      <h1 id="header">Let’s help you relocate without hassle</h1>
      <div className="pickUpFlex">
          <div className='pickUpFlexText'>
              <p>
              Do you intend to relocate? We can take care of all of your household and office stuff. Loading, transporting, and unloading are all things we do. We provide complete property security under the supervision of a well-trained supervisor for a trustworthy delivery service.
              </p>
              <button>Schedule Delivery</button>
          </div>
          <div  className="pickUpFlexImg">
              <img src={relocation} alt="" id="relocationImg"/>
          </div>
      </div>
  </div>
      
      </div>
    )
  }
}

export default Relocation