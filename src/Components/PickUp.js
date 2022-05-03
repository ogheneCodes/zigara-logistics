import React, { Component } from "react";
import "./CSS/PickUp.css";
import { Link } from "react-router-dom";
import zigaraBike from "../images/ZIGARA-Bike.png";
export class PickUp extends Component {
  render() {
    return (
      <div>
        <div className="delivery-container">
          <div className="delivery-wrapper">
            <div className="delivery-heading">
              <h2>Pick Up and Delivery</h2>
            </div>
            <div className="delivery-content">
              <div className="delivery-writeup">
                <p>
                  Within Enugu State, we provide seamless and hassle-free
                  logistical services.
                </p>
                <p>
                  Our dispatch riders are available to pick up and transport
                  your items to your location quickly and safely.
                </p>
                <Link to="/Login">
                  <button className="btn-btn">Schedule Delivery</button>
                </Link>
              </div>
              <div className="delivery-image">
                <img src={zigaraBike} alt="avatar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PickUp;
