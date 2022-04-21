import React, { Component } from 'react';
import fastDelivery from '../images/fast-delivery 1.png';
import truck from '../images/truck 1.png';
import './CSS/Schedule2.css'
import { HiOutlineLocationMarker } from "react-icons/hi";
export class Schedule2 extends Component {
  render() {
    return (
      <div>
      <div id="schedule2">
      <div id="innerschedule2">
        <p>Please fill in the necessary details to make your deliverry</p>
        <p>Choose item type</p>
        <form action="">
          <select name="items" id="items" required>
            <option value="shoes">Shoes</option>
            <option value="edibles">Edibles</option>
            <option value="cloths">Cloths</option>
            <option value="hair-extentions">Hair Extentions</option>
            <option value="food">Food</option>
            <option value="drugs">Drugs</option>
            <option value="fragile-items">Fragile Items</option>
            <option value="television">Television</option>
            <option value="others">Others</option>
          </select>
          <br /><br/><br/><br/><br/>       

          <div id="checked"  className="row" >
            <div className="col-lg-4 form-check form-check">
              <img src={fastDelivery} alt="" />
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label className="form-check-label" for="flexRadioDefault1">Bike</label>
            </div>
            <div  className="col-lg-4 form-check form-check">
              <img src={truck} alt="" />
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
            <label className="form-check-label" for="flexRadioDefault2">
              Vehicle
            </label>
            </div>
          </div>
          <p><HiOutlineLocationMarker /><input type="text" required/></p>
          <br />
          <p><HiOutlineLocationMarker /><input type="text" required/> <br /><br /></p>
          <p>Estimated kilometer 15mins km/hr</p>
          <br /><br />
          <center><input type="submit" value="Payment" /></center>
        </form>
        
      </div>
    </div>
      
      </div>
    )
  }
}

export default Schedule2