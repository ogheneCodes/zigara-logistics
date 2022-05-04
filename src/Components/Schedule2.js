import React, { Component } from "react";
import fastDelivery from "../images/fast-delivery 1.png";
import truck from "../images/truck 1.png";
import { Link } from "react-router-dom";
import "./CSS/Schedule2.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
export class Schedule2 extends Component {
  render() {
    return (
      <div>
        <div id="schedule2">
          <div id="innerschedule2">
            <p>Please fill in the necessary details to make your deliverry</p>
            <p>Choose item type</p>
            <form>
              <select name="items" id="items" required>
                <option value="shoes">Wears e.g shoes, clothes, jewelllery</option>
                <option value="edibles">Edibles e.g food, snacks, drinks</option>
                <option value="documents">Documents </option>
                <option value="hair-extentions">Hair extentions</option>
                <option value="gadget">Gadgets</option>
                <option value="drugs">Drugs</option>
                <option value="breakables">Breakables e.g ceramics, plastics</option>
                <option value="television">Television</option>
                <option value="others" selected >Others</option>
              </select>
              <br />
              <br />
          

              <div id="checked" className="row">
                <div className="col-lg-4 form-check form-check">
                  <img src={fastDelivery} alt="" />
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    Bike
                  </label>
                </div>
                <div className="col-lg-4 form-check form-check">
                  <img src={truck} alt="" />
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label className="form-check-label" for="flexRadioDefault2">
                    Vehicle
                  </label>
                </div>
              </div>
              <p>
                <HiOutlineLocationMarker />
                <input type="text" required />
              </p>
              <br />
              <p>
                <HiOutlineLocationMarker />
                <input type="text" required /> <br />
                <br />
              </p>
              <p>Estimated kilometer 15mins km/hr</p>
              <br />
              <br />
              <center>
                <Link to="/Payment1">
                  <input type="submit" value="Payment" />
                </Link>
              </center>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Schedule2;
