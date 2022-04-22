import React, { Component } from 'react'
import './CSS/PickUp.css'
import zigaraBike from '../images/ZIGARA-Bike.png'
export class PickUp extends Component {
  render() {
    return (
      <div>
        <div className="pickUp">
            <br /><br />
            <h1 id="header">Pick up and Delivery</h1>
            <div className="pickUpFlex">
                <div className='pickUpFlexText'>
                    <p>Within Enugu State, we provide seamless and hassle-free logistical services.
                    Our dispatch riders are available to pick up and transport your items to your location quickly and safely.
                    </p>
                    <button>Schedule Delivery</button>
                </div>
                <div  className="pickUpFlexImg">
                    <img src={zigaraBike} alt="" id="imgBike"/>
                </div>
            </div>
        </div>
      
      
      
      </div>
    )
  }
}

export default PickUp